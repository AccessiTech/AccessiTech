import { useEffect } from "react";
import { getBlog, useBlogEntriesArray } from "../../store/blog";
import store from "../../store/store";
import { Link } from "react-router-dom";

export const Blog = () => {
  const blog = useBlogEntriesArray();

  useEffect(() => {
    store.dispatch(getBlog());
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {blog.map((blog: any) => (
        <Link key={blog.id} to={`/blog/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>{blog.date}</p>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
