import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { getBlogEntry, useBlogEntry } from "../../store/blog";
import store from "../../store/store";
import { Row, Col } from "react-bootstrap";

export const BlogEntry = () => {
  const id = useParams().id as string;
  const entry = useBlogEntry(id);

  useEffect(() => {
    if (!entry?.loaded) {
      store.dispatch(getBlogEntry(id));
    }
  }, [id, entry]);

  return (
    <Row className="content-row">
      <main id='main' aria-label="Blog Entry" className="blog-entry-page">
        <Col>
          <Row>
            <Col xs={12} md={{ span: 8, offset: 2 }}>
              <div>
                {!entry.loaded ? <p>Loading...</p> :
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
