import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.scss';
import { useT } from '@accessitech/i18n-redux-toolkit';
import { PURPOSE_PIC_URL } from '../../settings/settings';
import { PURPOSE_HEADER, PURPOSE_P1, PURPOSE_P2, PURPOSE_P3, PURPOSE_P4, PURPOSE_PIC_ALT, VISION_P1, VISION_P2 } from '../../settings/strings';

const About = () => (
  <>
    <Row className="about-row">
      <Col xs={12} md={{ span: 8, offset: 2 }}>
        <blockquote title="Vision">
          <p>{useT(VISION_P1)}</p>
          <p>{useT(VISION_P2)}</p>
        </blockquote>
      </Col>
    </Row>

    <Row className="purpose-row">
      <Col className="purpose-text" xs={12} md={{ span: 4, offset: 2 }}>
        <article title="Purpose">
          <h3>{useT(PURPOSE_HEADER)}</h3>
          <p>{useT(PURPOSE_P1)}</p>
          <p>{useT(PURPOSE_P2)}</p>
          <p>{useT(PURPOSE_P3)}</p>
          <p>{useT(PURPOSE_P4)}</p>
        </article>
      </Col>
      <Col className="purpose-image" xs={12} md={{ span: 5 }} aria-label="image">
        <img
          src={PURPOSE_PIC_URL}
          className="purpose-picture"
          alt={useT(PURPOSE_PIC_ALT)}
          title={useT(PURPOSE_PIC_ALT)}
        />
      </Col>
    </Row>
  </>
)

export default About;
