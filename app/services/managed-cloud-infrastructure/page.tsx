import { ServiceDetailPage } from '../../../components/marketing';
import { managedCloud } from '../../../lib/service-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Managed Cloud & Infrastructure Services',
  'Ongoing cloud and server management, monitoring, alerting, maintenance, backup operations, troubleshooting and infrastructure support.',
  '/services/managed-cloud-infrastructure/',
);

export default function ManagedCloudInfrastructurePage() {
  return <ServiceDetailPage config={managedCloud} />;
}
