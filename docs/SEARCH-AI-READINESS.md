# Search & AI Readiness

## IMPLEMENTED

- Added a native Next.js app/robots.ts route.
- Normal crawling is allowed for public content and assets, with explicit rules for Googlebot, Bingbot, and OAI-SearchBot.
- Added the production sitemap reference at https://vurpe.com/sitemap.xml.
- Added a native app/sitemap.ts route containing the current public, indexable routes only.
- Preserved self-canonical URLs on indexable pages through the existing metadataBase and createPageMetadata utilities.
- Added accurate Open Graph URL/site-name values without adding fabricated images or social profiles.
- Added reusable BreadcrumbList JSON-LD to breadcrumb trails when every visible breadcrumb has a real route.
- Kept the existing truthful Organization and WebSite JSON-LD. No ratings, reviews, social profiles, offices, founding date, or unsupported claims were added.
- Kept the empty Insights article registry non-indexable; no unpublished article URLs are included in the sitemap.
- Existing service, solution, experience, about, contact, legal, and insights pages retain their factual page-specific metadata.

## OWNER ACTION REQUIRED

### Google Search Console

1. Add and verify the vurpe.com Domain property in Google Search Console.
2. Confirm HTTPS ownership after the Netlify certificate is active.
3. Submit https://vurpe.com/sitemap.xml.
4. Inspect the homepage and representative service URLs after deployment.
5. Review indexing and enhancement reports after Google has crawled the site.

### Bing Webmaster Tools

1. Add and verify https://vurpe.com/ in Bing Webmaster Tools.
2. Submit https://vurpe.com/sitemap.xml.
3. Inspect representative service and solution URLs after deployment.
4. Review crawl and indexing reports.

### Production verification

- Confirm the live HTTPS certificate and canonical host.
- Confirm Netlify form detection and the notification workflow separately.
- No verification codes, IndexNow keys, or private recipient addresses are stored in this repository.

## INDEXNOW STATUS

IndexNow is not implemented. A real key and deployment-specific hosting strategy are required before adding it. No key was fabricated and no unnecessary backend or third-party service was introduced.

## FUTURE SEO WORK

- Publish approved technical articles before exposing article URLs to search engines.
- Add evidence-led technical content and internal links as approved content becomes available.
- Review Search Console and Bing data before making future content or crawl changes.
- Revisit structured data only when new visible, factual content supports it.

## NOT CLAIMED

This foundation does not claim rankings, traffic, indexing, AI citations, customer results, offices, certifications, or third-party endorsements.