/**
 * Conversion Pathway Integration Tests
 *
 * These tests verify critical user journeys from discovery → engagement → contact.
 * Tests are organized by conversion touchpoint and verify:
 * - CTAs navigate to correct routes
 * - Query params are preserved
 * - Contact form pre-populates based on query params
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../utils/__tests__/renderWithProviders';
import Home from '../pages/Home/Home';
import ConsultingPage from '../pages/Services/ConsultingPage';
import ProductsHub from '../pages/Products/ProductsHub';
import ASaaPsPage from '../pages/Services/consulting/ASaaPsPage';
import AIIntegrationPage from '../pages/Services/consulting/AIIntegrationPage';
import QAPage from '../pages/Services/consulting/QAPage';
import CoachingPage from '../pages/Services/mentorship/CoachingPage';
import SOTCPage from '../pages/Services/mentorship/SOTCPage';
import CCCs from '../pages/Products/CCCs';
import Contact from '../pages/Contact/Contact';
import ContactForm from '../components/ContactForm/ContactForm';

// Mock window.location for navigation tracking
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...(actual as any),
    useNavigate: () => mockNavigate,
  };
});

// Mock CalendlyButton to avoid external script loading
vi.mock('../components/CalendlyButton/CalendlyButton', () => ({
  default: ({ label }: { label: string }) => <button data-testid="calendly-button">{label}</button>,
}));

describe('Conversion Pathways — Integration Tests', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  describe('Homepage Conversion Touchpoints', () => {
    it('has working "Explore all services" CTA', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Home />);

      await waitFor(() => expect(screen.getByTestId('explore-services-btn')).toBeInTheDocument());

      const exploreBtn = screen.getByTestId('explore-services-btn');
      await user.click(exploreBtn);

      expect(mockNavigate).toHaveBeenCalledWith('/services');
    });

    it('has working "Explore all products" CTA', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Home />);

      await waitFor(() => expect(screen.getByTestId('explore-products-btn')).toBeInTheDocument());

      const exploreBtn = screen.getByTestId('explore-products-btn');
      await user.click(exploreBtn);

      expect(mockNavigate).toHaveBeenCalledWith('/products');
    });

    it('has working product card CTAs that navigate to product detail pages', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Home />);

      // WCAG Series
      const wcagBtn = screen.getByTestId('product-card-btn-wcag');
      await user.click(wcagBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/wcag-series');

      // OSS & ASaaPs
      const ossBtn = screen.getByTestId('product-card-btn-oss');
      await user.click(ossBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/oss-asaaps');

      // CCCs
      const cccsBtn = screen.getByTestId('product-card-btn-cccs');
      await user.click(cccsBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/cccs');
    });

    it('has working "Contact Us" CTA', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Home />);

      const contactBtn = screen.getByTestId('contact-us-btn');
      await user.click(contactBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });
  });

  describe('Consulting Detail Page CTAs', () => {
    it('ASaaPs page CTA has correct href for contact with consulting inquiry', () => {
      renderWithProviders(<ASaaPsPage />);

      const ctaButton = screen.getByText(/schedule a discovery call/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=consulting');
    });

    it('AI Integration page CTA has correct href for contact with consulting inquiry', () => {
      renderWithProviders(<AIIntegrationPage />);

      // AI Integration page has "Schedule a discovery call" in description text too
      // Get all matches and find the one that's an <a> tag (the button)
      const allMatches = screen.getAllByText(/schedule a discovery call/i);
      const ctaButton = allMatches.find(el => el.tagName === 'A');
      expect(ctaButton).toBeTruthy();
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=consulting');
    });

    it('QA page CTA has correct href for contact with qa inquiry', () => {
      renderWithProviders(<QAPage />);

      const ctaButton = screen.getByText(/schedule an audit call/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=qa');
    });
  });

  describe('Mentorship Detail Page CTAs', () => {
    it('Coaching page CTA has correct href for contact with mentorship inquiry', () => {
      renderWithProviders(<CoachingPage />);

      const ctaButton = screen.getByText(/schedule a coaching conversation/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=mentorship');
    });

    it('SOTC page CTA has correct href for contact with sotc inquiry', () => {
      renderWithProviders(<SOTCPage />);

      const ctaButton = screen.getByText(/join the interest list/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=sotc');
    });
  });

  describe('Product Detail Page CTAs', () => {
    it('CCCs product page CTA has correct href to contact (no inquiry param)', () => {
      renderWithProviders(<CCCs />);

      const ctaButton = screen.getByText(/start a project/i);
      expect(ctaButton).toHaveAttribute('href', '/contact');
    });
  });

  describe('Hub Page CTAs', () => {
    it('Consulting hub has CalendlyButton CTAs', () => {
      renderWithProviders(<ConsultingPage />);

      const calendlyButtons = screen.getAllByTestId('calendly-button');
      // ConsultingPage has 2 CalendlyButtons
      expect(calendlyButtons).toHaveLength(2);
      expect(calendlyButtons[0]).toHaveTextContent(/schedule a discovery call/i);
    });

    it('has product card buttons that navigate to detail pages', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProductsHub />);

      // Click WCAG button and verify navigation
      const wcagBtn = screen.getByTestId('hub-card-btn-wcag');
      await user.click(wcagBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/wcag-series');

      // Click OSS button and verify navigation
      const ossBtn = screen.getByTestId('hub-card-btn-oss');
      await user.click(ossBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/oss-asaaps');

      // Click CCCs button and verify navigation
      const cccsBtn = screen.getByTestId('hub-card-btn-cccs');
      await user.click(cccsBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/cccs');
    });
  });

  describe('Contact Page Query Param Pre-Population', () => {
    it('pre-populates inquiry dropdown with consulting param', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=consulting' });

      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Consulting');
    });

    it('pre-populates inquiry dropdown with mentorship param', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=mentorship' });

      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Mentorship');
    });

    it('pre-populates inquiry dropdown with qa param', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=qa' });

      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Quality Assurance');
    });

    it('leaves inquiry dropdown empty when no param provided', () => {
      renderWithProviders(<Contact />, { route: '/contact' });

      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('');
    });

    it('leaves inquiry dropdown empty for unrecognized param', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=unknown' });

      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('');
    });
  });

  describe('ContactForm Component Inquiry Pre-Fill', () => {
    it('pre-fills from URL param when available', () => {
      renderWithProviders(<ContactForm />, { route: '/?inquiry=consulting' });

      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Consulting');
    });

    it('pre-fills from inquiryType prop when provided', () => {
      renderWithProviders(<ContactForm inquiryType="mentorship" />);

      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Mentorship');
    });

    it('prefers URL param over inquiryType prop', () => {
      renderWithProviders(<ContactForm inquiryType="mentorship" />, {
        route: '/?inquiry=consulting',
      });

      // URL param should win
      const inquirySelect = screen.getByLabelText(/inquiry type/i) as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Consulting');
    });
  });

  describe('Calendly Alternative Conversion Path', () => {
    it('renders CalendlyButton on Contact page', () => {
      renderWithProviders(<Contact />);

      const calendlyBtn = screen.getByTestId('calendly-button');
      expect(calendlyBtn).toBeInTheDocument();
      expect(calendlyBtn).toHaveTextContent(/prefer to schedule directly/i);
    });

    it('renders CalendlyButton on Consulting hub page', () => {
      renderWithProviders(<ConsultingPage />);

      const calendlyBtns = screen.getAllByTestId('calendly-button');
      expect(calendlyBtns.length).toBeGreaterThan(0);
      expect(calendlyBtns[0]).toBeInTheDocument();
    });
  });
});
