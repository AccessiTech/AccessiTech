import { useEffect } from "react";
import {
  Link,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { BlogOrder, getBlogEntry, useBlogEntriesArray } from "../../store/blog";
import store from "../../store/store";
import "./Blog.scss";
import { getDDMMMYYYY } from "../../settings/utils";
import Metadata from "../../components/Metadata/Metadata";
import { metadata } from "./meta";
import { metadata as wcagMetadata } from "./wcag-meta";
import { HeaderRow } from "../../components/Header/Header";

interface FetchBlogEntriesProps {
  url?: string;
  navigate?: NavigateFunction;
  pathname?: string;
}
let rssCache: { text: string; parsed: Document } | null = null;

const fetchBlogEntries = async ({
  url,
  navigate,
  pathname,
}: FetchBlogEntriesProps) => {
  let text: string;
  let xml: Document;

  if (rssCache) {
    text = rssCache.text;
    xml = rssCache.parsed;
  } else {
    const response = await fetch(url || "/rss.xml").catch((err) => {
      console.error("Error fetching rss.xml:", err);
      throw new Error("Failed to fetch rss.xml");
    });
    if (!response.ok) {
      throw new Error("Failed to fetch rss.xml");
    }
    text = await response.text();
    if (!text) {
      throw new Error("Failed to parse blogs");
    }
    const parser = new DOMParser();
    xml = parser.parseFromString(text, "text/xml");
    rssCache = { text, parsed: xml };
  }

  const items = xml.querySelectorAll("item");
  if (!items || !items.length) {
    throw new Error("Failed to load blogs");
  }
  Array.from(items)
    .map(async (item) => {
      const link = item.querySelector("link")?.textContent || "";
      const path = link.split("/");
      if (pathname && !path.includes(pathname)) {
        return null; // Skip if the link does not match the pathname
      }
      const id = path.splice(4).join("/");

      if (!id) {
        return null;
      }
      // Always check the latest state before dispatching
      const latestState = store.getState();
      if (!latestState.blog?.entries?.[id]) {
        await store.dispatch(getBlogEntry({ id, navigate, pathname }));
      }
    })
    .filter((item) => item !== null);
};
export interface BlogProps {
  hideDates?: boolean;
  hideDescription?: boolean;
  hideExcerpt?: boolean;
}
export interface BlogType extends React.FC<BlogProps> {
  loadData: (url?: string) => Promise<void>;
}
export const Blog: BlogType = ({
  hideDates,
  hideDescription,
  hideExcerpt,
}: BlogProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace(/\//, "");
  const pagename = pathname === "wcag" ? "WCAG Explained" : "Blog";
  const order = pathname === "wcag" ? BlogOrder.NATURAL : BlogOrder.DATE_DESC;
  const blog = useBlogEntriesArray({ pathname, order });
  const pageMetadata = pathname === "wcag" ? wcagMetadata : metadata;

  useEffect(() => {
    fetchBlogEntries({ pathname, navigate });
  }, [pathname, navigate]);

  return (
    <>
      <HeaderRow />
      <Row className="breadcrumb-row blog">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata {...pageMetadata} />
          <Breadcrumb className="breadcrumb-container">
            <Breadcrumb.Item
              href="/"
              onClick={(e: any) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{pagename}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="content-row">
        <main id="main" aria-label="Blog" className="blog-page">
          <Col>
            <Row>
              <Col
                xs={12}
                sm={{ span: 10, offset: 1 }}
                lg={{ span: 8, offset: 2 }}
              >
                <h2>{pagename}</h2>
                <p>{pageMetadata.pageBlurb}</p>
                <hr />
                {blog.map((blog: any) => (
                  <article key={`blog-${blog.id}`} className="blog-entry">
                    <Link key={blog.id} to={`/${pathname}/${blog.id}`}>
                      {!hideDates && <span>{getDDMMMYYYY(blog.date)}</span>}
                      <h3>{blog.title}</h3>
                      {!hideDescription && <p>{blog.description}</p>}
                      {!hideExcerpt && <p>{blog.excerpt}</p>}
                    </Link>
                  </article>
                ))}
              </Col>
            </Row>
          </Col>
        </main>
      </Row>
    </>
  );
};

Blog.loadData = (url?: string) => fetchBlogEntries({ url });

export default Blog;
