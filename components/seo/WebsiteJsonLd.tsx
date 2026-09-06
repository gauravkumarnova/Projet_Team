import { organizationStructuredData, websiteStructuredData } from '../../lib/seo';

export function WebsiteJsonLd() {
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
    />
  </>;
}
