import { useEffect } from "react";
import { useParams, useNavigate, NavigateFunction } from "react-router-dom";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import store from "../../store/store";
import { ACCESSITECH, BLOG_CANONICAL, DEFAULT_SHARE_IMAGE_ALT, DEFAULT_SHARE_IMAGE, IMAGES_BASE_URL, BLOG_DESCRIPTION } from "../../settings/strings";
import Metadata from "../../components/Metadata/Metadata";
import CustomMarkdownTable from "../../components/CustomTable/CustomTable";

const fetchBlogEntry = async (id:string, navigate:NavigateFunction) => {
  await store.dispatch(getBlogEntry({ id: id.replace(/.html/g, ''), navigate }));
}
export interface BlogEntryProps {}
export interface BlogEntryType extends React.FC<BlogEntryProps> {
  loadData: (url?:string) => Promise<void>;
}

export const BlogEntry = () => {
  const navigate = useNavigate();
  const id = useParams().id?.replace('.html','') as string;
  const entry = useBlogEntry(id);

  useEffect(() => {
    fetchBlogEntry(id, navigate);
  }, [id, navigate]);

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
          <Breadcrumb.Item href="/blog" onClick={(e: any) => {
            e.preventDefault();
            navigate('/blog')
          }}>Blog</Breadcrumb.Item>
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
                    components={{
                      table: CustomMarkdownTable,
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
