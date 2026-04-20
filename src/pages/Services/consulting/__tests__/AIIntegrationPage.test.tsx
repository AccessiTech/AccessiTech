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
import AIIntegrationPage from '../AIIntegrationPage';

describe('AIIntegrationPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<AIIntegrationPage />, { route: '/services/consulting/ai-integration' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<AIIntegrationPage />, { route: '/services/consulting/ai-integration' });
    expect(screen.getByText('Agentic Intelligence Integration')).toBeInTheDocument();
  });

  it('passes Consulting as the parent breadcrumb', () => {
    renderWithProviders(<AIIntegrationPage />, { route: '/services/consulting/ai-integration' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Consulting');
  });
});
