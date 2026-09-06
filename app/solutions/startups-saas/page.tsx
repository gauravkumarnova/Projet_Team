import { SolutionDetailPage } from '../../../components/marketing';
import { startupsSaas } from '../../../lib/solution-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Cloud and DevOps Capability for Startups & SaaS',
  'Growing product teams can add focused cloud and DevOps capability around their existing engineering team.',
  '/solutions/startups-saas/',
);

export default function StartupsSaasSolutionPage() {
  return <SolutionDetailPage config={startupsSaas} />;
}
