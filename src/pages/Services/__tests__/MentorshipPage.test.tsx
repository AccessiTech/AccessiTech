import { vi } from 'vitest';
vi.mock('../../../components/ProductPage/ProductPage', () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <div data-testid="product-page">{title}</div>,
}));

import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import MentorshipPage from '../MentorshipPage';

describe('MentorshipPage', () => {
  it('renders the ProductPage component', () => {
    renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });

  it('passes Mentorship as the title', () => {
    renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
    expect(screen.getByText('Mentorship')).toBeInTheDocument();
  });
});
