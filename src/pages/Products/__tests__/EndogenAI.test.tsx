import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import EndogenAI, { HERO_TAGLINE, PROBLEM_INTRO, WHAT_TITLE } from '../EndogenAI';

describe('EndogenAI Page', () => {
  it('renders the page with all 7 sections', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Check for main heading
    expect(screen.getByRole('heading', { level: 1, name: 'EndogenAI' })).toBeInTheDocument();

    // Check for section headings
    expect(screen.getByRole('heading', { level: 2, name: 'The Problem' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: WHAT_TITLE })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'How it works' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'dogma & DogmaMCP' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'What the research says' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Get Started' })).toBeInTheDocument();
  });

  it('renders the hero section with tagline', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(HERO_TAGLINE)).toBeInTheDocument();
  });

  it('renders the problem section with intro and cards', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(PROBLEM_INTRO)).toBeInTheDocument();
  });

  it('renders the breadcrumb navigation', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    const breadcrumbItems = screen.getAllByText('EndogenAI');
    expect(breadcrumbItems.length).toBeGreaterThan(0);
  });

  it('renders the GitHub CTA button', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    const githubLink = screen.getByText(/Explore on GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/EndogenAI/dogma');
  });
});
