import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Helmet } from "react-helmet";
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import store from "../../store/store";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { ACCESSITECH, BLOG_CANONICAL, IMAGES_BASE_URL } from "../../settings/strings";

export const BlogEntry = () => {
  const navigate = useNavigate();
  const id = useParams().id as string;
  const entry = useBlogEntry(id);

  useEffect(() => {
    if (!entry?.loaded) {
      store.dispatch(getBlogEntry({ id, navigate }));
    }
  }, [id, entry, navigate]);

  return (<>
    <Row className="breadcrumb-row">
      <Helmet>
        <title>{`${entry?.title} | ${ACCESSITECH}`}</title>
        <meta name="description" content={entry?.description} />
        <link rel="canonical" href={`${BLOG_CANONICAL}/${id}`} />
        <meta property="og:title" content={entry?.title} />
        <meta property="og:description" content={entry?.description} />
        <meta property="og:url" content={`${BLOG_CANONICAL}/${id}`} />
        {entry?.image && <meta property="og:image" content={`${IMAGES_BASE_URL}/${entry.image}`} />}
        {entry?.image && <meta property="og:image:alt" content={entry.image_alt} />}
        <meta name="twitter:title" content={entry?.title} />
        <meta name="twitter:description" content={entry?.description} />
        {entry?.image && <meta name="twitter:image" content={`${IMAGES_BASE_URL}/${entry.image}`} />}
        {entry?.image && <meta name="twitter:image:alt" content={entry.image_alt} />}
      </Helmet>
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
