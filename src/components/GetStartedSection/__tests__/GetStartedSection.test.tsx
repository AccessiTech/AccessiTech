import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import GetStartedSection from '../GetStartedSection';
import { renderWithProviders } from '../../../utils/__tests__/test-utils';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('GetStartedSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the section with heading', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      expect(screen.getByRole('heading', { name: 'Get Started', level: 3 })).toBeInTheDocument();
    });

    it('renders discovery call description and button', () => {
      renderWithProviders(<GetStartedSection page="mentorship" />);
      expect(
        screen.getByText(/Not sure which mentorship path fits your needs\?/)
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Schedule a Discovery Call/i })
      ).toBeInTheDocument();
    });

    it('renders message option description and button', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      expect(screen.getByText(/Would it be easier to start with a message\?/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send us a message/i })).toBeInTheDocument();
    });

    it('applies correct CSS class based on page prop', () => {
      const { container } = renderWithProviders(<GetStartedSection page="mentorship" />);
      const section = container.querySelector('section');
      expect(section).toHaveClass('product-next-steps');
      expect(section).toHaveClass('row');
      expect(section).toHaveClass('mentorship');
    });

    it('applies correct CSS class for consulting page', () => {
      const { container } = renderWithProviders(<GetStartedSection page="consulting" />);
      const section = container.querySelector('section');
      expect(section).toHaveClass('consulting');
    });
  });

  describe('Calendly Button', () => {
    it('renders CalendlyButton with correct label', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      const calendlyButton = screen.getByRole('button', { name: /Schedule a Discovery Call/i });
      expect(calendlyButton).toBeInTheDocument();
      expect(calendlyButton).toHaveClass('mb-4');
      expect(calendlyButton).toHaveClass('w-100');
    });
  });

  describe('Message Button Navigation', () => {
    it('navigates to /contact with mentorship inquiry', () => {
      renderWithProviders(<GetStartedSection page="mentorship" />);
      const messageButton = screen.getByTestId('mentorship-hub-message-btn');
      fireEvent.click(messageButton);
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=mentorship');
    });

    it('navigates to /contact with consulting inquiry', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      const messageButton = screen.getByTestId('consulting-hub-message-btn');
      fireEvent.click(messageButton);
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=consulting');
    });

    it('generates dynamic test IDs based on page prop', () => {
      const { rerender } = renderWithProviders(<GetStartedSection page="mentorship" />);
      expect(screen.getByTestId('mentorship-hub-message-btn')).toBeInTheDocument();

      rerender(<GetStartedSection page="consulting" />);
      expect(screen.getByTestId('consulting-hub-message-btn')).toBeInTheDocument();
    });

    it('message button has correct styling classes', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      const messageButton = screen.getByTestId('consulting-hub-message-btn');
      expect(messageButton).toHaveClass('ms-2');
      expect(messageButton).toHaveClass('w-100');
      expect(messageButton).toHaveClass('btn');
      expect(messageButton).toHaveClass('btn-primary');
    });
  });

  describe('Layout', () => {
    it('renders two columns with equal content', () => {
      const { container } = renderWithProviders(<GetStartedSection page="mentorship" />);
      const columns = container.querySelectorAll('.col');
      expect(columns).toHaveLength(2);
    });

    it('renders correct content in first column', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      const columns = screen
        .getByText(/Not sure which mentorship path fits your needs\?/)
        .closest('.col');
      expect(columns).toBeInTheDocument();
      expect(columns?.querySelector('[data-testid="calendly-button"]')).toBeTruthy();
    });

    it('renders correct content in second column', () => {
      renderWithProviders(<GetStartedSection page="mentorship" />);
      const column = screen
        .getByText(/Would it be easier to start with a message\?/)
        .closest('.col');
      expect(column).toBeInTheDocument();
      expect(column?.querySelector('[data-testid="mentorship-hub-message-btn"]')).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('section has semantic HTML structure', () => {
      const { container } = renderWithProviders(<GetStartedSection page="consulting" />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section?.tagName).toBe('SECTION');
    });

    it('heading is properly structured', () => {
      renderWithProviders(<GetStartedSection page="mentorship" />);
      const heading = screen.getByRole('heading', { name: 'Get Started', level: 3 });
      expect(heading.tagName).toBe('H3');
    });

    it('all interactive elements are accessible via keyboard', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      const buttons = screen.getAllByRole('button');
      // Check that the message button has type="button"
      const messageButton = screen.getByTestId('consulting-hub-message-btn');
      expect(messageButton).toHaveAttribute('type', 'button');
      // Verify we have at least 2 interactive elements (Calendly link + message button)
      expect(buttons.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Edge Cases', () => {
    it('handles empty page prop gracefully', () => {
      renderWithProviders(<GetStartedSection page="" />);
      const messageButton = screen.getByTestId('-hub-message-btn');
      expect(messageButton).toBeInTheDocument();
      fireEvent.click(messageButton);
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=');
    });

    it('handles special characters in page prop', () => {
      renderWithProviders(<GetStartedSection page="test-page" />);
      const messageButton = screen.getByTestId('test-page-hub-message-btn');
      fireEvent.click(messageButton);
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=test-page');
    });
  });
});
