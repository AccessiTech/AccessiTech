import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useT } from "@accessitech/i18n-redux-toolkit";
import "./Services.scss";

import {
  CONSULTATION_HEADER,
  CONSULTATION_P1,
  CONSULTATION_P2,
  MENTORSHIP_HEADER,
  MENTORSHIP_P1,
  MENTORSHIP_P2,
  PRODUCTION_HEADER,
  PRODUCTION_P1,
  PRODUCTION_P2,
  PRODUCTION_P3,
  SERVICES_HEADER,
  SERVICES_P1,
  SERVICES_P2,
} from "../../settings/strings";

const Services = () => {
  return (
    <section id="services">
      <Row className="services-header-row">
        <Col sm={12} md={8} lg={6} xxl={4}>
          <h3>{useT(SERVICES_HEADER)}</h3>
          <p>{useT(SERVICES_P1)}</p>
          <p>{useT(SERVICES_P2)}</p>
        </Col>
      </Row>
      <Row className="services-row">
        <Col className="consultation-col" sm={12} md={8} lg={6} xl={4}>
          <article title={useT(CONSULTATION_HEADER)}>
            <h4>{useT(CONSULTATION_HEADER)}</h4>
            <p>{useT(CONSULTATION_P1)}</p>
            <p>{useT(CONSULTATION_P2)}</p>
          </article>
        </Col>
        <Col className="mentorship-col" sm={12} md={8} lg={6} xl={4}>
          <article title={useT(MENTORSHIP_HEADER)}>
            <h4>{useT(MENTORSHIP_HEADER)}</h4>
            <p>{useT(MENTORSHIP_P1)}</p>
            <p>{useT(MENTORSHIP_P2)}</p>
          </article>
        </Col>
        <Col className="production-col" sm={12} md={8} lg={6} xl={4}>
          <article title={useT(PRODUCTION_HEADER)}>
            <h4>{useT(PRODUCTION_HEADER)}</h4>
            <p>{useT(PRODUCTION_P1)}</p>
            <p>{useT(PRODUCTION_P2)}</p>
            <p>{useT(PRODUCTION_P3)}</p>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
