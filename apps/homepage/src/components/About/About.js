import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.scss';
import { getT } from '@accessitech/i18n';
import { PURPOSE_PIC_URL } from '../../settings/settings';
import { PURPOSE_HEADER, PURPOSE_P1, PURPOSE_P2, PURPOSE_P3, PURPOSE_P4, PURPOSE_PIC_ALT, VISION_P1, VISION_P2 } from '../../settings/strings';

const About = () => (
  <>
    <Row className="about-row">
      <Col xs={12} md={{ span: 8, offset: 2 }}>
        <blockquote title="Vision">
          <p>{getT(VISION_P1)}</p>
          <p>{getT(VISION_P2)}</p>
        </blockquote>
      </Col>
    </Row>

    <Row className="purpose-row">
      <Col className="purpose-text" xs={12} md={{ span: 4, offset: 2 }}>
        <article title="Purpose">
          <h3>{getT(PURPOSE_HEADER)}</h3>
          <p>{getT(PURPOSE_P1)}</p>
          <p>{getT(PURPOSE_P2)}</p>
          <p>{getT(PURPOSE_P3)}</p>
          <p>{getT(PURPOSE_P4)}</p>
        </article>
      </Col>
      <Col className="purpose-image" xs={12} md={{ span: 5 }} aria-label="image">
        <img
          src={PURPOSE_PIC_URL}
          className="purpose-picture"
          alt={getT(PURPOSE_PIC_ALT)}
          title={getT(PURPOSE_PIC_ALT)}
        />
      </Col>
    </Row>
  </>
)

export default About;
