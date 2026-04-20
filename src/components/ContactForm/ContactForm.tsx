import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import './ContactForm.scss';

export interface ContactFormProps {
  inquiryType?: string;
}

const INQUIRY_OPTIONS = [
  'General Inquiry',
  'Consulting',
  'Mentorship',
  'Quality Assurance',
  'Other',
];

const INQUIRY_PARAM_MAP: Record<string, string> = {
  consulting: 'Consulting',
  mentorship: 'Mentorship',
  qa: 'Quality Assurance',
  general: 'General Inquiry',
  other: 'Other',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CONTACT_FORM_ENDPOINT =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_FORM_ENDPOINT) ||
  'https://formspree.io/f/placeholder';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = ({ inquiryType }: ContactFormProps) => {
  const [searchParams] = useSearchParams();

  const getInitialInquiry = (): string => {
    const param = searchParams.get('inquiry') || inquiryType || '';
    return INQUIRY_PARAM_MAP[param.toLowerCase()] || '';
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState<string>(getInitialInquiry);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = 'Name is required.';
    if (!email.trim()) {
      errs.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      errs.message = 'Message is required.';
    } else if (message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters.';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, inquiryType: inquiry, message }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Alert variant="success" role="status" data-testid="contact-success">
        Thanks! We'll be in touch within 2 business days.
      </Alert>
    );
  }

  return (
    <Form
      onSubmit={handleSubmit}
      noValidate
      className="contact-form mb-5 mt-5"
      data-testid="contact-form"
    >
      {submitError && (
        <Alert variant="danger" role="alert" data-testid="contact-error">
          {submitError}
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="contactName">
        <Form.Label>
          Name <span aria-hidden="true">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          isInvalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
          data-testid="contact-name"
        />
        {errors.name && (
          <Form.Control.Feedback type="invalid" id="name-error" role="alert">
            {errors.name}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>
          Email <span aria-hidden="true">*</span>
        </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          isInvalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
          data-testid="contact-email"
        />
        {errors.email && (
          <Form.Control.Feedback type="invalid" id="email-error" role="alert">
            {errors.email}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactInquiry">
        <Form.Label>Inquiry Type</Form.Label>
        <Form.Select
          value={inquiry}
          onChange={e => setInquiry(e.target.value)}
          data-testid="contact-inquiry"
        >
          <option value="">Select an inquiry type</option>
          {INQUIRY_OPTIONS.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactMessage">
        <Form.Label>
          Message <span aria-hidden="true">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
          isInvalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
          minLength={20}
          data-testid="contact-message"
        />
        {errors.message && (
          <Form.Control.Feedback type="invalid" id="message-error" role="alert">
            {errors.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Button
        type="submit"
        variant="primary"
        className="btn btn-primary btn-lg"
        disabled={submitting}
        aria-label={submitting ? 'Submitting your message...' : 'Send message'}
        data-testid="contact-submit"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </Form>
  );
};

export default ContactForm;
