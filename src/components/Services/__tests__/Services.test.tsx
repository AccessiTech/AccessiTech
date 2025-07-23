import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Services from '../Services';
import { SERVICES_HEADER, SERVICES_P1, SERVICES_P2, PURPOSE_PIC_ALT } from '../Services';

expect.extend(toHaveNoViolations);

describe('Services', () => {
  it('renders the main section and header', () => {
    render(<Services />);
    // Check for the section by id
    expect(document.getElementById('services-row')).toBeInTheDocument();
    // Check for the main Services heading (h3)
    expect(screen.getByRole('heading', { name: SERVICES_HEADER, level: 3 })).toBeInTheDocument();
  });

  it('renders the main service paragraphs', () => {
    render(<Services />);
    expect(screen.getByText(SERVICES_P1)).toBeInTheDocument();
    expect(screen.getByText(SERVICES_P2)).toBeInTheDocument();
  });

  it('renders the purpose image with correct alt text', () => {
    render(<Services />);
    const img = screen.getByAltText(PURPOSE_PIC_ALT);
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass('purpose-picture');
  });

  it('renders all key service sections', () => {
    render(<Services />);
    // Use heading queries to avoid ambiguity
    expect(screen.getByRole('heading', { name: /consultation/i, level: 4 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /quality assurance/i, level: 4 })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /web mentorship/i, level: 4 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /software production/i, level: 4 })
    ).toBeInTheDocument();
  });

  it('has no basic accessibility violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
