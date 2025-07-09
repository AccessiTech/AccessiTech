import { useEffect } from "react";
import { useParams, useNavigate, NavigateFunction, useLocation } from "react-router-dom";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import store from "../../store/store";
import { ACCESSITECH, BLOG_CANONICAL, DEFAULT_SHARE_IMAGE_ALT, DEFAULT_SHARE_IMAGE, IMAGES_BASE_URL, BLOG_DESCRIPTION } from "../../settings/strings";
import Metadata from "../../components/Metadata/Metadata";
import CustomMarkdownTable from "../../components/CustomTable/CustomTable";
import { SITE_HOST } from "../../settings/env";

export interface FetchBlogEntryProps {
  id: string;
  navigate: NavigateFunction;
  pathname?: string;
}
const fetchBlogEntry = async ({id, navigate, pathname}:FetchBlogEntryProps) => {
  await store.dispatch(getBlogEntry({ id: id.replace(/.html/g, ''), navigate, pathname }));
}
export interface BlogEntryProps {}
export interface BlogEntryType extends React.FC<BlogEntryProps> {
  loadData: (url?:string) => Promise<void>;
}

export const BlogEntry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = useParams().id?.replace('.html','') as string;
  const sub = useParams().sub;
  const pathname = location.pathname.split('/')[1] || '';
  const pagename = pathname === 'wcag' ? 'WCAG Explained' : 'Blog';
  const entry = useBlogEntry(sub ? `${sub}/${id}` : id);

  useEffect(() => {
    fetchBlogEntry({id: sub ? `${sub}/${id}` : id, navigate, pathname});
  }, [id, sub, navigate]);

  const metadata = {
    title: `${ACCESSITECH} | ${entry?.title || "Blog Entry"}`,
    description: entry?.description || BLOG_DESCRIPTION,
    canonical: `${BLOG_CANONICAL}/${id}`,
    image: entry?.image ? `${IMAGES_BASE_URL}/${entry?.image}` : DEFAULT_SHARE_IMAGE,
    imageAlt: entry?.image_alt || DEFAULT_SHARE_IMAGE_ALT,
    siteName: ACCESSITECH,
    twitterCreator: "@accessiT3ch",
  };

  return (<>
    <Row className="breadcrumb-row">
      <Metadata {...metadata} />
      <Col className="offset-md-2">
        <Breadcrumb className="breadcrumb-container">
          <Breadcrumb.Item href="/" onClick={(e: any) => {
            e.preventDefault();
            navigate('/')
          }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href={`/${pathname}`} onClick={(e: any) => {
            e.preventDefault();
            navigate(`/${pathname}`)
          }}>{pagename}</Breadcrumb.Item>
          <Breadcrumb.Item active>{entry?.title}</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row className="content-row">
      <main id='main' aria-label="Blog Entry" className="blog-entry-page">
        <Col>
          <Row>
            <Col xs={12} md={{ span: 8, offset: 2 }}>
              <div>
                {!entry?.loaded ? <p>Loading...</p> :
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    skipHtml={true}
                    components={{
                      table: CustomMarkdownTable,
                      a: ({href, title, ...props}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
                        // If the link is external, open in a new tab
                        if (href && href.startsWith('http') && !href.includes(SITE_HOST)) {
                          return <a {...props} href={href} title={title} target="_blank" rel="noopener noreferrer" />;
                        }
                        // Otherwise, handle internal links normally
                        return <a {...props} href={href} title={title} />;
                      }
                    }}
                  >{entry.content}</ReactMarkdown>
                }
              </div>
            </Col>
          </Row>
        </Col>
      </main>
    </Row>
  </>);
}
BlogEntry.loadData = fetchBlogEntry;
export default BlogEntry;
