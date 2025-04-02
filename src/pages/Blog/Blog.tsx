import { useEffect } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { getBlogEntry, useBlogEntriesArray } from "../../store/blog";
import store from "../../store/store";
import './Blog.scss';
import { getDDMMMYYYY } from "../../settings/utils";
import Metadata from "../../components/Metadata/Metadata";
import { metadata } from "./meta";

const fetchBlogEntries = async (url = `/rss.xml`, navigate?:NavigateFunction) => {
  const response = await fetch(url).catch((err) => {
    console.error("Error fetching rss.xml:", err);
    throw new Error("Failed to fetch rss.xml");
  });
  if (!response.ok) {
    throw new Error("Failed to fetch rss.xml");
  }
  const text = await response.text();
  if (!text) {
    throw new Error("Failed to parse blogs");
  }
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");
  const items = xml.querySelectorAll("item");
  if (!items || !items.length) {
    throw new Error("Failed to load blogs");
  }
  Array.from(items).map(async (item) => {
    const link = item.querySelector("link")?.textContent || "";
    const id = link.split("/").pop()?.replace(".md", "") || "";
    await store.dispatch(getBlogEntry({ id, navigate }));
  });
}
export interface BlogProps {}
export interface BlogType extends React.FC<BlogProps> {
  loadData: (url?:string) => Promise<void>;
}
export const Blog:BlogType = () => {
  const navigate = useNavigate();
  const blog = useBlogEntriesArray();

  useEffect(() => {
    fetchBlogEntries();
  }, []);

  return (<>
    <Row className="breadcrumb-row blog">
      <Metadata {...metadata} />
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

Blog.loadData = fetchBlogEntries;

export default Blog;
