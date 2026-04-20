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
import ASaaPsPage from '../ASaaPsPage';

describe('ASaaPsPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<ASaaPsPage />, { route: '/services/consulting/asaaps' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<ASaaPsPage />, { route: '/services/consulting/asaaps' });
    expect(
      screen.getByText('Accessible Software as a Product/Service (ASaaPs)')
    ).toBeInTheDocument();
  });

  it('passes Consulting as the parent breadcrumb', () => {
    renderWithProviders(<ASaaPsPage />, { route: '/services/consulting/asaaps' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Consulting');
  });
});
