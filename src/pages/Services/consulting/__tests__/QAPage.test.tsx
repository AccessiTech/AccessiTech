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
import QAPage from '../QAPage';

describe('QAPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<QAPage />, { route: '/services/consulting/qa' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<QAPage />, { route: '/services/consulting/qa' });
    expect(screen.getByText('Quality Assurance and Testing')).toBeInTheDocument();
  });

  it('passes Consulting as the parent breadcrumb', () => {
    renderWithProviders(<QAPage />, { route: '/services/consulting/qa' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Consulting');
  });
});
