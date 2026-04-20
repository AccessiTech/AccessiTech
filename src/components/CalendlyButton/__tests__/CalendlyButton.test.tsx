import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import CalendlyButton, { CALENDLY_URL } from '../CalendlyButton';

describe('CalendlyButton', () => {
  it('renders the button with default label', () => {
    renderWithProviders(<CalendlyButton />);
    expect(screen.getByTestId('calendly-button')).toBeInTheDocument();
    expect(screen.getByText('Schedule a Discovery Call')).toBeInTheDocument();
  });

  it('renders with a custom label', () => {
    renderWithProviders(<CalendlyButton label="Book a Free Call" />);
    expect(screen.getByText('Book a Free Call')).toBeInTheDocument();
  });

  it('links to the Calendly URL', () => {
    renderWithProviders(<CalendlyButton />);
    const button = screen.getByTestId('calendly-button');
    expect(button).toHaveAttribute('href', CALENDLY_URL);
  });

  it('opens in a new tab with noopener noreferrer', () => {
    renderWithProviders(<CalendlyButton />);
    const button = screen.getByTestId('calendly-button');
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has an accessible aria-label that mentions new tab', () => {
    renderWithProviders(<CalendlyButton />);
    const button = screen.getByTestId('calendly-button');
    expect(button).toHaveAttribute('aria-label', expect.stringContaining('opens in new tab'));
  });

  it('uses the fallback Calendly URL when env var is not set', () => {
    expect(CALENDLY_URL).toMatch(/^https:\/\/calendly\.com\//);
  });
});
