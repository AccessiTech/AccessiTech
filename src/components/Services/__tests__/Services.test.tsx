import { vi } from 'vitest';
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import { axe, toHaveNoViolations } from 'jest-axe';
import Services from '../Services';
import {
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

  it('renders the main section with services and consulting header', () => {
    renderWithProviders(<Services />);
    // Check for the section by id
    expect(document.getElementById('services-row')).toBeInTheDocument();
    // Check for the Consulting heading (h2)
    expect(screen.getByRole('heading', { name: CONSULTING_HEADER, level: 2 })).toBeInTheDocument();
  });

  it('renders Consulting section with three sub-items', () => {
    renderWithProviders(<Services />);
    // Consulting h2
    expect(screen.getByRole('heading', { name: CONSULTING_HEADER, level: 2 })).toBeInTheDocument();
    // Three h3 sub-items
    expect(screen.getByRole('heading', { name: ASAAPS_HEADER, level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: AI_INTEGRATION_HEADER, level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: QA_HEADER, level: 3 })).toBeInTheDocument();
  });

  it('renders Mentorship section with four sub-items', () => {
    renderWithProviders(<Services />);
    // Mentorship h2
    expect(screen.getByRole('heading', { name: MENTORSHIP_HEADER, level: 2 })).toBeInTheDocument();
    // Four h3 sub-items
    expect(screen.getByRole('heading', { name: CCCS_HEADER, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: COACHING_HEADER, level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: OPENCLASSROOMS_HEADER, level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: SOTC_HEADER, level: 3 })).toBeInTheDocument();
  });

  it('renders two discovery call CTAs', () => {
    renderWithProviders(<Services />);
    // Consulting + Mentorship CTA buttons = 2 total"Schedule a Discovery Call" buttons
    const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
    expect(buttons).toHaveLength(2);
  });

  describe('navigation', () => {
    it('navigates to /contact?inquiry=consulting from Consulting CTA', () => {
      renderWithProviders(<Services />);
      const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
      fireEvent.click(buttons[0]); // First button is Consulting
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=consulting');
    });

    it('navigates to /contact?inquiry=mentorship from Mentorship CTA', () => {
      renderWithProviders(<Services />);
      const buttons = screen.getAllByRole('button', { name: /schedule a discovery call/i });
      fireEvent.click(buttons[1]); // Second button is Mentorship
      expect(mockNavigate).toHaveBeenCalledWith('/contact?inquiry=mentorship');
    });
  });

  it('has no basic accessibility violations', async () => {
    const { container } = renderWithProviders(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
