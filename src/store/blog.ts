import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getMetaData, naturalGuidelineSort } from '../settings/utils';
import { NavigateFunction } from 'react-router-dom';

export const blogSliceName = 'blog';

export const GET_BLOG_ENTRY = 'GET_BLOG_ENTRY';
export const SET_BLOG_ENTRY = 'SET_BLOG_ENTRY';

export enum BlogOrder {
  ASC = 'asc',
  DESC = 'desc',
  DATE_ASC = 'date_asc',
  DATE_DESC = 'date_desc',
  NATURAL = 'natural',
}

export interface Blog {
  loaded: boolean;
  id: string;
  title: string;
  content: string;
  date: string;
  description?: string;
  image?: string;
  image_alt?: string;
  og_image?: string; // Open Graph social media preview image (1200×630)
  og_image_alt?: string; // Open Graph image alt text (mandatory if og_image present)
  pathname?: string; // Optional, used for routing
  next?: { url: string; title: string }; // Optional, used for next blog entry link
  previous?: { url: string; title: string }; // Optional, used for previous blog entry link
  excerpt?: string; // Optional, used for blog entry excerpt
  category?: string;
  tags?: string[];
  series?: string;
  collection?: string;
  featured_image?: string;
  featured_image_alt?: string;
}

export interface BlogFilters {
  category: string;
  tags: string[];
  series: string;
}

export interface BlogState {
  order?: BlogOrder;
  isLoading: boolean;
  entries: { [id: string]: Blog };
  filters: BlogFilters;
}
export interface GetBlogEntryPayload {
  id: string;
  navigate?: NavigateFunction;
  pathname?: string;
}
export const getBlogEntry = createAsyncThunk(
  GET_BLOG_ENTRY,
  async ({ id, navigate, pathname }: GetBlogEntryPayload) => {
    // In-memory cache for markdown blog entries
    const mdCache: { [key: string]: string } = {};
    const cacheKey = `${pathname || 'blog'}/${id}`;
    let text: string | undefined;
    if (mdCache[cacheKey]) {
      text = mdCache[cacheKey];
    } else {
      let response: Response | undefined;
      try {
        response = await fetch(`/data/${pathname || 'blog'}/${id}.md`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
      } catch (e) {
        console.error(e);
        // Prevent infinite redirect loop
        if (navigate && window.location.pathname !== `/${pathname || 'blog'}`) {
          // Use replace: true so the 404 page is replaced in history
          navigate(`/${pathname || 'blog'}`, { replace: true });
        } else if (window.location.pathname !== `/${pathname || 'blog'}`) {
          // Use location.replace for hard redirects
          window.location.replace(`/${pathname || 'blog'}`);
        }
        throw e;
      }
      text = await response.text();
      if (text) {
        mdCache[cacheKey] = text;
      }
    }
    if (!text) {
      throw new Error('Failed to parse blog');
    }

    const metaData = getMetaData(text);
    const date = metaData['date'] || '';
    const description = metaData['description'] || '';
    const content = Object.keys(metaData).length
      ? text.substring(text.indexOf('-->') + 3, text.length)
      : text;
    const title = metaData['title'] || content.split('\n')[0].replace('# ', '');
    const image = metaData['image'] || '';
    const image_alt = metaData['image_alt'] || metaData['imageAlt'] || '';

    // Parse Open Graph image fields with fallback to hero image
    // If og_image exists but og_image_alt is empty, fall back to hero (validation constraint)
    const og_image_raw = metaData['og_image'] || '';
    const og_image_alt_raw = metaData['og_image_alt'] || '';
    const og_image = og_image_raw && og_image_alt_raw ? og_image_raw : image;
    const og_image_alt = og_image_raw && og_image_alt_raw ? og_image_alt_raw : image_alt;

    const excerpt = metaData['excerpt'] || '';
    const category = metaData['category'] || '';
    const tags = metaData['tags'] ? metaData['tags'].split(',').map((t: string) => t.trim()) : [];
    const series = metaData['series'] || '';
    const collection = metaData['collection'] || '';
    const featured_image = metaData['featured_image'] || '';
    const featured_image_alt = metaData['featured_image_alt'] || '';
    const nextStr = metaData['next'] || '';
    const previousStr = metaData['previous'] || '';

    return {
      og_image,
      og_image_alt,
      loaded: true,
      id,
      title,
      content,
      date,
      description,
      image,
      image_alt,
      pathname,
      excerpt,
      category,
      tags,
      series,
      collection,
      featured_image,
      featured_image_alt,
      next: nextStr
        ? { url: nextStr.split(',')[0], title: nextStr.split(',')[1] || 'Next' }
        : undefined,
      previous: previousStr
        ? {
          url: previousStr.split(',')[0],
          title: previousStr.split(',')[1] || 'Previous',
        }
        : undefined,
    } as Blog;
  }
);

export const blogInitialState: BlogState = {
  isLoading: false,
  entries: {},
  filters: { category: '', tags: [], series: '' },
};

export const SET_FILTER = 'SET_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const blogSlice = createSlice({
  name: blogSliceName,
  initialState: blogInitialState,
  reducers: {
    [SET_BLOG_ENTRY]: (state, action) => {
      const { id, ...entry } = action.payload;
      state.entries[id] = {
        ...state.entries[id],
        ...entry,
        id,
      };
    },
    [SET_FILTER]: (state, action: { type: string; payload: Partial<BlogFilters> }) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    [CLEAR_FILTERS]: state => {
      state.filters = { category: '', tags: [], series: '' };
    },
  },
  extraReducers: builder => {
    builder.addCase(getBlogEntry.fulfilled, (state, action) => {
      state.entries[action.payload.id] = {
        ...state.entries[action.payload.id],
        ...action.payload,
      };
    });
  },
});

export const setBlogEntry = blogSlice.actions[SET_BLOG_ENTRY];
export const setFilter = blogSlice.actions[SET_FILTER];
export const clearFilters = blogSlice.actions[CLEAR_FILTERS];

export const useBlog = (): BlogState => {
  return useSelector((state: any) => state[blogSliceName]);
};

export const useBlogLoading = (): boolean => {
  return useBlog().isLoading;
};

export const useBlogEntries = (): { [id: string]: Blog } => {
  return useBlog().entries;
};

export const useBlogEntry = (id: string): Blog => {
  return useBlog().entries[id];
};

export const useFilters = (): BlogFilters => {
  return useBlog().filters;
};

export interface BlogEntriesArrayProps {
  order?: BlogOrder;
  pathname?: string;
}

export const useBlogEntriesArray = ({ order, pathname }: BlogEntriesArrayProps): Blog[] => {
  const entries = useBlogEntries();
  const { category, tags, series } = useFilters();
  return useMemo(() => {
    return Object.values(entries)
      .filter(entry => {
        if (entry.pathname !== pathname) return false;
        if (category && entry.category !== category) return false;
        if (series && entry.series !== series) return false;
        if (tags.length > 0 && !tags.every(t => entry.tags?.includes(t))) return false;
        return true;
      })
      .sort((a, b) => {
        switch (order || BlogOrder.DATE_DESC) {
          case BlogOrder.ASC:
            return a.title.localeCompare(b.title);
          case BlogOrder.DESC:
            return b.title.localeCompare(a.title);
          case BlogOrder.DATE_ASC:
            return a.date.localeCompare(b.date);
          case BlogOrder.DATE_DESC:
            return b.date.localeCompare(a.date);
          case BlogOrder.NATURAL:
            return naturalGuidelineSort(a.title, b.title);
          default:
            return 0;
        }
      });
  }, [entries, order, category, tags, series, pathname]);
};
