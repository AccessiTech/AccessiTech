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
import CoachingPage from '../CoachingPage';

describe('CoachingPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<CoachingPage />, { route: '/services/mentorship/coaching' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes the correct title', () => {
    renderWithProviders(<CoachingPage />, { route: '/services/mentorship/coaching' });
    expect(screen.getByText('1:1 Coaching and Corporate Workshops')).toBeInTheDocument();
  });

  it('passes Mentorship as the parent breadcrumb', () => {
    renderWithProviders(<CoachingPage />, { route: '/services/mentorship/coaching' });
    expect(screen.getByTestId('parent-crumb')).toHaveTextContent('Mentorship');
  });
});
