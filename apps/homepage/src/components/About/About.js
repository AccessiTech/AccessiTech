import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.scss';
import { useT } from '@accessitech/i18n-redux-toolkit';
import { VISION_P3 } from '../../settings/strings';

const About = () => {
 return (
  <>
    <Row className="about-row">
      <Col xs={12} md={{ span: 8, offset: 2 }}>
        <blockquote title="Vision">
          <p>{useT(VISION_P3)}</p>
        </blockquote>
      </Col>
    </Row>
  </>
)};

export default About;
