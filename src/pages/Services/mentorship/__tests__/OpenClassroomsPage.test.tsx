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
import OpenClassroomsPage from '../OpenClassroomsPage';

describe('OpenClassroomsPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<OpenClassroomsPage />, { route: '/services/mentorship/openclassrooms' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<OpenClassroomsPage />, { route: '/services/mentorship/openclassrooms' });
    expect(screen.getByText('OpenClassrooms Partnership')).toBeInTheDocument();
  });

  it('passes Mentorship as the parent breadcrumb', () => {
    renderWithProviders(<OpenClassroomsPage />, { route: '/services/mentorship/openclassrooms' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Mentorship');
  });
});
