import { TextLink } from '../interactive/TextLink';

interface RelatedService {
  title: string;
  href: string;
  description?: string;
}

interface RelatedServicesProps {
  title?: string;
  services: RelatedService[];
  className?: string;
}

export function RelatedServices({
  title = 'Related services',
  services,
  className = '',
}: RelatedServicesProps) {
  return (
    <section aria-labelledby="related-services-title" className={className}>
      <h2 id="related-services-title" className="h3 mb-6 text-text-primary">
        {title}
      </h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.href}
            className="rounded-lg border border-border-default bg-bg-surface p-5 transition-colors duration-150 ease-standard hover:border-brand-primary"
          >
            <TextLink href={service.href} variant="brand" size="lg" underline="hover" className="font-medium">
              {service.title}
            </TextLink>
            {service.description && (
              <p className="body-small mt-2 text-text-secondary">{service.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
