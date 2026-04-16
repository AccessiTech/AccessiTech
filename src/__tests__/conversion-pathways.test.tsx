/**
 * Conversion Pathway Integration Tests
 *
 * These tests verify critical user journeys from discovery → engagement → contact.
 * Tests are organized by conversion touchpoint and verify:
 * - CTAs navigate to correct routes
 * - Query params are preserved
 * - Contact form pre-populates based on query params
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
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

  describe('Form Submission Flow', () => {
    let fetchSpy: any;

    beforeEach(() => {
      // Mock fetch for form submission
      fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ success: true }),
      } as Response);
    });

    afterEach(() => {
      fetchSpy.mockRestore();
    });

    it('submits form with correct POST body structure', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      // Fill out form
      const nameInput = screen.getByTestId('contact-name');
      const emailInput = screen.getByTestId('contact-email');
      const inquirySelect = screen.getByTestId('contact-inquiry');
      const messageInput = screen.getByTestId('contact-message');

      await user.type(nameInput, 'Jane Doe');
      await user.type(emailInput, 'jane@example.com');
      await user.selectOptions(inquirySelect, 'Consulting');
      await user.type(messageInput, 'I need help with accessibility audits for my SaaS product.');

      // Submit form
      const submitButton = screen.getByTestId('contact-submit');
      await user.click(submitButton);

      // Wait for fetch to be called
      await waitFor(() => {
        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      // Verify POST body structure
      const [, options] = fetchSpy.mock.calls[0];
      expect(options.method).toBe('POST');
      expect(options.headers['Content-Type']).toBe('application/json');

      const body = JSON.parse(options.body);
      expect(body).toEqual({
        name: 'Jane Doe',
        email: 'jane@example.com',
        inquiryType: 'Consulting',
        message: 'I need help with accessibility audits for my SaaS product.',
      });
    });

    it('includes query param inquiry in submitted form data', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Contact />, { route: '/contact?inquiry=qa' });

      // Fill out form (inquiry should be pre-selected)
      const nameInput = screen.getByTestId('contact-name');
      const emailInput = screen.getByTestId('contact-email');
      const messageInput = screen.getByTestId('contact-message');

      await user.type(nameInput, 'John Smith');
      await user.type(emailInput, 'john@example.com');
      await user.type(messageInput, 'Need a WCAG 2.2 AA audit for our platform.');

      // Verify inquiry is pre-selected
      const inquirySelect = screen.getByTestId('contact-inquiry') as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Quality Assurance');

      // Submit form
      const submitButton = screen.getByTestId('contact-submit');
      await user.click(submitButton);

      await waitFor(() => {
        expect(fetchSpy).toHaveBeenCalledTimes(1);
      });

      const [, options] = fetchSpy.mock.calls[0];
      const body = JSON.parse(options.body);
      expect(body.inquiryType).toBe('Quality Assurance');
    });

    it('validates required fields before submission', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      // Try to submit empty form
      const submitButton = screen.getByTestId('contact-submit');
      await user.click(submitButton);

      // Form should not submit
      expect(fetchSpy).not.toHaveBeenCalled();

      // Error messages should be displayed
      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
    });

    it('validates email format before submission', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const nameInput = screen.getByTestId('contact-name');
      const emailInput = screen.getByTestId('contact-email');
      const messageInput = screen.getByTestId('contact-message');

      await user.type(nameInput, 'Test User');
      await user.type(emailInput, 'invalid-email');
      await user.type(messageInput, 'This is a test message with more than 20 characters.');

      const submitButton = screen.getByTestId('contact-submit');
      await user.click(submitButton);

      // Form should not submit with invalid email
      expect(fetchSpy).not.toHaveBeenCalled();

      // Error message should be displayed
      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      });
    });

    it('validates message minimum length before submission', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const nameInput = screen.getByTestId('contact-name');
      const emailInput = screen.getByTestId('contact-email');
      const messageInput = screen.getByTestId('contact-message');

      await user.type(nameInput, 'Test User');
      await user.type(emailInput, 'test@example.com');
      await user.type(messageInput, 'Too short');

      const submitButton = screen.getByTestId('contact-submit');
      await user.click(submitButton);

      // Form should not submit with short message
      expect(fetchSpy).not.toHaveBeenCalled();

      // Error message should be displayed
      await waitFor(() => {
        expect(screen.getByText(/message must be at least 20 characters/i)).toBeInTheDocument();
      });
    });

    it('displays success message after successful submission', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ContactForm />);

      const nameInput = screen.getByTestId('contact-name');
      const emailInput = screen.getByTestId('contact-email');
      const inquirySelect = screen.getByTestId('contact-inquiry');
      const messageInput = screen.getByTestId('contact-message');

      await user.type(nameInput, 'Test User');
      await user.type(emailInput, 'test@example.com');
      await user.selectOptions(inquirySelect, 'General Inquiry');
      await user.type(messageInput, 'This is a valid test message with sufficient length.');

      const submitButton = screen.getByTestId('contact-submit');
      await user.click(submitButton);

      // Success message should appear
      await waitFor(() => {
        expect(screen.getByTestId('contact-success')).toBeInTheDocument();
        expect(screen.getByText(/thanks! we'll be in touch/i)).toBeInTheDocument();
      });
    });
  });

  describe('End-to-End Navigation Flows', () => {
    it('verifies query param flow from service page to contact', () => {
      // Test that ASaaPs page CTA has correct inquiry param
      renderWithProviders(<ASaaPsPage />);
      const asaapsCtaButton = screen.getByText(/schedule a discovery call/i);
      expect(asaapsCtaButton).toHaveAttribute('href', '/contact?inquiry=consulting');

      // Test that Contact page pre-fills inquiry when navigated with param
      renderWithProviders(<Contact />, { route: '/contact?inquiry=consulting' });
      const inquirySelect = screen.getByTestId('contact-inquiry') as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Consulting');
    });

    it('verifies ASaaPs consulting service routes to consulting inquiry', () => {
      renderWithProviders(<ASaaPsPage />);
      const ctaButton = screen.getByText(/schedule a discovery call/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=consulting');
    });

    it('verifies QA service routes to qa inquiry', () => {
      renderWithProviders(<QAPage />);
      const ctaButton = screen.getByText(/schedule an audit call/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=qa');
    });

    it('verifies Coaching mentorship service routes to mentorship inquiry', () => {
      renderWithProviders(<CoachingPage />);
      const ctaButton = screen.getByText(/schedule a coaching conversation/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=mentorship');
    });

    it('verifies SOTC service routes to sotc inquiry', () => {
      renderWithProviders(<SOTCPage />);
      const ctaButton = screen.getByText(/join the interest list/i);
      expect(ctaButton).toHaveAttribute('href', '/contact?inquiry=sotc');
    });

    it('verifies products hub navigation to product pages', async () => {
      const user = userEvent.setup();
      renderWithProviders(<ProductsHub />);

      // Clicking product cards should navigate to detail pages
      const wcagBtn = screen.getByTestId('hub-card-btn-wcag');
      await user.click(wcagBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/wcag-series');

      const ossBtn = screen.getByTestId('hub-card-btn-oss');
      await user.click(ossBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/oss-asaaps');

      const cccsBtn = screen.getByTestId('hub-card-btn-cccs');
      await user.click(cccsBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/products/cccs');
    });

    it('verifies both Calendly and form options available on Contact page', () => {
      renderWithProviders(<Contact />);

      // Both conversion pathways should be available
      const calendlyBtn = screen.getByTestId('calendly-button');
      expect(calendlyBtn).toBeInTheDocument();

      const contactForm = screen.getByTestId('contact-form');
      expect(contactForm).toBeInTheDocument();
    });

    it('verifies inquiry param mapping works for consulting', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=consulting' });
      const inquirySelect = screen.getByTestId('contact-inquiry') as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Consulting');
    });

    it('verifies inquiry param mapping works for mentorship', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=mentorship' });
      const inquirySelect = screen.getByTestId('contact-inquiry') as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Mentorship');
    });

    it('verifies inquiry param mapping works for qa', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=qa' });
      const inquirySelect = screen.getByTestId('contact-inquiry') as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Quality Assurance');
    });

    it('verifies inquiry param mapping works for general', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=general' });
      const inquirySelect = screen.getByTestId('contact-inquiry') as HTMLSelectElement;
      expect(inquirySelect.value).toBe('General Inquiry');
    });

    it('verifies inquiry param mapping works for other', () => {
      renderWithProviders(<Contact />, { route: '/contact?inquiry=other' });
      const inquirySelect = screen.getByTestId('contact-inquiry') as HTMLSelectElement;
      expect(inquirySelect.value).toBe('Other');
    });
  });
});
