import { vi } from 'vitest';
vi.mock('../../../../components/ProductPage/ProductPage', () => ({
  __esModule: true,
  default: ({
    title,
    parentCrumb,
    getStartedLeftParagraph,
    getStartedRightParagraph,
    getStartedLeftButtonLabel,
    getStartedRightButtonLabel,
  }: {
    title: string;
    parentCrumb?: { label: string };
    getStartedLeftParagraph?: string;
    getStartedRightParagraph?: string;
    getStartedLeftButtonLabel?: string;
    getStartedRightButtonLabel?: string;
  }) => (
    <div data-testid="product-page">
      {title}
      {parentCrumb && <span data-testid="parent-crumb">{parentCrumb.label}</span>}
      {getStartedLeftParagraph && (
        <span data-testid="left-paragraph">{getStartedLeftParagraph}</span>
      )}
      {getStartedRightParagraph && (
        <span data-testid="right-paragraph">{getStartedRightParagraph}</span>
      )}
      {getStartedLeftButtonLabel && (
        <span data-testid="left-button-label">{getStartedLeftButtonLabel}</span>
      )}
      {getStartedRightButtonLabel && (
        <span data-testid="right-button-label">{getStartedRightButtonLabel}</span>
      )}
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

  it('passes custom GetStartedSection left paragraph', () => {
    renderWithProviders(<ASaaPsPage />, { route: '/services/consulting/asaaps' });
    expect(screen.getByTestId('left-paragraph')).toHaveTextContent(
      /Ready to bring accessibility into your next build or retrofit/
    );
  });

  it('passes custom GetStartedSection right paragraph', () => {
    renderWithProviders(<ASaaPsPage />, { route: '/services/consulting/asaaps' });
    expect(screen.getByTestId('right-paragraph')).toHaveTextContent(
      /Have questions about what's included/
    );
  });

  it('passes custom button labels for GetStartedSection', () => {
    renderWithProviders(<ASaaPsPage />, { route: '/services/consulting/asaaps' });
    expect(screen.getByTestId('left-button-label')).toHaveTextContent(/Schedule a Discovery Call/);
    expect(screen.getByTestId('right-button-label')).toHaveTextContent(/Send us a message/);
  });
});
