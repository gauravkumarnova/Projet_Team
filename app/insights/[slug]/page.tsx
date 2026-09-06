import { notFound } from 'next/navigation';

import { ArticleTemplate } from '../../../components/content/ArticleTemplate';
import type { ArticleData } from '../../../components/content/ArticleTemplate';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = {
  ...createPageMetadata(
    'Insights',
    'Practical articles on cloud infrastructure, DevOps, managed technology, backup, modernization and streaming operations.',
  ),
  robots: { index: false, follow: true },
};

const approvedArticles: Record<string, ArticleData> = {};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = approvedArticles[slug];

  if (!article) {
    notFound();
  }

  return <ArticleTemplate article={article} />;
}
