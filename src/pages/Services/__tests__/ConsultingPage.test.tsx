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
import ConsultingPage from '../ConsultingPage';

describe('ConsultingPage hub', () => {
  beforeEach(() => mockNavigate.mockClear());

  it('renders main landmark with consulting-hub testid', () => {
    renderWithProviders(<ConsultingPage />, { route: '/services/consulting' });
    expect(screen.getByTestId('consulting-hub')).toBeInTheDocument();
  });

  it('renders Metadata', () => {
    renderWithProviders(<ConsultingPage />, { route: '/services/consulting' });
    expect(screen.getByTestId('metadata')).toBeInTheDocument();
  });

  it('renders all three service area cards', () => {
    renderWithProviders(<ConsultingPage />, { route: '/services/consulting' });
    expect(screen.getByTestId('consulting-card-asaaps')).toBeInTheDocument();
    expect(screen.getByTestId('consulting-card-ai-integration')).toBeInTheDocument();
    expect(screen.getByTestId('consulting-card-qa')).toBeInTheDocument();
  });

  describe('navigation', () => {
    it('navigates to /services/consulting/asaaps from Learn more', () => {
      renderWithProviders(<ConsultingPage />, { route: '/services/consulting' });
      fireEvent.click(screen.getByTestId('consulting-card-asaaps-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services/consulting/asaaps');
    });

    it('navigates to /services/consulting/ai-integration from Learn more', () => {
      renderWithProviders(<ConsultingPage />, { route: '/services/consulting' });
      fireEvent.click(screen.getByTestId('consulting-card-ai-integration-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services/consulting/ai-integration');
    });

    it('navigates to /services/consulting/qa from Learn more', () => {
      renderWithProviders(<ConsultingPage />, { route: '/services/consulting' });
      fireEvent.click(screen.getByTestId('consulting-card-qa-learn-more-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/services/consulting/qa');
    });

    it('navigates to /contact?inquiry=consulting from message button', () => {
      renderWithProviders(<ConsultingPage />, { route: '/services/consulting' });
      fireEvent.click(screen.getByTestId('consulting-hub-message-btn'));
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=consulting');
    });
  });
});
