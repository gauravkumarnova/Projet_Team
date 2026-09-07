import { siteUrl } from '../../lib/seo';
import { TextLink } from '../interactive/TextLink';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const hasUrls = items.every((item) => Boolean(item.href));
  const structuredData = hasUrls
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: new URL(item.href!, siteUrl).toString(),
        })),
      }
    : null;

  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={item.label + '-' + index} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-text-muted">
                    /
                  </span>
                )}

                {isCurrent || !item.href ? (
                  <span aria-current={isCurrent ? 'page' : undefined}>{item.label}</span>
                ) : (
                  <TextLink href={item.href} variant="brand" size="sm" underline="hover">
                    {item.label}
                  </TextLink>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
}