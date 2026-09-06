import { Breadcrumbs } from '../marketing/Breadcrumbs';
import { CTASection } from '../marketing/CTASection';
import { TextLink } from '../interactive/TextLink';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface ArticleData {
  category: string;
  title: string;
  summary: string;
  intro: string;
  sections: ArticleSection[];
  tableOfContents?: { label: string; href: string }[];
  serviceCta?: { label: string; href: string };
  relatedInsights?: { title: string; href: string }[];
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export function ArticleTemplate({ article }: { article: ArticleData }) {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights/' }, { label: article.title }]} />
        </Container>
      </Section>

      <article>
        <Section spacing="none" padding="lg" background="subtle">
          <Container size="4xl">
            <header>
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">{article.category}</p>
              <h1 className="h1 mb-6 heading-break">{article.title}</h1>
              <p className="body-large max-w-3xl text-text-secondary readable-line-length">{article.summary}</p>
              {(article.author || article.publishedAt || article.updatedAt) && (
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted">
                  {article.author && <span>{article.author}</span>}
                  {article.publishedAt && <time dateTime={article.publishedAt}>{article.publishedAt}</time>}
                  {article.updatedAt && <time dateTime={article.updatedAt}>Updated {article.updatedAt}</time>}
                </div>
              )}
            </header>
          </Container>
        </Section>

        <Section spacing="none" padding="lg">
          <Container size="3xl">
            <div className="prose prose-neutral max-w-none">
              <p className="body-large mb-8 text-text-primary">{article.intro}</p>
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <nav aria-label="Table of contents" className="mb-10 border border-border-default bg-bg-subtle p-5">
                  <h2 className="h4 mb-3">On this page</h2>
                  <ul className="space-y-2">
                    {article.tableOfContents.map((item) => (
                      <li key={item.href}>
                        <TextLink href={item.href} variant="brand" underline="hover">
                          {item.label}
                        </TextLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              {article.sections.map((section) => (
                <section key={section.heading} id={section.heading.toLowerCase().replaceAll(' ', '-')} className="mb-10">
                  <h2 className="h2 mb-4 heading-break">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="body mb-4 text-text-secondary">{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            {article.serviceCta && (
              <div className="mt-12 border-l-2 border-brand-primary pl-5">
                <TextLink href={article.serviceCta.href} variant="brand" underline="hover" className="font-medium">
                  {article.serviceCta.label}
                </TextLink>
              </div>
            )}
          </Container>
        </Section>
      </article>

      {article.relatedInsights && article.relatedInsights.length > 0 && (
        <Section spacing="none" padding="lg" background="subtle">
          <Container size="4xl">
            <h2 className="h2 mb-6">Related insights</h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {article.relatedInsights.map((insight) => (
                <li key={insight.href} className="border border-border-default bg-bg-surface p-5">
                  <TextLink href={insight.href} variant="brand" underline="hover" className="font-medium">
                    {insight.title}
                  </TextLink>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <CTASection
        title="Practical thinking on building and operating technology."
        primaryAction={{ label: 'Explore Services', href: '/services/' }}
      />
    </>
  );
}
