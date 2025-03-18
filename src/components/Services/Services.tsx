import { Button, Col, Row } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import {
  // FIVERR_AUDIT_URL,
  FIVERR_MENTORSHIP_URL,
  FIVERR_QA_URL,
  GITHUB_DISCUSSIONS_URL,
  GMAIL_URL,
  TARGET_BLANK,
} from "../../settings/strings";
import {
  PURPOSE_PIC_SIZES,
  PURPOSE_PIC_SRCSET,
  PURPOSE_PIC_URL_1024,
} from "../../settings/settings";
import "./Services.scss";

export const CLICK_TO_COPY = "click to copy link";
export const COPY_SUCCESS_MESSAGE = "Copied!";
export const COPY_FAIL_MESSAGE = "Unable to copy to clipboard";
export const SERVICES_HEADER = "Services";
export const SERVICES_P1 = "As a design technologist with over 10 years of professional experience across multiple industries I offer independent mentorship through various platforms as I continue to produce software for digital accessibility.";
export const SERVICES_P2 = "As an accessibility consultant I offer a wide range of services throughout the product lifecycle, including but not limited to: Accessibility Audits, Design Research, Project Management, and Full-Stack Engineering.";
export const PURPOSE_PIC_ALT = "Image Credit: Urupong from Ghetty Images";
export const CONSULTATION_HEADER = "Consultation";
export const CONSULTATION_P3 = "As an Accessibility Consultant I audit designs and software for accessibility compliance, offer project management services, and ensure the shipping of robust and accessible software.";
export const CONSULTATION_CTA = "Contact me about consultation";
export const CONSULTATION_EMAIL_SUBJECT = "subject=Consultation Request";
export const QA_HEADER = "Quality Assurance";
export const QA_P1 = "As a QA Engineer, I have spent my career testing, triaging, and debugging software at every stage of the product life cycle, including: test planning, end-to-end quality assurance, unit/integration testing, user/usability testing, and more.";
export const QA_CTA = "Let me test your code";
export const QA_EMAIL_SUBJECT = "subject=Quality Assurance Request";
export const MENTORSHIP_HEADER = "Web Mentorship";
export const MENTORSHIP_P3 = "As I am able to write less code, I am excited to offer mentorship in web design and development, helping overcome the steep learning curve of coding, dispelling myths and worries, and promoting their capacity to learn while instilling best practices of the field.";
export const MENTORSHIP_CTA = "Learn more about the web";
export const MENTORSHIP_EMAIL_SUBJECT = "subject=Mentorship Request";
export const PRODUCTION_HEADER = "Software Production";
export const PRODUCTION_P4 = "I believe that free, modular, and robust open-source software is crucial for creating an accessible web for both users and developers alike. AccessiTech proudly produces and promotes such software to counter ableism in ICT communities today.";
export const PRODUCTION_CTA = "Join the conversation";
export const PRODUCTION_EMAIL_SUBJECT = "subject=Software Production Request";

const Services = () => {
  return (
    <section id="services-row">
      <Row className="services-header-row">
        <Col xs={12} md={{ span: 5, offset: 1 }} xl={{ span: 6, offset: 1 }}>
          <SectionHeader
            title={(SERVICES_HEADER)}
            id="services"
            linkTitle={(CLICK_TO_COPY)}
            successText={(COPY_SUCCESS_MESSAGE)}
            failText={(COPY_FAIL_MESSAGE)}
          />
          <p>{(SERVICES_P1)}</p>
          <p>{(SERVICES_P2)}</p>
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
            alt={(PURPOSE_PIC_ALT)}
            title={(PURPOSE_PIC_ALT)}
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
              <SectionHeader
                title={(CONSULTATION_HEADER)}
                id="consultation"
                use="h4"
                linkTitle={(CLICK_TO_COPY)}
                successText={(COPY_SUCCESS_MESSAGE)}
                failText={(COPY_FAIL_MESSAGE)}
              />
              <p>{(CONSULTATION_P3)}</p>
            </div>
            <Button
              size="lg"
              href={`${GMAIL_URL}?${(CONSULTATION_EMAIL_SUBJECT)}`}
              target={TARGET_BLANK}
              title={(CONSULTATION_CTA)}
            >
              {(CONSULTATION_CTA)}
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
              <SectionHeader
                title={(QA_HEADER)}
                id="qa"
                use="h4"
                linkTitle={(CLICK_TO_COPY)}
                successText={(COPY_SUCCESS_MESSAGE)}
                failText={(COPY_FAIL_MESSAGE)}
              />
              <p>{(QA_P1)}</p>
            </div>
            <Button
              size="lg"
              target={TARGET_BLANK}
              href={FIVERR_QA_URL}
              title={(QA_CTA)}
            >
              {(QA_CTA)}
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
              <SectionHeader
                title={(MENTORSHIP_HEADER)}
                id="mentorship"
                use="h4"
                linkTitle={(CLICK_TO_COPY)}
                successText={(COPY_SUCCESS_MESSAGE)}
                failText={(COPY_FAIL_MESSAGE)}
              />
              <p>{(MENTORSHIP_P3)}</p>
            </div>
            <Button
              size="lg"
              target={TARGET_BLANK}
              href={FIVERR_MENTORSHIP_URL}
              title={(MENTORSHIP_CTA)}
            >
              {(MENTORSHIP_CTA)}
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
              <SectionHeader
                title={(PRODUCTION_HEADER)}
                id="production"
                use="h4"
                linkTitle={(CLICK_TO_COPY)}
                successText={(COPY_SUCCESS_MESSAGE)}
                failText={(COPY_FAIL_MESSAGE)}
              />
              <p>{(PRODUCTION_P4)}</p>
            </div>

            <Button
              size="lg"
              target={TARGET_BLANK}
              href={GITHUB_DISCUSSIONS_URL}
              title={(PRODUCTION_CTA)}
            >
              {(PRODUCTION_CTA)}
            </Button>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
