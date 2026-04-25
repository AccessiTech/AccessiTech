import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import EndogenAI from '../EndogenAI';
import {
  WHAT_TITLE,
  WHAT_AXIOMS_HEADER,
  WHAT_STACK_HEADER,
  WHAT_OSS_HEADER,
} from '../EndogenAI.constants';

describe('EndogenAI Page', () => {
  it('renders the page with all 7 sections', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });

    // Check for main heading
    expect(screen.getByRole('heading', { level: 1, name: 'EndogenAI' })).toBeInTheDocument();

    // Check for section headings
    expect(screen.getByRole('heading', { level: 2, name: 'The Problem' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: WHAT_TITLE })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'dogma & DogmaMCP' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument();
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
    // Check for "Learn more" modal trigger buttons (4 of them)
    const learnMoreButtons = screen.getAllByText('Learn more');
    expect(learnMoreButtons).toHaveLength(4);
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
    expect(screen.getByText('AGENTS.md')).toBeInTheDocument();
    expect(screen.getByText('Agent roles (.agent.md files)')).toBeInTheDocument();
    expect(screen.getByText('Reusable skills (SKILL.md files)')).toBeInTheDocument();
    expect(screen.getByText('Governance scripts')).toBeInTheDocument();
  });

  it('renders encoding steps as cards with step numbers', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(/Foundational Axioms \(MANIFESTO\.md\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Operational Constraints \(AGENTS\.md\)/i)).toBeInTheDocument();
    // Step numbers present
    expect(screen.getByText('1.')).toBeInTheDocument();
    expect(screen.getByText('2.')).toBeInTheDocument();
  });

  it('renders the research section with subsection headings and cards', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(
      screen.getByRole('heading', { level: 2, name: 'What the Research Says' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Our Research' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'External Validation' })
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
    // GitHub link present (as anchor, not Button)
    const githubLink = screen.getByText(/Explore on GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/EndogenAI/dogma');
    // Only one h2 Get Started removed — now only h3 from GetStartedSection
    const getStartedHeadings = screen.queryAllByRole('heading', { name: /Get Started/i });
    expect(getStartedHeadings.length).toBe(1);
  });
});
