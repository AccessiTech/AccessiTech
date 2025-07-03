import { useEffect } from "react";
import { Link, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { BlogOrder, getBlogEntry, useBlogEntriesArray } from "../../store/blog";
import store from "../../store/store";
import './Blog.scss';
import { getDDMMMYYYY } from "../../settings/utils";
import Metadata from "../../components/Metadata/Metadata";
import { metadata } from "./meta";

interface FetchBlogEntriesProps {
  url?: string;
  navigate?: NavigateFunction;
  pathname?: string;
}
const fetchBlogEntries = async ({url, navigate, pathname}:FetchBlogEntriesProps) => {
  const response = await fetch((url || '/rss.xml')).catch((err) => {
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
    const path = link.split('/');
    if (pathname && !path.includes(pathname)) {
      return null; // Skip if the link does not match the pathname
    }
    const id = path.splice(4).join('/');

    if (!id) {
      return null;
    }
    await store.dispatch(getBlogEntry({ id, navigate, pathname }));
  }).filter((item => item !== null));
}
export interface BlogProps {
  hideDates?: boolean;
  hideDescription?: boolean;
}
export interface BlogType extends React.FC<BlogProps> {
  loadData: (url?: string) => Promise<void>;
}
export const Blog: BlogType = ({ hideDates, hideDescription }: BlogProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace(/\//, '');
  const pagename = pathname === 'wcag' ? 'WCAG Explained' : 'Blog';
  const order = pathname === 'wcag' ? BlogOrder.ASC : BlogOrder.DATE_DESC;
  const blog = useBlogEntriesArray({pathname, order});

  useEffect(() => {
    fetchBlogEntries({pathname});
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
          <Breadcrumb.Item active>{pagename}</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row className="content-row">
      <main id='main' aria-label="Blog" className="blog-page">
        <Col>
          <Row>
            <Col xs={12} md={{ span: 8, offset: 2 }}>
              <h2>{pagename}</h2>
              {blog.map((blog: any) => (
                <article key={`blog-${blog.id}`} className="blog-entry">
                  <Link key={blog.id} to={`/${pathname}/${blog.id}`}>
                    {!hideDates && <span>{getDDMMMYYYY(blog.date)}</span>}
                    <h3>{blog.title}</h3>
                    {!hideDescription && <p>{blog.description}</p>}
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

Blog.loadData = (url?: string) => fetchBlogEntries({ url });

export default Blog;
