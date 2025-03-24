import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import store from "../../store/store";
import { Row, Col, Breadcrumb } from "react-bootstrap";

export const BlogEntry = () => {
  const navigate = useNavigate();
  const id = useParams().id as string;
  const entry = useBlogEntry(id);

  useEffect(() => {
    if (!entry?.loaded) {
      store.dispatch(getBlogEntry({id, navigate}));
    }
  }, [id, entry, navigate]);

  return (
    <Row className="content-row">
      <nav className="offset-md-2 breadcrumb-container">
        <Breadcrumb>
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
      </nav>

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
  );
}

export default BlogEntry;
