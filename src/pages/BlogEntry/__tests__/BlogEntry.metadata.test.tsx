import fs from 'node:fs';
import path from 'node:path';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { Link, Route, Routes } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Metadata from '../../../components/Metadata/Metadata';
import { adoptGeneratedMetadata } from '../../../settings/getMetaData';
import { HOME_URL } from '../../../settings/strings';
import store from '../../../store/store';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import ConsultingPage from '../../Services/ConsultingPage';
import BlogEntry from '../BlogEntry';

const motion = 'WCAG-Guideline-2-5-4-Motion-Actuation-Explained';
const signLanguage = 'WCAG-Guideline-1-2-6-Sign-Language-Prerecorded-Explained';
const ordinaryPost = 'AI-for-Coding-Accessibility';

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (!/^\/data\/(wcag|blog)\/[^/]+\.md$/.test(url)) {
        throw new Error(`Unexpected fetch in metadata regression: ${url}`);
      }
      return new Response(fs.readFileSync(path.resolve('public', url.slice(1)), 'utf8'));
    })
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
  document.head.innerHTML = '';
});

function openGeneratedPage(route: string) {
  const generatedPath = route.replace(/\.html$/i, '') + '.html';
  const html = fs.readFileSync(path.resolve('docs', generatedPath.slice(1)), 'utf8');
  const parsed = new DOMParser().parseFromString(html, 'text/html');
  document.head.innerHTML = parsed.head.innerHTML;
  expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
    'href',
    `${HOME_URL}${route.replace(/\.html$/i, '')}`
  );
  adoptGeneratedMetadata(document.head);
  return renderWithProviders(
    <>
      <Metadata title="AccessiTech" description="Default metadata" canonical={`${HOME_URL}/`} />
      <Link to={`/wcag/${motion}`}>Motion article</Link>
      <Link to={`/wcag/${signLanguage}.html`}>Sign language article</Link>
      <Link to={`/blog/${ordinaryPost}`}>Ordinary blog article</Link>
      <Link to="/services/consulting">Consulting service</Link>
      <Routes>
        <Route path="/wcag/:id" element={<BlogEntry />} />
        <Route path="/blog/:id" element={<BlogEntry />} />
        <Route path="/services/consulting" element={<ConsultingPage />} />
      </Routes>
    </>,
    { route, store }
  );
}

async function expectCoherentHead(route: string) {
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `${HOME_URL}${route}`
    );
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.not.stringContaining('Default metadata')
    );
    expect(
      document.head.querySelectorAll('meta[property="og:url"], meta[name="og:url"]')
    ).toHaveLength(1);
    expect(document.head.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      `${HOME_URL}${route}`
    );
    expect(document.head.querySelectorAll('meta[name="twitter:url"]')).toHaveLength(1);
    expect(document.head.querySelector('meta[name="twitter:url"]')).toHaveAttribute(
      'content',
      `${HOME_URL}${route}`
    );
  });
}

describe('generated page to client metadata lifecycle', () => {
  it.each([
    `/wcag/${motion}`,
    `/wcag/${motion}.html`,
    `/wcag/${signLanguage}`,
    `/wcag/${signLanguage}.HTML`,
    `/blog/${ordinaryPost}`,
    `/blog/${ordinaryPost}.html`,
    '/services/consulting',
  ])('keeps one coherent metadata set after loading %s', async route => {
    openGeneratedPage(route);
    await expectCoherentHead(route.replace(/\.html$/i, ''));
  });

  it('updates metadata while navigating between WCAG, blog and consulting routes', async () => {
    openGeneratedPage(`/wcag/${motion}`);
    await expectCoherentHead(`/wcag/${motion}`);
    fireEvent.click(screen.getByText('Ordinary blog article'));
    await expectCoherentHead(`/blog/${ordinaryPost}`);
    fireEvent.click(screen.getByText('Sign language article'));
    await expectCoherentHead(`/wcag/${signLanguage}`);
    fireEvent.click(screen.getByText('Consulting service'));
    await expectCoherentHead('/services/consulting');
    fireEvent.click(screen.getByText('Motion article'));
    await expectCoherentHead(`/wcag/${motion}`);
  });
});
