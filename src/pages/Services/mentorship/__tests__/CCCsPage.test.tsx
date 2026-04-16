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
import CCCsPage from '../CCCsPage';

describe('CCCsPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<CCCsPage />, { route: '/services/mentorship/cccs' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<CCCsPage />, { route: '/services/mentorship/cccs' });
    expect(screen.getByText('Course and Content Creation (CCCs)')).toBeInTheDocument();
  });

  it('passes Mentorship as the parent breadcrumb', () => {
    renderWithProviders(<CCCsPage />, { route: '/services/mentorship/cccs' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Mentorship');
  });
});
