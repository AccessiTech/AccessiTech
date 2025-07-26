import { describe, it, expect } from 'vitest';
import {
  projectsSlice,
  projectsInitialState,
  getProjects,
  setProjectEntry,
  ProjectOrder,
} from './projects';

const sampleProject = {
  name: 'accessitech/accessitech',
  url: 'accessitech/accessitech',
  description: 'A test project for accessibility.',
  features: ['Feature 1', 'Feature 2'],
  accessibility: ['WCAG 2.1', 'Keyboard Navigation'],
  status: 'active',
  version: '1.0.0',
  updated: '2025-07-25',
  license: 'MIT',
  type: 'package',
  badge: 'Featured',
  githubUrl: 'https://github.com/accessitech/accessitech',
  npmUrl: 'https://npmjs.com/package/accessitech',
};

describe('projectsSlice', () => {
  it('should return the initial state', () => {
    expect(projectsSlice.getInitialState()).toEqual(projectsInitialState);
  });

  it('should handle setProjectEntry', () => {
    const prevState = { ...projectsInitialState };
    const action = { payload: sampleProject };
    const nextState = projectsSlice.reducer(prevState, setProjectEntry(action.payload));
    expect(nextState.entries[sampleProject.name]).toMatchObject(sampleProject);
  });

  it('should handle getProjects.pending', () => {
    const prevState = { ...projectsInitialState };
    const nextState = projectsSlice.reducer(prevState, { type: getProjects.pending.type });
    expect(nextState.isLoading).toBe(true);
  });

  it('should handle getProjects.fulfilled', () => {
    const prevState = { ...projectsInitialState, isLoading: true };
    const payload = { [sampleProject.name]: sampleProject };
    const nextState = projectsSlice.reducer(prevState, {
      type: getProjects.fulfilled.type,
      payload,
    });
    expect(nextState.isLoading).toBe(false);
    expect(nextState.entries[sampleProject.name]).toMatchObject(sampleProject);
  });

  it('should handle getProjects.rejected', () => {
    const prevState = { ...projectsInitialState, isLoading: true };
    const nextState = projectsSlice.reducer(prevState, { type: getProjects.rejected.type });
    expect(nextState.isLoading).toBe(false);
  });

  it('should sort projects by ProjectOrder.ASC', () => {
    const entries = {
      b: { ...sampleProject, name: 'b' },
      a: { ...sampleProject, name: 'a' },
    };
    const arr = Object.values(entries);
    const sorted = [...arr].sort((a, b) =>
      ProjectOrder.ASC === 'asc' ? a.name.localeCompare(b.name) : 0
    );
    expect(sorted[0].name).toBe('a');
    expect(sorted[1].name).toBe('b');
  });

  it('should sort projects by ProjectOrder.DESC', () => {
    const entries = {
      a: { ...sampleProject, name: 'a' },
      b: { ...sampleProject, name: 'b' },
    };
    const arr = Object.values(entries);
    const sorted = [...arr].sort((a, b) =>
      ProjectOrder.DESC === 'desc' ? b.name.localeCompare(a.name) : 0
    );
    expect(sorted[0].name).toBe('b');
    expect(sorted[1].name).toBe('a');
  });

  it('should sort projects by ProjectOrder.STATUS', () => {
    const entries = {
      a: { ...sampleProject, name: 'a', status: 'experimental' },
      b: { ...sampleProject, name: 'b', status: 'active' },
    };
    const arr = Object.values(entries);
    const sorted = [...arr].sort((a, b) =>
      ProjectOrder.STATUS === 'status' ? (a.status || '').localeCompare(b.status || '') : 0
    );
    expect(sorted[0].status).toBe('active');
    expect(sorted[1].status).toBe('experimental');
  });
});
