import type { MetadataRoute } from 'next';
import { indexablePaths, siteUrl } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: path === '/' ? siteUrl + '/' : new URL(path, siteUrl).toString(),
  }));
}