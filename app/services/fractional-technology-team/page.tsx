import { ServiceDetailPage } from '../../../components/marketing';
import { fractionalTeam } from '../../../lib/service-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Fractional DevOps & Dedicated Technology Team Services',
  'Add fractional DevOps, cloud, infrastructure and engineering capability to your existing team without building every specialist function internally.',
  '/services/fractional-technology-team/',
);

export default function FractionalTechnologyTeamPage() {
  return <ServiceDetailPage config={fractionalTeam} />;
}
