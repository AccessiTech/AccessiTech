import { useEffect } from "react";
import { getBlog, useBlogEntriesArray } from "../../store/blog";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import store from "../../store/store";
import './Blog.scss';

export const Blog = () => {
  const navigate = useNavigate();
  const blog = useBlogEntriesArray();

  useEffect(() => {
    store.dispatch(getBlog());
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
                <article key={`blog-${blog.id}`}>
                  <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <h3>{blog.title}</h3>
                    <p>{blog.date}</p>
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
