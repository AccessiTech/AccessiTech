import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../utils/__tests__/renderWithProviders';
import { screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { Project } from '../../store/projects';

const baseProject: Project = {
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
};

describe('ProjectCard', () => {
  it('renders project name and description', () => {
    renderWithProviders(<ProjectCard project={baseProject} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(baseProject.name);
    expect(screen.getByText(baseProject.description)).toBeInTheDocument();
  });

  it('renders GitHub and npm links', () => {
    renderWithProviders(<ProjectCard project={baseProject} />);
    expect(screen.getByLabelText('GitHub Repository')).toBeInTheDocument();
    expect(screen.getByLabelText('npm Package')).toBeInTheDocument();
  });

  it('renders features and accessibility lists', () => {
    renderWithProviders(<ProjectCard project={baseProject} />);
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('WCAG 2.1')).toBeInTheDocument();
  });

  it('renders meta info', () => {
    renderWithProviders(<ProjectCard project={baseProject} />);
    expect(screen.getByText('v1.0.0')).toBeInTheDocument();
    expect(screen.getByText('Updated: 2025-07-25')).toBeInTheDocument();
    expect(screen.getByText('License: MIT')).toBeInTheDocument();
  });

  it('renders badge and status banner', () => {
    renderWithProviders(<ProjectCard project={baseProject} />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByLabelText('Status: active')).toBeInTheDocument();
  });

  it('links the project name to the GitHub repo', () => {
    renderWithProviders(<ProjectCard project={baseProject} />);
    const link = screen.getByRole('link', { name: `GitHub repository: ${baseProject.url}` });
    expect(link).toHaveAttribute('href', baseProject.githubUrl);
  });
});
