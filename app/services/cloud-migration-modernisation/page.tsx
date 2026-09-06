import { ServiceDetailPage } from '../../../components/marketing';
import { cloudMigration } from '../../../lib/service-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Cloud Migration & Infrastructure Modernisation Services',
  'Assess, redesign and migrate legacy infrastructure and applications with deployment automation, monitoring and post-migration operational support.',
  '/services/cloud-migration-modernisation/',
);

export default function CloudMigrationModernisationPage() {
  return <ServiceDetailPage config={cloudMigration} />;
}
