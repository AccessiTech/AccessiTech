import Metadata from '../../components/Metadata/Metadata';
import Services from '../../components/Services/Services';
import { HOME_URL } from '../../settings/strings';

const ServicesPage = () => (
  <>
    <Metadata
      title="Services | AccessiTech"
      description="AccessiTech Services: Consulting and Mentorship for organizations building accessible, accountable digital systems — from AI governance to WCAG compliance."
      canonical={`${HOME_URL}/services`}
    />
    <main id="main" aria-label="Services">
      <Services />
    </main>
  </>
);

export default ServicesPage;
