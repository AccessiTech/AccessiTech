import { vi } from 'vitest';
vi.doMock('../../components/Header/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header-row-default" />,
}));
vi.doMock('../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => <div data-testid="metadata" />,
}));

import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { screen } from '@testing-library/react';
import NotFound from '../404';

describe('NotFound (404) Page', () => {
  it('renders the main content area', () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByRole('main', { name: /page not found/i })).toBeInTheDocument();
  });

  it('renders the 404 message and main content', () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByRole('main', { name: /page not found/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /404 - page not found/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/the page you are looking for does not exist/i)).toBeInTheDocument();
  });
});
