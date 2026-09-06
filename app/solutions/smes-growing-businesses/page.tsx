import { SolutionDetailPage } from '../../../components/marketing';
import { smesGrowingBusinesses } from '../../../lib/solution-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Modern Technology Support for SMEs & Growing Businesses',
  'Modernisation, managed infrastructure and software engineering for businesses improving their technology operations.',
  '/solutions/smes-growing-businesses/',
);

export default function SmesGrowingBusinessesSolutionPage() {
  return <SolutionDetailPage config={smesGrowingBusinesses} />;
}
