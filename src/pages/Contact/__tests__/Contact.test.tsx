import { vi } from 'vitest';

vi.doMock('../../components/Header/Header', () => ({
  __esModule: true,
  HeaderRow: () => <div data-testid="header-row" />,
  default: () => <div data-testid="header-row-default" />,
}));

vi.doMock('../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => <div data-testid="metadata" />,
}));

import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import Contact from '../Contact';

describe('Contact Page', () => {
  it('renders the header', () => {
    renderWithProviders(<Contact />, { route: '/contact' });
    expect(screen.getByTestId('header-row')).toBeInTheDocument();
  });

  it('renders the page heading', () => {
    renderWithProviders(<Contact />, { route: '/contact' });
    expect(screen.getByRole('heading', { level: 2, name: /get in touch/i })).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    renderWithProviders(<Contact />, { route: '/contact' });
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('renders the Calendly button', () => {
    renderWithProviders(<Contact />, { route: '/contact' });
    expect(screen.getByTestId('calendly-button')).toBeInTheDocument();
  });

  it('renders a breadcrumb with Home link', () => {
    renderWithProviders(<Contact />, { route: '/contact' });
    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });
});
