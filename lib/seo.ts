import type { Metadata } from 'next';

export const siteUrl = 'https://vurpe.com';
export const siteName = 'The JAAT Company';
export const siteDescription = 'Cloud engineering, DevOps, managed infrastructure, software engineering and technical operations for startups, SMEs and digital businesses.';

export function createPageMetadata(title: string, description: string, path?: string): Metadata {
  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName,
      ...(path ? { url: path === '/' ? siteUrl + '/' : new URL(path, siteUrl).toString() } : {}),
      title,
      description,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };

  if (path) {
    metadata.alternates = {
      canonical: path === '/' ? `${siteUrl}/` : new URL(path, siteUrl).toString(),
    };
  }

  return metadata;
}

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: 'We build, deploy, manage and support business-critical applications and cloud infrastructure.',
  inLanguage: 'en',
};

export const indexablePaths = [
  '/',
  '/services/',
  '/services/cloud-devops/',
  '/services/managed-cloud-infrastructure/',
  '/services/cloud-migration-modernisation/',
  '/services/fractional-technology-team/',
  '/services/software-engineering/',
  '/services/backup-disaster-recovery/',
  '/services/streaming-infrastructure/',
  '/solutions/',
  '/solutions/startups-saas/',
  '/solutions/smes-growing-businesses/',
  '/solutions/agencies/',
  '/solutions/media-streaming/',
  '/experience/',
  '/about/',
  '/insights/',
  '/contact/',
  '/privacy/',
  '/terms/',
] as const;

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  email: 'contact@vurpe.com',
  telephone: '9873291282',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '319, Durgapuri Extension',
    addressLocality: 'New Delhi',
    postalCode: '110093',
    addressCountry: 'IN',
  },
};
