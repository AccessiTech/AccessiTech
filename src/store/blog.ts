import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const blogSliceName = "blog";

export const GET_BLOG = "GET_BLOG";
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
  order?: BlogOrder;
}

export interface BlogState {
  isLoading: boolean;
  entries: { [id: string]: Blog };
}

export const getBlog = createAsyncThunk(GET_BLOG, async () => {
  const response = await fetch("/rss.xml");
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const text = await response.text();
  if (!text) {
    throw new Error("Failed to parse blogs");
  }
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");
  const items = xml.querySelectorAll("item");
  items.forEach((item) => {
    const title = item.querySelector("title")?.textContent || "";
  const blog: { [id: string]: Blog } = {};
    const link = item.querySelector("link")?.textContent || "";
    const id = link.split("/").pop()?.replace(".md", "") || "";
    const date = item.querySelector("pubDate")?.textContent || "";
    blogs[id] = {
      loaded: false,
      id,
      title,
      content: "",
      date,
    };
  });
  return blog;
});

export const getBlogEntry = createAsyncThunk(GET_BLOG_ENTRY, async (id: string) => {
  const response = await fetch(`/blog/${id}.md`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  const text = await response.text();
  const title = text.split("\n")[0].replace("# ", "");
  return {
    loaded: true,
    id,
    title,
    content: text,
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
    builder.addCase(getBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entries = action.payload;
    });
    builder.addCase(getBlog.rejected, (state) => {
      state.isLoading = false;
    });
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

export const useBlogEntriesArray = (order: BlogOrder = BlogOrder.DATE_ASC): Blog[] => {
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
