import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const projectsSliceName = 'projects';

export const GET_PROJECTS = 'GET_PROJECTS';
export const SET_PROJECT_ENTRY = 'SET_PROJECT_ENTRY';

export enum ProjectOrder {
  ASC = 'asc',
  DESC = 'desc',
  UPDATED_ASC = 'updated_asc',
  UPDATED_DESC = 'updated_desc',
  STATUS = 'status',
}

export interface Project {
  name: string;
  url: string;
  description: string;
  features: string[];
  accessibility: string[];
  githubUrl?: string;
  npmUrl?: string;
  version?: string;
  updated?: string;
  status?: string;
  license?: string;
  type?: string;
  badge?: string;
}

export interface ProjectsState {
  order?: ProjectOrder;
  isLoading: boolean;
  entries: { [name: string]: Project };
}

export const getProjects = createAsyncThunk(GET_PROJECTS, async () => {
  // Fetch from static JSON file (can be modularized later)
  const response = await fetch('/data/accessitech-projects.json');
  if (!response.ok) throw new Error('Failed to fetch projects');
  const data = await response.json();
  // Convert array to map by name
  const entries: { [name: string]: Project } = {};
  data.forEach((project: Project) => {
    entries[project.name] = project;
  });
  return entries;
});

export const projectsInitialState: ProjectsState = {
  isLoading: false,
  entries: {},
};

export const projectsSlice = createSlice({
  name: projectsSliceName,
  initialState: projectsInitialState,
  reducers: {
    [SET_PROJECT_ENTRY]: (state, action) => {
      const { name, ...entry } = action.payload;
      state.entries[name] = {
        ...state.entries[name],
        ...entry,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(getProjects.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.entries = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProjects.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const setProjectEntry = projectsSlice.actions[SET_PROJECT_ENTRY];

export const useProjects = (): ProjectsState => {
  const state = useSelector((state: any) => state[projectsSliceName]);
  // Fallback to initial state if undefined
  return state || projectsInitialState;
};

export const useProjectsLoading = (): boolean => {
  return useProjects().isLoading;
};

export const useProjectEntries = (): { [name: string]: Project } => {
  return useProjects().entries;
};

export const useProjectEntry = (name: string): Project => {
  return useProjects().entries[name];
};

export interface ProjectEntriesArrayProps {
  order?: ProjectOrder;
  type?: string;
}
import { useMemo } from 'react';

export const useProjectEntriesArray = ({ order, type }: ProjectEntriesArrayProps): Project[] => {
  const entries = useProjectEntries();
  return useMemo(() => {
    let arr = Object.values(entries);
    if (type && type !== 'all') {
      arr = arr.filter(entry => entry.type === type);
    }
    switch (order || ProjectOrder.UPDATED_DESC) {
      case ProjectOrder.ASC:
        return arr.sort((a, b) => a.name.localeCompare(b.name));
      case ProjectOrder.DESC:
        return arr.sort((a, b) => b.name.localeCompare(a.name));
      case ProjectOrder.UPDATED_ASC:
        return arr.sort((a, b) => (a.updated || '').localeCompare(b.updated || ''));
      case ProjectOrder.UPDATED_DESC:
        return arr.sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
      case ProjectOrder.STATUS:
        return arr.sort((a, b) => (a.status || '').localeCompare(b.status || ''));
      default:
        return arr;
    }
  }, [entries, order, type]);
};
