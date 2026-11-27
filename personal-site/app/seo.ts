import type { Metadata } from 'next';

export const SITE_URL = 'https://jamesfoote.org';
export const SITE_NAME = 'James Foote';
export const PERSON_ID = `${SITE_URL}/#person`;
export const ORCID_URL = 'https://orcid.org/0009-0004-3841-8020';
export const HOME_DESCRIPTION =
  'Born and raised in New York City, James Foote is the founder and CEO of Meeds, a research company building safe, efficacious, and accessible health intelligence systems.';

export const SOCIAL_PROFILES = [
  'https://github.com/jameswfoote',
  'https://www.linkedin.com/in/jameswfoote',
  'https://twitter.com/jamesfoote',
  ORCID_URL,
];

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

// Per-page title, description, canonical URL, and social cards.
// Paths end in a slash to match the static export (trailingSlash: true).
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title?: string;
  description: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = absoluteUrl(path);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    // Indexable, with no limit on snippet or image-preview length in search and AI answers.
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
      creator: '@jamesfoote',
    },
  };
}
