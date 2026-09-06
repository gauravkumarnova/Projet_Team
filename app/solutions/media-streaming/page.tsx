import { SolutionDetailPage } from '../../../components/marketing';
import { mediaStreaming } from '../../../lib/solution-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Streaming Infrastructure for Media Businesses',
  'Specialist streaming, live infrastructure and technical operations capability supported by broader cloud and infrastructure expertise.',
  '/solutions/media-streaming/',
);

export default function MediaStreamingSolutionPage() {
  return <SolutionDetailPage config={mediaStreaming} />;
}
