import { ServiceDetailPage } from '../../../components/marketing';
import { cloudDevops } from '../../../lib/service-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Cloud & DevOps Engineering Services | AWS, CI/CD & Infrastructure Automation',
  'AWS cloud engineering, CI/CD, Infrastructure as Code, Docker, Kubernetes, monitoring and deployment automation for growing technical environments.',
  '/services/cloud-devops/',
);

export default function CloudDevOpsPage() {
  return <ServiceDetailPage config={cloudDevops} />;
}
