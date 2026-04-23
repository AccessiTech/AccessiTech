import { vi } from 'vitest';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});
vi.mock('../../../components/Metadata/Metadata', () => ({
  __esModule: true,
  default: () => <div data-testid="metadata" />,
}));
vi.mock('../../../components/CalendlyButton/CalendlyButton', () => ({
  __esModule: true,
  default: () => <button data-testid="calendly-button">Calendly</button>,
}));

import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import MentorshipPage from '../MentorshipPage';

describe('MentorshipPage hub', () => {
  beforeEach(() => mockNavigate.mockClear());

  it('renders main landmark with mentorship-hub testid', () => {
    renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
    expect(screen.getByTestId('mentorship-hub')).toBeInTheDocument();
  });

  it('renders Metadata', () => {
    renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
    expect(screen.getByTestId('metadata')).toBeInTheDocument();
  });

  it('renders all four mentorship area cards', () => {
    renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
    expect(screen.getByTestId('mentorship-card-cccs')).toBeInTheDocument();
    expect(screen.getByTestId('mentorship-card-coaching')).toBeInTheDocument();
    expect(screen.getByTestId('mentorship-card-openclassrooms')).toBeInTheDocument();
    expect(screen.getByTestId('mentorship-card-sotc')).toBeInTheDocument();
  });

  describe('navigation', () => {
    it('navigates to /services/mentorship/cccs from Learn more', () => {
      renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
      fireEvent.click(screen.getByTestId('mentorship-card-cccs-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services/mentorship/cccs');
    });

    it('navigates to /services/mentorship/coaching from Learn more', () => {
      renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
      fireEvent.click(screen.getByTestId('mentorship-card-coaching-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services/mentorship/coaching');
    });

    it('navigates to /services/mentorship/openclassrooms from Learn more', () => {
      renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
      fireEvent.click(screen.getByTestId('mentorship-card-openclassrooms-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services/mentorship/openclassrooms');
    });

    it('navigates to /services/mentorship/sotc from Learn more', () => {
      renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
      fireEvent.click(screen.getByTestId('mentorship-card-sotc-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services/mentorship/sotc');
    });

    it('navigates to /contact?inquiry=mentorship from message button', () => {
      renderWithProviders(<MentorshipPage />, { route: '/services/mentorship' });
      fireEvent.click(screen.getByTestId('mentorship-hub-message-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=mentorship');
    });
  });
});
