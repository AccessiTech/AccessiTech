import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import EndogenAI from '../EndogenAI';
import { WHAT_TITLE } from '../EndogenAI.constants';

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
    expect(screen.getByRole('heading', { level: 2, name: 'Get Started' })).toBeInTheDocument();
  });

  it('renders the hero section with tagline and bold text', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // Check for bold "EndogenAI fixes that" rendered from Markdown
    expect(screen.getByText(/EndogenAI fixes that/i)).toBeInTheDocument();
    expect(screen.getByText(/accountability gap is growing/i)).toBeInTheDocument();
  });

  it('renders the problem section with intro, 4 cards, and links', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText(/Recent governance reports expose/i)).toBeInTheDocument();
    // Check for all 4 problem card titles
    expect(screen.getByText('UK CMA: AI Agent Autonomy Failures')).toBeInTheDocument();
    expect(screen.getByText('Platform Lock-In: Vendor Volatility')).toBeInTheDocument();
    expect(screen.getByText('OWASP LLM Top 10: Security Blindness')).toBeInTheDocument();
    expect(screen.getByText('Harness Lock-In: Memory Loss')).toBeInTheDocument();
    // Check for rendered Markdown links in problem cards
    expect(screen.getByText(/See the full analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/Platform lock-in research/i)).toBeInTheDocument();
    expect(screen.getByText(/Full threat model analysis/i)).toBeInTheDocument();
  });

  it('renders harness content as h3 subsections within What EndogenAI section', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // Check for h3 subsections in §3
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Open Harness Architecture: Four Core Criteria',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'DogmaMCP: Governance-First Harness Implementation',
      })
    ).toBeInTheDocument();
    // Verify harness content is prose, not card titles
    expect(screen.queryByText('The Lock-In Problem')).not.toBeInTheDocument();
    expect(screen.queryByText('The Open Harness Solution')).not.toBeInTheDocument();
  });

  it('renders the research section with subsection headings', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(
      screen.getByRole('heading', { level: 2, name: 'What the Research Says' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Our Research' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'External Validation' })
    ).toBeInTheDocument();
  });

  it('renders the breadcrumb navigation', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    const breadcrumbItems = screen.getAllByText('EndogenAI');
    expect(breadcrumbItems.length).toBeGreaterThan(0);
  });

  it('renders the GitHub CTA button', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    const githubLink = screen.getByText(/Explore on GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/EndogenAI/dogma');
  });

  it('renders Markdown links in What section', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // Check for "Read the full Endogenic Development Manifesto" link
    expect(screen.getByText(/Read the full Endogenic Development Manifesto/i)).toBeInTheDocument();
  });

  it('renders encoding steps with Markdown descriptions', () => {
    renderWithProviders(<EndogenAI />, { route: '/products/endogenai' });
    // Check for step headings
    expect(screen.getByText(/Step 1: Foundational Axioms/i)).toBeInTheDocument();
    expect(screen.getByText(/Step 2: Operational Constraints/i)).toBeInTheDocument();
    // Check for axiom names in the first step description specifically
    const step1Heading = screen.getByText(/Step 1: Foundational Axioms/i);
    const step1Container = step1Heading.closest('.encoding-step');
    expect(step1Container).toBeInTheDocument();
    expect(step1Container).toHaveTextContent('Endogenous-First');
    expect(step1Container).toHaveTextContent('Algorithms-Before-Tokens');
  });
});
