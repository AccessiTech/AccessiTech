import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getMetaData } from "../settings/utils";
import { NavigateFunction } from "react-router-dom";

export const blogSliceName = "blog";

export const GET_BLOG_ENTRY = "GET_BLOG_ENTRY";

export enum BlogOrder {
  ASC = "asc",
  DESC = "desc",
  DATE_ASC = "date_asc",
  DATE_DESC = "date_desc",
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
}

export interface BlogState {
  order?: BlogOrder;
  isLoading: boolean;
  entries: { [id: string]: Blog };
}
export interface GetBlogEntryPayload {
  id: string;
  navigate: NavigateFunction;
}
export const getBlogEntry = createAsyncThunk(GET_BLOG_ENTRY, async (
  { id, navigate }: GetBlogEntryPayload
) => {
  const response = await fetch(`/data/blog/${id}.md`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      return response;
    })
    .catch((e:string) => {
      console.error(e);
      navigate("/blog");
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

  return {
    loaded: true,
    id,
    title,
    content,
    date,
    description,
    image,
    image_alt,
  } as Blog;
});

export const blogInitialState: BlogState = {
  isLoading: false,
  entries: {},
};

export const blogSlice = createSlice({
  name: blogSliceName,
  initialState: blogInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogEntry.fulfilled, (state, action) => {
      state.entries[action.payload.id] = {
        ...state.entries[action.payload.id],
        ...action.payload,
      };
    });
  },
});

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

export const useBlogEntriesArray = (order: BlogOrder = BlogOrder.DATE_DESC): Blog[] => {
  const entries = useBlogEntries();
  return Object.values(entries).sort((a, b) => {
    switch (order) {
      case BlogOrder.ASC:
        return a.title.localeCompare(b.title);
      case BlogOrder.DESC:
        return b.title.localeCompare(a.title);
      case BlogOrder.DATE_ASC:
        return a.date.localeCompare(b.date);
      case BlogOrder.DATE_DESC:
        return b.date.localeCompare(a.date);
    }
  });
};
