/**
 * Narrow shared program-status facts.
 *
 * Copied from current verified site wording. Do not invent replacements here.
 * statusLastVerified is a human-set date. Do not derive it from the clock,
 * the build, git, or file modification time.
 *
 * Topic amounts, court holdings, tax, work rights, passport scores, and
 * foreign-program thresholds stay on their own pages.
 */
export const programStatus = {
  governmentApplicationsOpen: false,
  applicationStatusLabel:
    "Do not treat the pathway as an open application program. The decrees do not set a confirmed minimum or qualifying investment types.",
  waitlistAvailable: true,
  waitlistOperator: "Argentina Residence",
  waitlistDisclaimer: "Argentina Residence's own update list. Not a government application.",
  programTerm: "Argentina Golden Visa",
  programTermDefinition:
    "Argentine law contains a naturalization pathway for a foreign national who makes an investment that the Ministry of Economy defines as relevant. The decrees do not set a confirmed minimum amount or identify qualifying investment types. The pathway should not be treated as an open application program unless the government publishes the applicable criteria and confirms that applications are being accepted.",
  statusPagePath: "/research/argentina-citizenship-by-investment-status",
  statusLastVerified: "2026-09-28",
} as const;
