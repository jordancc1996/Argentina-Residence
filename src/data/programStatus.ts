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
  applicationStatusLabel: "Not yet open. APCI is not processing applications.",
  waitlistAvailable: true,
  waitlistOperator: "Argentina Residence",
  waitlistDisclaimer: "Argentina Residence's own update list. Not a government application.",
  programTerm: "Argentina Golden Visa",
  programTermDefinition:
    "The Argentina Golden Visa is a proposed citizenship-by-investment framework under Decree 524/2025. It is not an open residency visa.",
  statusPagePath: "/research/argentina-citizenship-by-investment-status",
  statusLastVerified: "2026-09-28",
} as const;
