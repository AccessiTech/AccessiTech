import Metadata from '../../components/Metadata/Metadata';
import Services from '../../components/Services/Services';

const ServicesPage = () => (
  <>
    <Metadata
      title="Services | AccessiTech"
      description="AccessiTech Services: Consulting and Mentorship for organizations building accessible, accountable digital systems — from AI governance to WCAG compliance."
    />
    <main id="main" aria-label="Services">
      <Services />
    </main>
  </>
);

export default ServicesPage;
