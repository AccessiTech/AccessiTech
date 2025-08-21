import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
  function renderFooter() {
    return render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  }

  it('renders the footer section with correct aria-label', () => {
    renderFooter();
    const footerSection = screen.getByLabelText(FOOTER);
    expect(footerSection).toBeInTheDocument();
  });

  it('displays the correct header text', () => {
    renderFooter();
    const header = screen.getByText(REACH_OUT_HEADER);
    expect(header).toBeInTheDocument();
  });

  it('renders the contact list with correct aria-label', () => {
    renderFooter();
    const contactList = screen.getByLabelText(CONTACT_LIST);
    expect(contactList).toBeInTheDocument();
    // Check for all contact links
    expect(screen.getByTitle('Fiverr at accessiTech')).toBeInTheDocument();
    expect(screen.getByTitle('LinkedIn at AccessiTech LLC')).toBeInTheDocument();
    expect(screen.getByTitle('Reddit at u/accessiTech')).toBeInTheDocument();
    expect(screen.getByTitle('Twitter at accessiT3ch')).toBeInTheDocument();
  });

  it('renders the disclosures section and all disclosure links', () => {
    renderFooter();
    const disclosures = screen.getByLabelText('Disclosures');
    expect(disclosures).toBeInTheDocument();
    expect(screen.getByTitle('Accessibility')).toBeInTheDocument();
    expect(screen.getByTitle('Advertising')).toBeInTheDocument();
    expect(screen.getByTitle('Affiliate Links')).toBeInTheDocument();
    expect(screen.getByTitle('Code of Conduct')).toBeInTheDocument();
    expect(screen.getByTitle('Contributing')).toBeInTheDocument();
    expect(screen.getByTitle('Sponsored Content')).toBeInTheDocument();
  });

  it('renders the logo link to the root', () => {
    renderFooter();
    const logoLinks = screen.getAllByRole('link', { name: /accessitech/i });
    // Find the one with href="/"
    const rootLogoLink = logoLinks.find(link => link.getAttribute('href') === '/');
    expect(rootLogoLink).toBeInTheDocument();
  });

  it('displays the correct copyright text', () => {
    renderFooter();
    const copyright = screen.getByText(COPYRIGHT_P1);
    expect(copyright).toBeInTheDocument();
  });

  it('renders the issue reporting section', () => {
    renderFooter();
    const issueSection = screen.getByLabelText(REPORTING_AN_ISSUE);
    expect(issueSection).toBeInTheDocument();
    expect(screen.getByTitle('GitHub Issues')).toBeInTheDocument();
  });
});
