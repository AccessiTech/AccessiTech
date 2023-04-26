import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useT } from "@accessitech/i18n-redux-toolkit";
import "./Services.scss";

import {
  CONSULTATION_CTA,
  CONSULTATION_EMAIL_SUBJECT,
  CONSULTATION_HEADER,
  CONSULTATION_P3,
  // FIVERR_AUDIT_URL,
  FIVERR_MENTORSHIP_URL,
  FIVERR_QA_URL,
  GITHUB_DISCUSSIONS_URL,
  GMAIL_URL,
  MENTORSHIP_CTA,
  MENTORSHIP_HEADER,
  MENTORSHIP_P3,
  PRODUCTION_CTA,
  PRODUCTION_HEADER,
  PRODUCTION_P4,
  PURPOSE_PIC_ALT,
  QA_CTA,
  QA_HEADER,
  QA_P1,
  SERVICES_HEADER,
  SERVICES_P1,
  SERVICES_P2,
  TARGET_BLANK,
} from "../../settings/strings";
import {
  PURPOSE_PIC_SIZES,
  PURPOSE_PIC_SRCSET,
  PURPOSE_PIC_URL_1024,
} from "../../settings/settings";

const Services = () => {
  return (
    <section id="services">
      <Row className="services-header-row">
        <Col xs={12} md={{ span: 5, offset: 1 }} xl={{ span: 6, offset: 1 }}>
          <h3>{useT(SERVICES_HEADER)}</h3>
          <p>{useT(SERVICES_P1)}</p>
          <p>{useT(SERVICES_P2)}</p>
        </Col>
        <Col
          className="purpose-image"
          xs={{ span: 6, offset: 3 }}
          md={{ span: 4, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
          xl={{ span: 2, offset: 1 }}
          aria-label="image"
        >
          <img
            srcSet={PURPOSE_PIC_SRCSET}
            sizes={PURPOSE_PIC_SIZES}
            src={PURPOSE_PIC_URL_1024}
            className="purpose-picture"
            alt={useT(PURPOSE_PIC_ALT)}
            title={useT(PURPOSE_PIC_ALT)}
          />
        </Col>
      </Row>

      <Row className="services-row">
        <Col
          className="consultation-col"
          sm={12}
          md={{ span: 10, offset: 1 }}
          lg={5}
        >
          <article>
            <div>
              <h4>{useT(CONSULTATION_HEADER)}</h4>
              <p>{useT(CONSULTATION_P3)}</p>
            </div>
            <Button
              size="lg"
              href={`${GMAIL_URL}?${useT(CONSULTATION_EMAIL_SUBJECT)}`}
              target={TARGET_BLANK}
              title={useT(CONSULTATION_CTA)}
            >
              {useT(CONSULTATION_CTA)}
            </Button>
          </article>
        </Col>
        <Col
          className="qa-col"
          sm={12}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
        >
          <article>
            <div>
              <h4>{useT(QA_HEADER)}</h4>
              <p>{useT(QA_P1)}</p>
            </div>
            <Button
              size="lg"
              target={TARGET_BLANK}
              href={FIVERR_QA_URL}
              title={useT(QA_CTA)}
            >
              {useT(QA_CTA)}
            </Button>
          </article>
        </Col>
        <Col
          className="mentorship-col"
          sm={12}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <article>
            <div>
              <h4>{useT(MENTORSHIP_HEADER)}</h4>
              <p>{useT(MENTORSHIP_P3)}</p>
            </div>
            <Button
              size="lg"
              target={TARGET_BLANK}
              href={FIVERR_MENTORSHIP_URL}
              title={useT(MENTORSHIP_CTA)}
            >
              {useT(MENTORSHIP_CTA)}
            </Button>
          </article>
        </Col>
        <Col
          className="production-col"
          sm={12}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
        >
          <article>
            <div>
              <h4>{useT(PRODUCTION_HEADER)}</h4>
              <p>{useT(PRODUCTION_P4)}</p>
            </div>

            <Button
              size="lg"
              target={TARGET_BLANK}
              href={GITHUB_DISCUSSIONS_URL}
              title={useT(PRODUCTION_CTA)}
            >
              {useT(PRODUCTION_CTA)}
            </Button>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
