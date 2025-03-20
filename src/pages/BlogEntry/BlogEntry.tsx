import { useParams } from "react-router-dom";
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import { useEffect } from "react";
import store from "../../store/store";

export const BlogEntry = () => {
  const id = useParams().id || '';
  const entry = useBlogEntry(id);

  useEffect(() => {
    if (!entry?.loaded) {
      store.dispatch(getBlogEntry(id));
    }
  }, [id, entry]);

  return (
    <div>
      <h1>Blog Entry</h1>
      <h2>{entry?.title}</h2>
      <p>{entry?.content}</p>
    </div>
  );
}

export default BlogEntry;
