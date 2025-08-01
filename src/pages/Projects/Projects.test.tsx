import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../utils/__tests__/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import Projects from './Projects';
import { configureStore } from '@reduxjs/toolkit';

const mockProjects = {
  'accessitech/accessitech': {
    name: 'accessitech/accessitech',
    description: 'A test project for accessibility.',
    features: ['Feature 1', 'Feature 2'],
    accessibility: ['WCAG 2.1', 'Keyboard Navigation'],
    url: 'accessitech/accessitech',
    status: 'active',
    version: '1.0.0',
    updated: '2025-07-25',
    license: 'MIT',
    badge: 'Featured',
    githubUrl: 'https://github.com/accessitech/accessitech',
    npmUrl: 'https://npmjs.com/package/accessitech',
    type: 'package',
  },
};

const initialState = {
  projects: {
    isLoading: false,
    entries: mockProjects,
  },
};

describe('Projects page', () => {
  it('renders the page title and description', () => {
    const store = configureStore({ reducer: (state = initialState) => state });
    renderWithProviders(<Projects />, { store });
    // There are multiple h1s, so use getAllByRole and check for the correct one
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings.some(h => h.textContent === 'Open Source Projects')).toBe(true);
    expect(screen.getByText(/accessibility-focused open-source packages/i)).toBeInTheDocument();
  });

  it('renders a project card', () => {
    const store = configureStore({ reducer: (state = initialState) => state });
    renderWithProviders(<Projects />, { store });
    expect(screen.getByText('accessitech/accessitech')).toBeInTheDocument();
    expect(screen.getByText('A test project for accessibility.')).toBeInTheDocument();
  });

  it('filters projects by search', () => {
    const store = configureStore({ reducer: (state = initialState) => state });
    renderWithProviders(<Projects />, { store });
    const searchInput = screen.getByLabelText('Search projects');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
    expect(screen.getByText('No projects found.')).toBeInTheDocument();
  });

  it('toggles between card and list view', () => {
    const store = configureStore({ reducer: (state = initialState) => state });
    renderWithProviders(<Projects />, { store });
    const viewSelect = screen.getByLabelText('Toggle project view');
    fireEvent.change(viewSelect, { target: { value: 'list' } });
    // Use a function matcher to find split text
    const typeElements = screen.getAllByText(
      (_, element) =>
        !!element && !!element.textContent && element.textContent.includes('Type: package')
    );
    expect(typeElements.length).toBeGreaterThan(0);
    fireEvent.change(viewSelect, { target: { value: 'card' } });
    expect(screen.getByText('accessitech/accessitech')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    const loadingState = {
      ...initialState,
      projects: { ...initialState.projects, isLoading: true },
    };
    const store = configureStore({ reducer: (state = loadingState) => state });
    renderWithProviders(<Projects />, { store });
    expect(screen.getByRole('status')).toHaveTextContent('Loading projects...');
  });
});
