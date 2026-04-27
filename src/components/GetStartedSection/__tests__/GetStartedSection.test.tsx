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

  describe('Rendering with defaults', () => {
    it('renders the section with heading', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      expect(screen.getByRole('heading', { name: 'Get Started', level: 3 })).toBeInTheDocument();
    });

    it('renders discovery call description and button', () => {
      renderWithProviders(<GetStartedSection page="mentorship" />);
      expect(
        screen.getByText(/Ready to explore how this could work for you\?/)
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Schedule a Discovery Call/i })
      ).toBeInTheDocument();
    });

    it('renders message option description and button', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      expect(screen.getByText(/Have questions\?/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send us a message/i })).toBeInTheDocument();
    });

    it('applies correct CSS class based on page prop', () => {
      const { container } = renderWithProviders(<GetStartedSection page="mentorship" />);
      const section = container.querySelector('section');
      expect(section).toHaveClass('product-next-steps');
      expect(section).toHaveClass('mentorship');
      // row class is on inner div, not section
      const rowDiv = section?.querySelector('.row');
      expect(rowDiv).toBeTruthy();
    });

    it('applies correct CSS class for consulting page', () => {
      const { container } = renderWithProviders(<GetStartedSection page="consulting" />);
      const section = container.querySelector('section');
      expect(section).toHaveClass('consulting');
    });

    it('applies correct CSS class for asaaps page', () => {
      const { container } = renderWithProviders(<GetStartedSection page="asaaps" />);
      const section = container.querySelector('section');
      expect(section).toHaveClass('asaaps');
    });
  });

  describe('Custom copy rendering', () => {
    it('renders custom left paragraph when provided', () => {
      const customLeft = 'Custom left copy for testing';
      renderWithProviders(<GetStartedSection page="asaaps" leftParagraph={customLeft} />);
      expect(screen.getByText(customLeft)).toBeInTheDocument();
    });

    it('renders custom right paragraph when provided', () => {
      const customRight = 'Custom right copy for testing';
      renderWithProviders(<GetStartedSection page="asaaps" rightParagraph={customRight} />);
      expect(screen.getByText(customRight)).toBeInTheDocument();
    });

    it('renders both custom paragraphs when provided', () => {
      const customLeft = 'Custom left paragraph';
      const customRight = 'Custom right paragraph';
      renderWithProviders(
        <GetStartedSection page="asaaps" leftParagraph={customLeft} rightParagraph={customRight} />
      );
      expect(screen.getByText(customLeft)).toBeInTheDocument();
      expect(screen.getByText(customRight)).toBeInTheDocument();
    });

    it('renders default left paragraph when custom right provided', () => {
      const customRight = 'Only providing right copy';
      renderWithProviders(<GetStartedSection page="test" rightParagraph={customRight} />);
      expect(
        screen.getByText(/Ready to explore how this could work for you\?/)
      ).toBeInTheDocument();
      expect(screen.getByText(customRight)).toBeInTheDocument();
    });

    it('renders default right paragraph when custom left provided', () => {
      const customLeft = 'Only providing left copy';
      renderWithProviders(<GetStartedSection page="test" leftParagraph={customLeft} />);
      expect(screen.getByText(customLeft)).toBeInTheDocument();
      expect(screen.getByText(/Have questions\?/)).toBeInTheDocument();
    });
  });

  describe('Custom button labels', () => {
    it('renders custom right button label', () => {
      const customLabel = 'Start a Conversation';
      renderWithProviders(<GetStartedSection page="test" rightButtonLabel={customLabel} />);
      expect(screen.getByTestId('test-hub-message-btn')).toHaveTextContent(customLabel);
    });

    it('renders default button labels when not customized', () => {
      renderWithProviders(<GetStartedSection page="test" />);
      expect(
        screen.getByRole('button', { name: /Schedule a Discovery Call/i })
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send us a message/i })).toBeInTheDocument();
    });
  });

  describe('Message button navigation', () => {
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

    it('navigates to /contact with asaaps inquiry', () => {
      renderWithProviders(<GetStartedSection page="asaaps" />);
      const messageButton = screen.getByTestId('asaaps-hub-message-btn');
      fireEvent.click(messageButton);
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=asaaps');
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
      expect(messageButton).toHaveClass('w-100');
      expect(messageButton).toHaveClass('btn');
      expect(messageButton).toHaveClass('btn-primary');
    });
  });

  describe('Layout and structure', () => {
    it('renders two columns with content', () => {
      const { container } = renderWithProviders(<GetStartedSection page="mentorship" />);
      const columns = container.querySelectorAll('.col');
      expect(columns).toHaveLength(2);
    });

    it('renders semantic HTML structure', () => {
      const { container } = renderWithProviders(<GetStartedSection page="consulting" />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section?.tagName).toBe('SECTION');
    });

    it('heading is properly structured with H3', () => {
      renderWithProviders(<GetStartedSection page="mentorship" />);
      const heading = screen.getByRole('heading', { name: 'Get Started', level: 3 });
      expect(heading.tagName).toBe('H3');
    });
  });

  describe('Accessibility', () => {
    it('message button is keyboard accessible', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      const messageButton = screen.getByTestId('consulting-hub-message-btn');
      expect(messageButton).toHaveAttribute('type', 'button');
    });

    it('message button uses button type for keyboard navigation', () => {
      renderWithProviders(<GetStartedSection page="consulting" />);
      const messageButton = screen.getByTestId('consulting-hub-message-btn');
      expect(messageButton).toHaveAttribute('type', 'button');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in page prop', () => {
      renderWithProviders(<GetStartedSection page="test-page" />);
      const messageButton = screen.getByTestId('test-page-hub-message-btn');
      fireEvent.click(messageButton);
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=test-page');
    });

    it('handles page prop with numbers', () => {
      renderWithProviders(<GetStartedSection page="service123" />);
      const messageButton = screen.getByTestId('service123-hub-message-btn');
      fireEvent.click(messageButton);
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=service123');
    });
  });
});
