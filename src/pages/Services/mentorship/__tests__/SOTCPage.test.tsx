import { vi } from 'vitest';
vi.mock('../../../../components/ProductPage/ProductPage', () => ({
  __esModule: true,
  default: ({ title, parentCrumb }: { title: string; parentCrumb?: { label: string } }) => (
    <div data-testid="product-page">
      {title}
      {parentCrumb && <span data-testid="parent-crumb">{parentCrumb.label}</span>}
    </div>
  ),
}));

import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../../utils/__tests__/renderWithProviders';
import SOTCPage from '../SOTCPage';

describe('SOTCPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<SOTCPage />, { route: '/services/mentorship/sotc' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<SOTCPage />, { route: '/services/mentorship/sotc' });
    expect(screen.getByText('State of the Code (SOTC)')).toBeInTheDocument();
  });

  it('passes Mentorship as the parent breadcrumb', () => {
    renderWithProviders(<SOTCPage />, { route: '/services/mentorship/sotc' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Mentorship');
  });
});
