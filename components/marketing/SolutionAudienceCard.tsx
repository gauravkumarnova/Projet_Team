import { TextLink } from '../interactive/TextLink';

interface SolutionAudienceCardProps {
  title: string;
  description: string;
  href: string;
}

export function SolutionAudienceCard({ title, description, href }: SolutionAudienceCardProps) {
  return (
    <article className="border-t-2 border-brand-primary bg-bg-surface p-6 transition-shadow duration-200 ease-standard hover:shadow-md">
      <h2 className="h3 mb-3">{title}</h2>
      <p className="body mb-5 text-text-secondary">{description}</p>
      <TextLink href={href} variant="brand" underline="hover" className="font-medium">
        Explore this solution
      </TextLink>
    </article>
  );
}
