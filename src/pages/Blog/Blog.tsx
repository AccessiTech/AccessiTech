import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { getBlogEntry, useBlogEntriesArray } from "../../store/blog";
import store from "../../store/store";
import './Blog.scss';
import { getDDMMMYYYY } from "../../settings/utils";
import { ACCESSITECH, BLOG_CANONICAL, BLOG_DESCRIPTION, BLOG_TITLE } from "../../settings/strings";

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
        if (!items || !items.length) {
          throw new Error("Failed to load blogs");
        }
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

  return (<>
    <Row className="breadcrumb-row">
      <Helmet>
        <title>{`${BLOG_TITLE} | ${ACCESSITECH}`}</title>
        <meta name="description" content={BLOG_DESCRIPTION}/>
        <link rel="canonical" href={BLOG_CANONICAL} />
        <meta property="og:title" content={BLOG_TITLE} />
        <meta property="og:description" content={BLOG_DESCRIPTION} />
        <meta property="og:url" content={BLOG_CANONICAL} />
        <meta name="twitter:title" content={BLOG_TITLE} />
        <meta name="twitter:description" content={BLOG_DESCRIPTION} />
      </Helmet>
      <Col className="offset-md-2">
        <Breadcrumb className="breadcrumb-container">
          <Breadcrumb.Item href="/" onClick={(e: any) => {
            e.preventDefault();
            navigate('/')
          }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row className="content-row">
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
  </>);
}

export default Blog;
