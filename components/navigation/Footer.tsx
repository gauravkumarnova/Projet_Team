import { TextLink } from '../interactive/TextLink';
import { Container } from '../layout/Container';

interface FooterProps {
  className?: string;
}

/**
 * Footer Component
 * 
 * Global footer with all required groups.
 * Based on SITEMAP.md footer architecture and DESIGN.md footer design.
 */
export function Footer({ className = '' }: FooterProps) {
  // Services group from SITEMAP.md
  const services = [
    { label: 'Cloud & DevOps Engineering', href: '/services/cloud-devops/' },
    { label: 'Managed Cloud & Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    { label: 'Cloud Migration & Modernisation', href: '/services/cloud-migration-modernisation/' },
    { label: 'Fractional Technology Team', href: '/services/fractional-technology-team/' },
    { label: 'Software Engineering', href: '/services/software-engineering/' },
    { label: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery/' },
    { label: 'Streaming Infrastructure', href: '/services/streaming-infrastructure/' },
  ];

  // Company group from SITEMAP.md
  const company = [
    { label: 'About', href: '/about/' },
    { label: 'Selected Technical Experience', href: '/experience/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Contact', href: '/contact/' },
  ];

  // Solutions group from SITEMAP.md
  const solutions = [
    { label: 'For Startups & SaaS', href: '/solutions/startups-saas/' },
    { label: 'For SMEs & Growing Businesses', href: '/solutions/smes-growing-businesses/' },
    { label: 'For Agencies', href: '/solutions/agencies/' },
    { label: 'For Media & Streaming', href: '/solutions/media-streaming/' },
  ];

  // Legal group from SITEMAP.md
  const legal = [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Use', href: '/terms/' },
  ];

  return (
    <footer
      className={`
        ${className}
        bg-bg-inverse
        text-text-inverse
        py-12
        md:py-16
        border-t
        border-border-strong
      `}
      role="contentinfo"
    >
      <Container size="7xl" padding="md">
        <h2 className="visually-hidden">Footer navigation</h2>
        <div className="mb-10 max-w-md">
          <p className="text-lg font-semibold">The JAAT Company</p>
          <p className="mt-2 text-sm text-text-inverse-muted">Cloud Engineering &amp; Managed Technology Services for growing businesses.</p>
          <p className="mt-3 font-mono text-xs tracking-[0.14em] text-text-inverse-accent">BUILD | SCALE | GO FURTHER</p>
          <address className="mt-4 flex flex-col gap-1 text-sm not-italic text-text-inverse-muted">
            <a className="hover:text-text-inverse" href="mailto:contact@vurpe.com">contact@vurpe.com</a>
            <a className="hover:text-text-inverse" href="tel:+919873291282">9873291282</a>
            <span>The Jaat Company · Proprietorship</span>
            <span>319, Durgapuri Extension, New Delhi 110093, India</span>
          </address>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <TextLink
                    href={service.href}
                    variant="inverse"
                    underline="hover"
                    size="sm"
                    className="block py-1"
                  >
                    {service.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <TextLink
                    href={item.href}
                    variant="inverse"
                    underline="hover"
                    size="sm"
                    className="block py-1"
                  >
                    {item.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <TextLink
                    href={solution.href}
                    variant="inverse"
                    underline="hover"
                    size="sm"
                    className="block py-1"
                  >
                    {solution.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <TextLink
                    href={item.href}
                    variant="inverse"
                    underline="hover"
                    size="sm"
                    className="block py-1"
                  >
                    {item.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-border-default">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-inverse-muted">
              Build reliable technology. Run it with confidence.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
