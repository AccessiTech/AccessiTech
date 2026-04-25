import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
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
    // Use getAllByText for AGENTS.md since it appears in multiple sections now
    const agentsMdLinks = screen.getAllByText('AGENTS.md');
    expect(agentsMdLinks.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Agent roles (.agent.md files)')).toBeInTheDocument();
    expect(screen.getByText('Reusable skills (SKILL.md files)')).toBeInTheDocument();
    expect(screen.getByText('Governance scripts')).toBeInTheDocument();
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
    // Check for card titles
    expect(screen.getByText('dogma')).toBeInTheDocument();
    expect(screen.getByText('DogmaMCP')).toBeInTheDocument();
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
});
