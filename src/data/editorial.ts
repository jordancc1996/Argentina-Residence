export const editorial = {
  authorName: "Argentina Residence Editorial Team",
  authorUrl: "https://argentinaresidence.com/about",
  reviewLabel: "Legally reviewed by",
  reviewerCredential:
    "an immigration attorney enrolled with the Colegio Público de la Abogacía de la Capital Federal",
  reviewDisclaimer:
    "This content is for informational purposes only and does not constitute legal, tax, financial, investment, or immigration advice. Laws and requirements may change. Consult a qualified professional regarding your individual circumstances.",
} as const;

export function articleAuthor() {
  return {
    "@type": "Organization" as const,
    name: editorial.authorName,
    url: editorial.authorUrl,
  };
}
