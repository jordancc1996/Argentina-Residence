/**
 * Single source for current program-status language.
 * Topic pages (family, tax, physical presence, due diligence, comparisons)
 * keep their own scope. They should not invent a second status.
 *
 * statusLastVerified is the human-set date this record was last checked
 * against official sources. Keep it as a literal ISO date. Do not derive
 * it from the clock, the build, git, or a file modification time.
 */
export const programStatus = {
  governmentApplicationsOpen: false,
  applicationStatusLabel:
    "Financial terms have been announced. A principal applicant has an announced $350,000 National Treasury contribution or an $800,000 public-bond route. Government applications are not yet confirmed as open. The government expects the application process to become operational during Q4 2026.",
  waitlistAvailable: true,
  waitlistOperator: "Argentina Residence",
  waitlistDisclaimer:
    "Argentina Residence's own update list. Not a government application.",
  programTerm: "Argentina citizenship by investment",
  programTermDefinition:
    "Argentine law contains a naturalization pathway for a foreign national who makes an investment that the Ministry of Economy defines as relevant. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open.",
  statusPagePath: "/research/argentina-citizenship-by-investment-status",
  statusLastVerified: "2026-10-02",
} as const;
