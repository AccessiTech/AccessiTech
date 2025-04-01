import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import store from "../../store/store";
import { ACCESSITECH, BLOG_CANONICAL, DEFAULT_SHARE_IMAGE_ALT, DEFAULT_SHARE_IMAGE, IMAGES_BASE_URL, BLOG_DESCRIPTION } from "../../settings/strings";
import Metadata from "../../components/Metadata/Metadata";

export const BlogEntry = () => {
  const navigate = useNavigate();
  const id = useParams().id as string;
  const entry = useBlogEntry(id);

  useEffect(() => {
    if (!entry?.loaded) {
      store.dispatch(getBlogEntry({ id: id?.replace(/.html/g,'') , navigate }));
    }
  }, [id, entry, navigate]);

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
                  <ReactMarkdown>{entry.content}</ReactMarkdown>
                }
              </div>
            </Col>
          </Row>
        </Col>
      </main>
    </Row>
  </>);
}

export default BlogEntry;
