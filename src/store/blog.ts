import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getMetaData, naturalGuidelineSort } from "../settings/utils";
import { NavigateFunction } from "react-router-dom";

export const blogSliceName = "blog";

export const GET_BLOG_ENTRY = "GET_BLOG_ENTRY";
export const SET_BLOG_ENTRY = "SET_BLOG_ENTRY";

export enum BlogOrder {
  ASC = "asc",
  DESC = "desc",
  DATE_ASC = "date_asc",
  DATE_DESC = "date_desc",
  NATURAL = "natural",
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
  pathname?: string; // Optional, used for routing
  next?: { url: string, title: string }; // Optional, used for next blog entry link
  previous?: { url: string, title: string }; // Optional, used for previous blog entry link
  excerpt?: string; // Optional, used for blog entry excerpt
}

export interface BlogState {
  order?: BlogOrder;
  isLoading: boolean;
  entries: { [id: string]: Blog };
}
export interface GetBlogEntryPayload {
  id: string;
  navigate?: NavigateFunction;
  pathname?: string;
}
export const getBlogEntry = createAsyncThunk(GET_BLOG_ENTRY, async (
  { id, navigate, pathname }: GetBlogEntryPayload
) => {
  const response = await fetch(`/data/${pathname || 'blog'}/${id}.md`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      return response;
    })
    .catch((e: string) => {
      console.error(e);
      // Prevent infinite redirect loop
      if (navigate && window.location.pathname !== `/${pathname || 'blog'}`) {
        // Use replace: true so the 404 page is replaced in history
        navigate(`/${pathname || 'blog'}`, { replace: true });
      } else if (window.location.pathname !== `/${pathname || 'blog'}`) {
        // Use location.replace for hard redirects
        window.location.replace(`/${pathname || 'blog'}`);
      }
    });
  
  const text = await response?.text();
  if (!text) {
    throw new Error("Failed to parse blog");
  }

  const metaData = getMetaData(text);
  const date = metaData["date"] || "";
  const description = metaData["description"] || "";
  const content = Object.keys(metaData).length ? text.substring(text.indexOf("-->") + 3, text.length) : text;
  const title = metaData["title"] || content.split("\n")[0].replace("# ", "");
  const image = metaData["image"] || "";
  const image_alt = metaData["image_alt"] || "";
  const excerpt = metaData["excerpt"] || "";
  const nextStr = metaData["next"] || "";
  const previousStr = metaData["previous"] || "";

  return {
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
    next: nextStr ? { url: nextStr.split(',')[0], title: nextStr.split(',')[1] || "Next" } : undefined,
    previous: previousStr ? { url: previousStr.split(',')[0], title: previousStr.split(',')[1] || "Previous" } : undefined,
  } as Blog;
});

export const blogInitialState: BlogState = {
  isLoading: false,
  entries: {},
};

export const blogSlice = createSlice({
  name: blogSliceName,
  initialState: blogInitialState,
  reducers: {
    [SET_BLOG_ENTRY]: (state, action) => {
      const { id, ...entry } = action.payload;
      state.entries[id] = {
        ...state.entries[id],
        ...entry,
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogEntry.fulfilled, (state, action) => {
      state.entries[action.payload.id] = {
        ...state.entries[action.payload.id],
        ...action.payload,
      };
    });
  },
});

export const setBlogEntry = blogSlice.actions[SET_BLOG_ENTRY];

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

export interface BlogEntriesArrayProps {
  order?: BlogOrder;
  pathname?: string;
}
import { useMemo } from "react";

export const useBlogEntriesArray = ({order, pathname}: BlogEntriesArrayProps): Blog[] => {
  const entries = useBlogEntries();
  return useMemo(() => {
    return Object.values(entries)
      .filter((entry) => entry.pathname === pathname)
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
  }, [entries, order, pathname]);
};
