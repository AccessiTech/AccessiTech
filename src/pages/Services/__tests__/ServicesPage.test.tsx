import { vi } from 'vitest';
vi.mock('../../../components/Services/Services', () => ({
  __esModule: true,
  default: () => <div data-testid="services" />,
}));
vi.mock('../../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => <div data-testid="metadata" />,
}));

import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import ServicesPage from '../ServicesPage';

describe('ServicesPage', () => {
  it('renders the Services component', () => {
    renderWithProviders(<ServicesPage />, { route: '/services' });
    expect(screen.getByTestId('services')).toBeInTheDocument();
  });

  it('renders main landmark', () => {
    renderWithProviders(<ServicesPage />, { route: '/services' });
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders Metadata', () => {
    renderWithProviders(<ServicesPage />, { route: '/services' });
    expect(screen.getByTestId('metadata')).toBeInTheDocument();
  });
});
