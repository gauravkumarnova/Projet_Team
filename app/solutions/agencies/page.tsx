import { SolutionDetailPage } from '../../../components/marketing';
import { agencies } from '../../../lib/solution-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Technical Delivery Capability for Agencies',
  'White-label and fractional technical capability for agencies that need cloud, DevOps, backend or engineering support.',
  '/solutions/agencies/',
);

export default function AgenciesSolutionPage() {
  return <SolutionDetailPage config={agencies} />;
}
