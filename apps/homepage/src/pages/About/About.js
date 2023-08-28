import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.scss';
import Footer from '../../components/Footer/Footer';

export const About = () => {

  return (
    <>
      <Container fluid className="About">
        <header>
          <Row className='header-row'>
            <Col xs={12} md={{ span: 6, offset: 1 }}>
              <h1>{'AccessiTech'}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={{ span: 6, offset: 1 }}>
              <h2>{`About Me`}</h2>
              <p>
                <b>{`Conor - Founder & CEO of AccessiTech LLC`}</b>
              </p>
            </Col>
          </Row>
        </header>
        <main>
          <Row>
            <Col xs={12} md={{ span: 6, offset: 1 }}>
              <p>
                {`Welcome to my corner of the digital world! I'm Conor, and I'm not only the founder and CEO of AccessiTech LLC but also a passionate advocate for digital accessibility. My journey into the world of accessibility has been deeply personal, as I proudly identify as a person with a disability.`}
              </p>

              <h3>{`My Journey to Digital Accessibility`}</h3>
              <p>
                {`Navigating life in recent years with a motor disability has fueled my passion for creating an inclusive online environment. My dedication to accessibility, especially for designers and developers, stems from my own experiences. During an extended medical leave, I found inspiration in my physical limitations, which led to the creation of AccessiTech.`}
              </p>

              <h3>{"Skills and Experience"}</h3>
              <p>
                {
                  "As a certified digital accessibility consultant, I focus on auditing and remediation to ensure that digital spaces are inclusive to all. With over 15 years of experience in web development, I have combined my visual design background with self-taught coding skills to create a unique path. My journey from senior engineer to front-end lead has given me the skills to manage distributed teams and projects. As the leader of agile and cross-functional teams, I have developed robust, enterprise-level digital products and services for a variety of clients."
                }
              </p>

              <h3>{"Achievements"}</h3>
              <p>
                {
                  "With a strong understanding of human-centered design I have led workshops and co-design sessions, and have driven user and usability research. I excel in empathizing with end users, seeing the bigger picture, and seamlessly connecting stakeholders, designers, and engineers.I am passionate about making technology more accessible and inclusive, and am continuously developing and integrating accessibility technologies."
                }
              </p>

              <h3>{"Education that Shaped Me"}</h3>
              <p>
                {
                  "I am a CPACC-certified accessibility expert with a Master's in Human Computer Interaction + Design from the prestigious University of Washington and a BFA in Visual and Motion Design from Cornish College of the Arts. My academic background and certifications demonstrate my commitment to accessibility and my ability to create accessible products and services. I am a valuable asset to any team working on accessibility, and my expertise will be sure to make a positive impact on the lives of many people."
                }
              </p>

              <h3>{"Beyond the Screen"}</h3>
              <p>
                {
                  "When I'm not immersed in the digital realm, you'll find me nurturing my soul through gardening and soaking in nature's beauty. I cherish leisurely walks and hikes along the American River, often accompanied by my partner and our furry friend. I believe in the power of yoga, meditation, and self-care to foster balance in both my professional and personal life."
                }
              </p>

              <h3>{"Let's Connect"}</h3>
              <p>
                {
                  "Whether you're interested in collaborating, seeking consultation, or simply want to exchange ideas, I'm just a message away. Feel free to reach out to me on LinkedIn or drop me an email."
                }
              </p>

              <p>
                {
                  "Thank you for visiting my page, and I look forward to connecting with you!"
                }
              </p>
              <p>
                <b>{"Conor"}</b>
              </p>
            </Col>
            <Col />
          </Row>
        </main>
        <Row className="footer-row">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
