import { useEffect } from 'react';
import { useParams, useNavigate, NavigateFunction, useLocation, Link } from 'react-router-dom';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogEntry, useBlogEntry } from '../../store/blog';
import store from '../../store/store';
import {
  ACCESSITECH,
  BLOG_CANONICAL,
  DEFAULT_SHARE_IMAGE_ALT,
  DEFAULT_SHARE_IMAGE,
  IMAGES_BASE_URL,
  BLOG_DESCRIPTION,
} from '../../settings/strings';
import Metadata from '../../components/Metadata/Metadata';
import CustomMarkdownTable, { tableDirective } from '../../components/CustomTable/CustomTable';
import remarkDirective from 'remark-directive';
import { CustomMarkdownLink } from '../../components/CustomLink/CustomLink';
import './BlogEntry.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { HeaderRow } from '../../components/Header/Header';
import { getChildText } from '../../utils/getChildText';

export interface FetchBlogEntryProps {
  id: string;
  navigate: NavigateFunction;
  pathname?: string;
}
const fetchBlogEntry = async ({ id, navigate, pathname }: FetchBlogEntryProps) => {
  if (!id) return;
  await store.dispatch(getBlogEntry({ id: id.replace(/.html/g, ''), navigate, pathname }));
};
export interface BlogEntryProps {}
export interface BlogEntryType extends React.FC<BlogEntryProps> {
  loadData: (url?: string) => Promise<void>;
}

export const BlogEntry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = useParams().id?.replace('.html', '') as string;
  const sub = useParams().sub;
  const pathname = location.pathname.split('/')[1] || '';
  const pagename = pathname === 'wcag' ? 'WCAG Explained' : 'Blog';
  const entry = useBlogEntry(sub ? `${sub}/${id}` : id);

  useEffect(() => {
    fetchBlogEntry({ id: sub ? `${sub}/${id}` : id, navigate, pathname });
  }, [id, sub, navigate, pathname]);

  useEffect(() => {
    if (entry?.loaded && window) {
      const anchorId = window.location.hash.substring(1);
      if (anchorId) {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Element with ID ${anchorId} not found.`);
        }
      }
    }
  }, [entry?.loaded]);

  const metadata = {
    title: `${ACCESSITECH} | ${entry?.title || 'Blog Entry'}`,
    description: entry?.description || BLOG_DESCRIPTION,
    canonical: `${BLOG_CANONICAL}/${id}`,
    image: entry?.image ? `${IMAGES_BASE_URL}/${entry?.image}` : DEFAULT_SHARE_IMAGE,
    imageAlt: entry?.image_alt || DEFAULT_SHARE_IMAGE_ALT,
    siteName: ACCESSITECH,
    twitterCreator: '@accessiT3ch',
  };

  return (
    <>
      <HeaderRow />
      <Row className="breadcrumb-row">
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Metadata {...metadata} />
          <Breadcrumb className="breadcrumb-container">
            <Breadcrumb.Item
              href="/"
              onClick={(e: any) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href={`/${pathname}`}
              onClick={(e: any) => {
                e.preventDefault();
                navigate(`/${pathname}`);
              }}
            >
              {pagename}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{entry?.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="content-row">
        <main id="main" aria-label="Blog Entry" className="blog-entry-page">
          <Col>
            <Row>
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <div>
                  {!entry?.loaded ? (
                    <p>Loading...</p>
                  ) : (
                    <ReactMarkdown
                      skipHtml={true}
                      remarkPlugins={[remarkGfm, remarkDirective, tableDirective]}
                      components={{
                        table: CustomMarkdownTable,
                        a: CustomMarkdownLink,
                        h2: ({ node }) => {
                          // Safely extract text from node.children[0]
                          const titleText = getChildText(node);
                          return (
                            <SectionHeader
                              title={titleText}
                              id={titleText.toLowerCase().replace(/\s+/g, '-')}
                              use={'h2'}
                            />
                          );
                        },
                        h3: ({ node }) => {
                          // Safely extract text from node.children[0]
                          const titleText = getChildText(node);
                          return (
                            <SectionHeader
                              title={titleText}
                              id={titleText.toLowerCase().replace(/\s+/g, '-')}
                              use={'h3'}
                            />
                          );
                        },
                        h4: ({ node }) => {
                          // Safely extract text from node.children[0]
                          const titleText = getChildText(node);
                          return (
                            <SectionHeader
                              title={titleText}
                              id={titleText.toLowerCase().replace(/\s+/g, '-')}
                              use={'h4'}
                            />
                          );
                        },
                      }}
                    >
                      {entry.content}
                    </ReactMarkdown>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </main>
      </Row>

      <Row className="blog-entry-links-row" as="nav">
        {/* previous column */}
        {entry?.previous && (
          <Col md={{ offset: 2, span: 4 }}>
            <Link to={`${entry.previous.url}`} className="previous-link">
              ← Previous: {entry.previous.title}
            </Link>
          </Col>
        )}
        {/* next column */}
        {entry?.next && (
          <Col
            md={{
              span: 4,
              offset: typeof entry.previous === 'undefined' ? 2 : 0,
            }}
          >
            <Link to={`${entry.next.url}`} className="next-link">
              Next: {entry.next.title} →
            </Link>
          </Col>
        )}
      </Row>
    </>
  );
};
BlogEntry.loadData = fetchBlogEntry;
export default BlogEntry;
