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
import { CTA_HEADER, CTA_P1, CTA_P2 } from '../../../pages/Home/Home';

expect.extend(toHaveNoViolations);

describe('Services', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the main section and CTA header', () => {
    render(<Services />);
    // Check for the section by id
    expect(document.getElementById('services-row')).toBeInTheDocument();
    // Check for the CTA heading (h2)
    expect(screen.getByRole('heading', { name: CTA_HEADER, level: 2 })).toBeInTheDocument();
  });

  it('renders CTA content with Calendly and message buttons', () => {
    render(<Services />);
    expect(screen.getByText(CTA_P1)).toBeInTheDocument();
    expect(screen.getByText(CTA_P2)).toBeInTheDocument();
    expect(screen.getByTestId('calendly-button')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send us a message/i })).toBeInTheDocument();
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
    // CalendlyButton + 2 navigate() CTAs = 3 total"Schedule a Discovery Call" buttons
    const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
    expect(buttons).toHaveLength(3);
  });

  describe('navigation', () => {
    it('navigates to /contact from CTA Send us a message button', () => {
      render(<Services />);
      const btn = screen.getByRole('button', { name: /send us a message/i });
      fireEvent.click(btn);
      expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });

    it('navigates to /contact?inquiry=consulting from Consulting CTA', () => {
      render(<Services />);
      const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
      fireEvent.click(buttons[1]); // Second button is Consulting (index 0 is CalendlyButton)
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=consulting');
    });

    it('navigates to /contact?inquiry=mentorship from Mentorship CTA', () => {
      render(<Services />);
      const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
      fireEvent.click(buttons[2]); // Third button is Mentorship (index 0 is CalendlyButton)
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=mentorship');
    });
  });

  it('has no basic accessibility violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
