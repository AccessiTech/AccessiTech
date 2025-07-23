import { describe, it, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CustomMarkdownLink } from '../CustomLink';

// Mock SITE_HOST for external link logic
vi.mock('../../../settings/env', () => ({ SITE_HOST: 'accessitech.com' }));

describe('CustomMarkdownLink', () => {
  it('renders an external link with icon and correct attributes', () => {
    render(
      <MemoryRouter>
        <CustomMarkdownLink href="https://external.com">External Site</CustomMarkdownLink>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /external site/i });
    expect(link).toHaveAttribute('href', 'https://external.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'External Link');
    // Check for icon by class
    const icon = document.querySelector('.fa-external-link-alt');
    expect(icon).toBeInTheDocument();
  });

  it('renders an internal link (absolute path) as a React Router Link', () => {
    render(
      <MemoryRouter>
        <CustomMarkdownLink href="/about">About Us</CustomMarkdownLink>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /about us/i });
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders an internal link (relative path) as a React Router Link', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <CustomMarkdownLink href="post-1">Blog Post</CustomMarkdownLink>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /blog post/i });
    // Should include the base path
    expect(link.getAttribute('href')).toMatch(/blog.*post-1/);
  });

  it('renders a span if no href is provided', () => {
    render(
      <MemoryRouter>
        <CustomMarkdownLink>Just Text</CustomMarkdownLink>
      </MemoryRouter>
    );
    const span = screen.getByText('Just Text');
    expect(span.tagName).toBe('SPAN');
  });

  it('renders children as elements (not just string)', () => {
    render(
      <MemoryRouter>
        <CustomMarkdownLink href="https://external.com">
          <span>External Element</span>
        </CustomMarkdownLink>
      </MemoryRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toContainHTML('<span>External Element</span>');
  });
});
