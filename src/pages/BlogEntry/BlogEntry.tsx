import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import store from "../../store/store";

export const BlogEntry = () => {
  const id = useParams().id as string;
  const entry = useBlogEntry(id);

  useEffect(() => {
    if (!entry?.loaded) {
      store.dispatch(getBlogEntry(id));
    }
  }, [id, entry]);

  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ReactMarkdown>{entry.content}</ReactMarkdown>
    </div>
  );
}

export default BlogEntry;
