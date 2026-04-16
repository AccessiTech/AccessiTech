import { vi } from 'vitest';
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Services from '../Services';
import {
  SERVICES_HEADER,
  PURPOSE_PIC_ALT,
  CONSULTING_HEADER,
  ASAAPS_HEADER,
  AI_INTEGRATION_HEADER,
  QA_HEADER,
  MENTORSHIP_HEADER,
  CCCS_HEADER,
  COACHING_HEADER,
  OPENCLASSROOMS_HEADER,
  SOTC_HEADER,
} from '../Services';

expect.extend(toHaveNoViolations);

describe('Services', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the main section and header', () => {
    render(<Services />);
    // Check for the section by id
    expect(document.getElementById('services-row')).toBeInTheDocument();
    // Check for the main Services heading (h3)
    expect(screen.getByRole('heading', { name: SERVICES_HEADER, level: 3 })).toBeInTheDocument();
  });

  it('renders the purpose image with correct alt text', () => {
    render(<Services />);
    const img = screen.getByAltText(PURPOSE_PIC_ALT);
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass('purpose-picture');
  });

  it('renders Consulting section with three sub-items', () => {
    render(<Services />);
    // Consulting h3
    expect(screen.getByRole('heading', { name: CONSULTING_HEADER, level: 3 })).toBeInTheDocument();
    // Three h4 sub-items
    expect(screen.getByRole('heading', { name: ASAAPS_HEADER, level: 4 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: AI_INTEGRATION_HEADER, level: 4 })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: QA_HEADER, level: 4 })).toBeInTheDocument();
  });

  it('renders Mentorship section with four sub-items', () => {
    render(<Services />);
    // Mentorship h3
    expect(screen.getByRole('heading', { name: MENTORSHIP_HEADER, level: 3 })).toBeInTheDocument();
    // Four h4 sub-items
    expect(screen.getByRole('heading', { name: CCCS_HEADER, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: COACHING_HEADER, level: 4 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: OPENCLASSROOMS_HEADER, level: 4 })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: SOTC_HEADER, level: 4 })).toBeInTheDocument();
  });

  it('renders two discovery call CTAs', () => {
    render(<Services />);
    const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
    expect(buttons).toHaveLength(2);
  });

  describe('navigation', () => {
    it('navigates to /contact?inquiry=consulting from Consulting CTA', () => {
      render(<Services />);
      const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
      fireEvent.click(buttons[0]); // First button is Consulting
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=consulting');
    });

    it('navigates to /contact?inquiry=mentorship from Mentorship CTA', () => {
      render(<Services />);
      const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
      fireEvent.click(buttons[1]); // Second button is Mentorship
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=mentorship');
    });
  });

  it('has no basic accessibility violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
