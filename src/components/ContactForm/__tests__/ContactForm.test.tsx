import { vi, describe, it, expect, beforeEach } from 'vitest';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import ContactForm from '../ContactForm';

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all fields', () => {
    renderWithProviders(<ContactForm />);
    expect(screen.getByTestId('contact-name')).toBeInTheDocument();
    expect(screen.getByTestId('contact-email')).toBeInTheDocument();
    expect(screen.getByTestId('contact-inquiry')).toBeInTheDocument();
    expect(screen.getByTestId('contact-message')).toBeInTheDocument();
    expect(screen.getByTestId('contact-submit')).toBeInTheDocument();
  });

  it('renders label elements for all fields', () => {
    renderWithProviders(<ContactForm />);
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /inquiry type/i })).toBeInTheDocument();
    // textarea is a textbox role
    expect(screen.getByLabelText(/^message/i)).toBeInTheDocument();
  });

  it('shows validation errors on blank submit', async () => {
    renderWithProviders(<ContactForm />);
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByText('Name is required.')).toBeInTheDocument();
      expect(screen.getByText('Email is required.')).toBeInTheDocument();
      expect(screen.getByText('Message is required.')).toBeInTheDocument();
    });
  });

  it('shows email format validation error', async () => {
    renderWithProviders(<ContactForm />);
    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByTestId('contact-email'), { target: { value: 'not-an-email' } });
    fireEvent.change(screen.getByTestId('contact-message'), {
      target: { value: 'This is a test message that is long enough' },
    });
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    });
  });

  it('shows success state on successful submission', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true });

    renderWithProviders(<ContactForm />);
    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByTestId('contact-email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByTestId('contact-message'), {
      target: { value: 'This is a test message that is long enough to pass validation' },
    });
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('contact-success')).toBeInTheDocument();
      expect(
        screen.getByText(/thanks! we'll be in touch within 2 business days/i)
      ).toBeInTheDocument();
    });
  });

  it('shows error state on failed submission', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });

    renderWithProviders(<ContactForm />);
    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByTestId('contact-email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByTestId('contact-message'), {
      target: { value: 'This is a test message that is long enough to pass validation' },
    });
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('contact-error')).toBeInTheDocument();
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it('shows error state on network failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    renderWithProviders(<ContactForm />);
    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByTestId('contact-email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByTestId('contact-message'), {
      target: { value: 'This is a test message that is long enough to pass validation' },
    });
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('contact-error')).toBeInTheDocument();
    });
  });

  it('disables submit button while submitting', async () => {
    let resolveFetch!: (value: unknown) => void;
    mockFetch.mockReturnValueOnce(new Promise(resolve => (resolveFetch = resolve)));

    renderWithProviders(<ContactForm />);
    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByTestId('contact-email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByTestId('contact-message'), {
      target: { value: 'This is a test message that is long enough to pass validation' },
    });
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('contact-submit')).toBeDisabled();
      expect(screen.getByTestId('contact-submit')).toHaveAttribute(
        'aria-label',
        'Submitting your message...'
      );
    });

    resolveFetch({ ok: true });
  });
});
