export type Publication = {
  title: string;
  // ISO date (YYYY-MM-DD).
  published: string;
  summary: string;
  doi?: string;
  // The first link is the one the title points to.
  links: { label: string; href: string }[];
};

// Newest first. The Publications page, sitemap, and llms.txt all read from this list.
export const publications: Publication[] = [
  {
    title: 'A proof of bistability at all processivity levels in a model of ERK regulation',
    published: '2026-11-26',
    summary:
      'A proof of Conjecture 4.6 of Conradi, Obatake, Shiu and Tang. For every prescribed pair of kinase and phosphatase processivities, a single choice of rate constants and conserved totals gives two distinct positive equilibria, both exponentially stable on the same stoichiometric class. The main theorem is formally verified in Lean 4.',
    doi: '10.5281/zenodo.24556874',
    links: [
      { label: 'PDF', href: '/papers/ERK-Conjecture-4.6.pdf' },
      { label: 'Preprint', href: 'https://doi.org/10.5281/zenodo.24556874' },
      { label: 'Code', href: 'https://github.com/jameswfoote/erk-conjecture-4.6' },
    ],
  },
];

export function formatPublicationDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
