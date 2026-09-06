import { ServiceDetailPage } from '../../../components/marketing';
import { softwareEngineering } from '../../../lib/service-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Business Application & Software Engineering Services',
  'Business applications, web applications, internal portals, backend systems, APIs, Android development and application modernization.',
  '/services/software-engineering/',
);

export default function SoftwareEngineeringPage() {
  return <ServiceDetailPage config={softwareEngineering} />;
}
