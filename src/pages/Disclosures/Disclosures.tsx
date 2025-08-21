import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import { BlogOrder } from '../../store/blog';
import './Disclosures.scss';
import { getDDMMMYYYY } from '../../settings/utils';
import Metadata from '../../components/Metadata/Metadata';
import { metadata } from './meta';
// import { metadata as wcagMetadata } from './wcag-meta';
import { HeaderRow } from '../../components/Header/Header';

interface FetchDisclosuresProps {
  url?: string;
  pathname?: string;
}
export interface Disclosure {
  id: string;
  title: string;
  description: string;
  date: string;
}

let rssCache: { text: string; parsed: Document } | null = null;

const fetchDisclosures = async ({ url, pathname }: FetchDisclosuresProps) => {
  let text: string;
  let xml: Document;

  if (rssCache) {
    text = rssCache.text;
    xml = rssCache.parsed;
  } else {
    const response = await fetch(url || '/rss.xml').catch(err => {
      console.error('Error fetching rss.xml:', err);
      throw new Error('Failed to fetch rss.xml');
    });
    if (!response.ok) {
      throw new Error('Failed to fetch rss.xml');
    }
    text = await response.text();
    if (!text) {
      throw new Error('Failed to parse blogs');
    }
    const parser = new DOMParser();
    xml = parser.parseFromString(text, 'text/xml');
    rssCache = { text, parsed: xml };
  }

  const items = xml.querySelectorAll('item');
  if (!items || !items.length) {
    throw new Error('Failed to load blogs');
  }
  return Array.from(items)
    .map(async item => {
      const link = item.querySelector('link')?.textContent || '';
      const path = link.split('/');
      if (pathname && !path.includes(pathname)) {
        return null; // Skip if the link does not match the pathname
      }
      const id = path.splice(4).join('/');

      if (!id) {
        return null;
      }
      const title = item.querySelector('title')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';
      const date = item.querySelector('date')?.textContent || '';

      return { id, title, description, date };
    })
    .filter(item => item !== null);
};
export interface DisclosuresProps {
  hideDates?: boolean;
  hideDescription?: boolean;
  hideExcerpt?: boolean;
}
export interface DisclosureType extends React.FC<DisclosuresProps> {
  loadData: (url?: string) => Promise<void>;
}
export const Disclosures: DisclosureType = ({
  hideDates,
  hideDescription,
  hideExcerpt,
}: DisclosuresProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace(/\//, '');
  const pagename = 'Disclosures';
  const order = BlogOrder.ASC;
  const [disclosures, setDisclosures] = useState<Disclosure[]>([]);
  const pageMetadata = metadata;

  useEffect(() => {
    fetchDisclosures({ pathname }).then((promises: Promise<Disclosure | null>[]) => {
      Promise.all(promises).then((data: (Disclosure | null)[]) => {
        const sortedDisclosures = data
          .filter((d): d is Disclosure => d !== null)
          .sort((a, b) => {
            if (order === BlogOrder.ASC) {
              return a.title.localeCompare(b.title);
            }
            return b.title.localeCompare(a.title);
          });
        setDisclosures(sortedDisclosures);
      });
    });
  }, [pathname, order]);

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
                navigate('/');
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
              <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <h2>{pagename}</h2>
                <p>{pageMetadata.pageBlurb}</p>
                <hr />
                {disclosures.map((blog: any) => (
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

Disclosures.loadData = async (url?: string) => {
  await Promise.all(await fetchDisclosures({ url }));
};

export default Disclosures;
