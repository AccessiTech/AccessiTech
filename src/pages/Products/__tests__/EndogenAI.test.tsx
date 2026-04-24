import { vi } from 'vitest';
vi.mock('../../../components/ProductPage/ProductPage', () => ({
  __esModule: true,
  default: ({
    title,
    parentCrumb,
  }: {
    title: string;
    parentCrumb?: { label: string; href: string };
  }) => (
    <div data-testid="product-page">
      {title}
      {parentCrumb && <span data-testid="parent-crumb">{parentCrumb.label}</span>}
    </div>
  ),
}));

import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import EndogenAI, { ENDOGENAI_TITLE } from '../EndogenAI';

describe('EndogenAI Page', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(ENDOGENAI_TITLE)).toBeInTheDocument();
  });

  it('passes Products as the parent breadcrumb', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Products');
  });
});
