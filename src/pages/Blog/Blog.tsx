import { useEffect } from "react";
import { getBlog, useBlogEntriesArray } from "../../store/blog";
import store from "../../store/store";

export const Blog = () => {
  const blog = useBlogEntriesArray();

  useEffect(() => {
    store.dispatch(getBlog());
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {blog.map((blog: any) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
