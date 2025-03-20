import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { getBlogEntry, useBlogEntriesArray } from "../../store/blog";
import store from "../../store/store";
import './Blog.scss';
import { getDDMMMYYYY } from "../../settings/utils";

export const Blog = () => {
  const navigate = useNavigate();
  const blog = useBlogEntriesArray();

  useEffect(() => {
    fetch("/rss.xml")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch rss.xml");
        }
        return response.text();
      })
      .then((text) => {
        if (!text) {
          throw new Error("Failed to parse blogs");
        }
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const items = xml.querySelectorAll("item");
        items.forEach((item) => {
          const link = item.querySelector("link")?.textContent || "";
          const id = link.split("/").pop()?.replace(".md", "") || "";
          store.dispatch(getBlogEntry({id, navigate}));
        })
      })
      .catch((e) => {
        console.error(e);
        navigate("/");
      });
  }, []);

  return (
    <Row className="content-row">
      <nav className="offset-md-2 breadcrumb-container">
        <Breadcrumb >
          <Breadcrumb.Item href="/" onClick={(e: any) => {
            e.preventDefault();
            navigate('/')
          }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      <main id='main' aria-label="Blog" className="blog-page">
        <Col>
          <Row>
            <Col xs={12} md={{ span: 8, offset: 2 }}>
              <h2>Blog</h2>
              {blog.map((blog: any) => (
                <article key={`blog-${blog.id}`} className="blog-entry">
                  <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <span>{getDDMMMYYYY(blog.date)}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                  </Link>
                </article>
              ))}
            </Col>
          </Row>
        </Col>
      </main>
    </Row>
  );
}

export default Blog;
