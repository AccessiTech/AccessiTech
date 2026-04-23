import Metadata from '../../components/Metadata/Metadata';
import Services from '../../components/Services/Services';
import { HOME_URL } from '../../settings/strings';

export const SERVICES_META_TITLE = 'Services | AccessiTech';
export const SERVICES_META_DESC =
  'AccessiTech Services: Consulting and Mentorship for organizations building accessible, accountable digital systems — from AI governance to WCAG compliance.';

const ServicesPage = () => (
  <>
    <Metadata
      title={SERVICES_META_TITLE}
      description={SERVICES_META_DESC}
      canonical={`${HOME_URL}/services`}
    />
    <main id="main" aria-label="Services">
      <Services hub />
    </main>
  </>
);

export default ServicesPage;
