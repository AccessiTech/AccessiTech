import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import EndogenAI from '../EndogenAI';
import {
  WHAT_TITLE,
  WHAT_AXIOMS_HEADER,
  WHAT_STACK_HEADER,
  WHAT_OSS_HEADER,
  DOGMA_CARD_SHORT_BODY,
  DOGMAMCP_CARD_SHORT_BODY,
  RESEARCH_INTERNAL_ITEMS,
  RESEARCH_EXTERNAL_ITEMS,
} from '../EndogenAI.constants';

// Derive first link text from a Markdown string to build non-brittle assertions
const firstLinkText = (md: string) => md.match(/\[([^\]]+)\]/)?.[1] ?? '';

describe('EndogenAI Page', () => {
  it('renders the page with all 7 sections', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Check for main heading
    expect(screen.getByRole('heading', { level: 1, name: 'EndogenAI' })).toBeInTheDocument();

    // Check for section headings
    expect(screen.getByRole('heading', { level: 2, name: 'The Problem' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: WHAT_TITLE })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'What is dogma & DogmaMCP?' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'How All It Works' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'What the Research Says' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Get Started' })).toBeInTheDocument();
  });

  it('renders the hero section with tagline and bold text', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(/EndogenAI fixes that/i)).toBeInTheDocument();
    expect(screen.getByText(/accountability gap is growing/i)).toBeInTheDocument();
  });

  it('renders the problem section with 4 cards and short body + learn more buttons', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(/Recent governance reports expose/i)).toBeInTheDocument();
    // Check for all 4 problem card titles
    expect(screen.getByText('UK CMA: AI Agent Autonomy Failures')).toBeInTheDocument();
    expect(screen.getByText('Platform Lock-In: Vendor Volatility')).toBeInTheDocument();
    expect(screen.getByText('OWASP LLM Top 10: Security Blindness')).toBeInTheDocument();
    expect(screen.getByText('Harness Lock-In: Memory Loss')).toBeInTheDocument();
    // Check for short body Markdown links
    expect(screen.getByText(/See the full analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/Platform lock-in research/i)).toBeInTheDocument();
    expect(screen.getByText(/Full threat model analysis/i)).toBeInTheDocument();
    // Check for "Learn more" modal trigger buttons - get all buttons and filter to problem section
    const learnMoreButtons = screen.getAllByText('Learn more');
    expect(learnMoreButtons.length).toBeGreaterThanOrEqual(4);
  });

  it('renders §3 What EndogenAI with 3 h3 subheaders and no harness h3 subsections', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // New subheader structure
    expect(screen.getByRole('heading', { level: 3, name: WHAT_AXIOMS_HEADER })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: WHAT_STACK_HEADER })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: WHAT_OSS_HEADER })).toBeInTheDocument();
    // Harness subsections removed from §3
    expect(
      screen.queryByRole('heading', { name: 'Open Harness Architecture: Four Core Criteria' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'DogmaMCP: Governance-First Harness Implementation' })
    ).not.toBeInTheDocument();
  });

  it('renders governance stack cards', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText('MANIFESTO.md')).toBeInTheDocument();
    // Use getAllByText for items that appear in multiple sections
    const agentsMdLinks = screen.getAllByText('AGENTS.md');
    expect(agentsMdLinks.length).toBeGreaterThanOrEqual(1);
    const agentRolesLinks = screen.getAllByText(/Agent Roles \(\.agent\.md files\)/i);
    expect(agentRolesLinks.length).toBeGreaterThanOrEqual(1);
    const agentSkillsLinks = screen.getAllByText(/Agent Skills \(SKILL\.md files\)/i);
    expect(agentSkillsLinks.length).toBeGreaterThanOrEqual(1);
    const governanceScriptsLinks = screen.getAllByText(/Governance Scripts/i);
    expect(governanceScriptsLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('renders encoding steps as cards with step numbers and learn more buttons', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(/Foundational Axioms \(MANIFESTO\.md\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Operational Constraints \(AGENTS\.md\)/i)).toBeInTheDocument();
    // Step numbers present
    expect(screen.getByText('1.')).toBeInTheDocument();
    expect(screen.getByText('2.')).toBeInTheDocument();
    // Check for "Learn more" buttons (7 total for encoding steps)
    const learnMoreButtons = screen.getAllByText('Learn more');
    const encodingLearnMoreButtons = learnMoreButtons.filter(button => {
      const card = button.closest('.card');
      return card && card.textContent?.includes('.');
    });
    expect(encodingLearnMoreButtons.length).toBeGreaterThanOrEqual(7);
  });

  it('renders the research section with subsection headings and cards', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(
      screen.getByRole('heading', { level: 2, name: 'What the Research Says' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Our Research' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'What External Authorities Say' })
    ).toBeInTheDocument();
    // Research items rendered as cards
    expect(screen.getByText('Endogenic Design Patterns for AI Systems')).toBeInTheDocument();
    expect(screen.getByText('LangChain: Your Harness, Your Memory')).toBeInTheDocument();
  });

  it('renders the breadcrumb navigation', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    const breadcrumbItems = screen.getAllByText('EndogenAI');
    expect(breadcrumbItems.length).toBeGreaterThan(0);
  });

  it('renders a single GitHub CTA link with no duplicate Get Started heading', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // GitHub link present in research section with correct href
    const githubLink = screen.getByText(/View on GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/EndogenAI/dogma');
    // Only one h3 Get Started from GetStartedSection
    const getStartedHeadings = screen.queryAllByRole('heading', { name: /Get Started/i });
    expect(getStartedHeadings.length).toBe(1);
  });

  it('renders dogma/DogmaMCP cards with learn more modals', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // Check for section heading
    expect(
      screen.getByRole('heading', { level: 2, name: 'What is dogma & DogmaMCP?' })
    ).toBeInTheDocument();
    // Check for card titles using h3 role queries (both are h3 in grid layout)
    expect(screen.getByRole('heading', { level: 3, name: 'dogma' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'DogmaMCP' })).toBeInTheDocument();
    // Check for short body content markers derived from imported constants
    expect(
      screen.getByText(new RegExp(firstLinkText(DOGMA_CARD_SHORT_BODY), 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(firstLinkText(DOGMAMCP_CARD_SHORT_BODY), 'i'))
    ).toBeInTheDocument();
    // Check for "Learn more" buttons (2 total for dogma/DogmaMCP)
    const learnMoreButtons = screen.getAllByText('Learn more');
    expect(learnMoreButtons.length).toBeGreaterThanOrEqual(2);
  });

  it('renders research cards with learn more modals', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // Check for section and subsection headings
    expect(
      screen.getByRole('heading', { level: 2, name: 'What the Research Says' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Our Research' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'What External Authorities Say' })
    ).toBeInTheDocument();
    // Check for research card titles
    expect(screen.getByText('Endogenic Design Patterns for AI Systems')).toBeInTheDocument();
    expect(screen.getByText('LangChain: Your Harness, Your Memory')).toBeInTheDocument();
    // Check for short body content markers derived from imported constants
    expect(
      screen.getByText(new RegExp(firstLinkText(RESEARCH_INTERNAL_ITEMS[0].shortBody), 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(firstLinkText(RESEARCH_EXTERNAL_ITEMS[0].shortBody), 'i'))
    ).toBeInTheDocument();
    // Check for "Learn more" buttons (10 total: 4 internal + 6 external)
    const learnMoreButtons = screen.getAllByText('Learn more');
    // Total: 4 problem + 2 dogma + 7 encoding + 10 research = 23
    expect(learnMoreButtons.length).toBeGreaterThanOrEqual(23);
  });

  it('opens problem card modal when "Learn more" button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Click the first "Learn more" button in problem section
    const learnMoreButtons = screen.getAllByText('Learn more');
    const firstButton = learnMoreButtons[0];
    await user.click(firstButton);

    // Modal should open - check for modal dialog presence
    await waitFor(() => {
      const modal = document.querySelector('.modal.show');
      expect(modal).toBeInTheDocument();
    });
  });

  it('closes problem card modal when Close button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Open modal
    const learnMoreButtons = screen.getAllByText('Learn more');
    await user.click(learnMoreButtons[0]);

    await waitFor(() => {
      const modal = document.querySelector('.modal.show');
      expect(modal).toBeInTheDocument();
    });

    // Close modal - get all buttons and find the footer Close button
    const closeButtons = screen.getAllByRole('button');
    const footerCloseButton = closeButtons.find(
      btn => btn.classList.contains('btn-outline-dark') && btn.textContent === 'Close'
    );

    if (footerCloseButton) {
      await user.click(footerCloseButton);
    }

    await waitFor(() => {
      const modal = document.querySelector('.modal.show');
      expect(modal).not.toBeInTheDocument();
    });
  });

  it('opens dogma modal when "Learn more" button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Find all "Learn more" buttons
    const learnMoreButtons = screen.getAllByText('Learn more');
    // The dogma "Learn more" buttons are after the 4 problem cards (indices 4 and 5)
    const dogmaLearnMore = learnMoreButtons[4];
    await user.click(dogmaLearnMore);

    // Modal should open - check for modal dialog presence
    await waitFor(() => {
      const modal = document.querySelector('.modal.show');
      expect(modal).toBeInTheDocument();
    });
  });

  it('opens DogmaMCP modal when second dogma "Learn more" button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Find all "Learn more" buttons
    const learnMoreButtons = screen.getAllByText('Learn more');
    // The DogmaMCP "Learn more" button is at index 5 (after 4 problem cards + 1 dogma)
    const dogmaMcpLearnMore = learnMoreButtons[5];
    await user.click(dogmaMcpLearnMore);

    // Modal should open - check for modal dialog presence
    await waitFor(() => {
      const modal = document.querySelector('.modal.show');
      expect(modal).toBeInTheDocument();
    });
  });

  it('opens encoding step modal when "Learn more" button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Find encoding step "Learn more" buttons - they're after problem cards and dogma cards
    const learnMoreButtons = screen.getAllByText('Learn more');
    // Skip first 4 (problem cards) + 2 (dogma cards are "Read more") = start at 4
    const encodingLearnMore = learnMoreButtons[4];
    await user.click(encodingLearnMore);

    // Modal should open with encoding step details
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  it('opens research card modal when "Learn more" button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Scroll to research section (may be needed for visibility)
    window.scrollTo(0, document.body.scrollHeight);

    // Find research "Learn more" buttons - they're at the end
    const learnMoreButtons = screen.getAllByText('Learn more');
    const lastLearnMore = learnMoreButtons[learnMoreButtons.length - 1];
    await user.click(lastLearnMore);

    // Modal should open with research details
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  it('renders modal with source link when card has link prop', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Open first problem card which has a link
    const learnMoreButtons = screen.getAllByText('Learn more');
    await user.click(learnMoreButtons[0]);

    // Modal should display source link
    await waitFor(() => {
      const sourceLink = screen.getByText(/View Source/i);
      expect(sourceLink).toBeInTheDocument();
      const anchorElement = sourceLink.closest('a');
      expect(anchorElement).toHaveAttribute('target', '_blank');
      expect(anchorElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders modal content with markdown formatting', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Open first problem card
    const learnMoreButtons = screen.getAllByText('Learn more');
    await user.click(learnMoreButtons[0]);

    // Check for markdown formatted content (headings, strong text, etc.)
    await waitFor(() => {
      const modalHeadings = screen.getAllByRole('heading', { level: 4 });
      expect(modalHeadings.length).toBeGreaterThan(0);
    });
  });

  it('only one modal is open at a time', async () => {
    const user = userEvent.setup();
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Open first modal
    const learnMoreButtons = screen.getAllByText('Learn more');
    await user.click(learnMoreButtons[0]);

    await waitFor(() => {
      const modals = document.querySelectorAll('.modal.show');
      expect(modals.length).toBe(1);
    });

    // Close and open another - get all buttons and find the footer Close button
    const closeButtons = screen.getAllByRole('button');
    const footerCloseButton = closeButtons.find(
      btn => btn.classList.contains('btn-outline-dark') && btn.textContent === 'Close'
    );

    if (footerCloseButton) {
      await user.click(footerCloseButton);
    }

    await waitFor(() => {
      const modals = document.querySelectorAll('.modal.show');
      expect(modals.length).toBe(0);
    });

    await user.click(learnMoreButtons[1]);

    await waitFor(() => {
      const modals = document.querySelectorAll('.modal.show');
      expect(modals.length).toBe(1);
    });
  });
});
