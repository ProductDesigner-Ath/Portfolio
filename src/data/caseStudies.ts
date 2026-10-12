// Case-study copy shown in the project view (left column), keyed by PHOTOS id.
// Anything left out falls back to the project's existing overview / process / outcome text.
export interface CaseStudyCopy {
  oneLiner?: string;
  started?: string;
  results?: [string, string][];
  decisions?: { title: string; body: string }[];
}

export const CASE_STUDIES: Record<string, CaseStudyCopy> = {
  p6: { results: [['Launch impressions', '1M+'], ['Signups in 48 hours', '18K'], ['Retainer', '10 months']] },
};
