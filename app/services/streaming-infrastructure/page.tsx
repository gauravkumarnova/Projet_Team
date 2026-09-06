import { ServiceDetailPage } from '../../../components/marketing';
import { streamingInfrastructure } from '../../../lib/service-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Streaming Infrastructure & Live Technical Operations Services',
  'Streaming architecture, HLS, RTMP, SRT, UDP, encoding, monitoring, redundancy and operational support for live and digital video environments.',
  '/services/streaming-infrastructure/',
);

export default function StreamingInfrastructurePage() {
  return <ServiceDetailPage config={streamingInfrastructure} />;
}
