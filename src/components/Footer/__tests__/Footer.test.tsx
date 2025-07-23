import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer, {
  REACH_OUT_HEADER,
  CONTACT_LIST,
  FOOTER,
  COPYRIGHT_P1,
  REPORTING_AN_ISSUE,
} from '../Footer';

// Mock the scss import
vi.mock('../Footer.scss', () => ({}));

// Mock settings module first
vi.mock('../../../settings/settings', () => ({
  SPLASH_BG_URL: '/assets/images/splashBG.webp',
  // Add other settings as needed
}));

// Mock the environment variables
vi.mock('../../../settings/env', () => {
  return {
    default: {
      PUBLIC_URL: '',
      ASSETS_URL: '/assets',
      IMAGES_URL: '/assets/images',
      SITE_HOST: 'localhost',
    },
    PUBLIC_URL: '',
    ASSETS_URL: '/assets',
    IMAGES_URL: '/assets/images',
    SITE_HOST: 'localhost',
  };
});

describe('Footer Component', () => {
  it('renders the footer section with correct aria-label', () => {
    render(<Footer />);
    const footerSection = screen.getByLabelText(FOOTER);
    expect(footerSection).toBeInTheDocument();
  });

  it('displays the correct header text', () => {
    render(<Footer />);
    const header = screen.getByText(REACH_OUT_HEADER);
    expect(header).toBeInTheDocument();
  });

  it('renders the contact list with correct aria-label', () => {
    render(<Footer />);
    const contactList = screen.getByLabelText(CONTACT_LIST);
    expect(contactList).toBeInTheDocument();
  });

  it('displays the correct copyright text', () => {
    render(<Footer />);
    const copyright = screen.getByText(COPYRIGHT_P1);
    expect(copyright).toBeInTheDocument();
  });

  it('renders the issue reporting section', () => {
    render(<Footer />);
    const issueSection = screen.getByLabelText(REPORTING_AN_ISSUE);
    expect(issueSection).toBeInTheDocument();
  });
});
