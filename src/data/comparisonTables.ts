import { comparisonRowLabels, type ComparisonRow } from "@/components/ComparisonTable";

export type ComparisonPhoto = {
  label: string;
  alt: string;
};

export type ComparisonPageData = {
  columns: string[];
  rows: ComparisonRow[];
  photos: ComparisonPhoto[];
};

function buildRows(
  cells: Record<(typeof comparisonRowLabels)[number], string[]>,
): ComparisonRow[] {
  return comparisonRowLabels.map((label) => ({
    label,
    values: cells[label],
  }));
}

export const comparisonTables = {
  caribbean: {
    columns: ["Argentina", "Dominica", "Grenada"],
    photos: [
      { label: "Dominica", alt: "Roseau, Dominica skyline" },
      { label: "Grenada", alt: "St. George's, Grenada skyline" },
    ],
    rows: buildRows({
      "Legal structure": [
        "Naturalization via Treasury contribution or government bond (Decree 524/2025)",
        "Donation to Economic Diversification Fund or approved real estate",
        "Contribution to National Transformation Fund or approved real estate project",
      ],
      "Program status": [
        "Not open — application protocols not yet published",
        "Operating since 1993 — accepting applications",
        "Operating since 2013 — accepting applications",
      ],
      "Investment floor": [
        "$500,000 contribution or $1,000,000 bond",
        "$200,000 single applicant / $250,000 family of four (donation); $200,000 real estate",
        "$235,000 covers up to a family of four",
      ],
      "Hold period": [
        "Bond: 7 years, principal returned. Contribution: non-refundable.",
        "Real estate route: hold period applies (duration not stated on page)",
        "Not stated on page",
      ],
      "Family inclusion": [
        "Spouse and children under 18 anticipated includable (status of 18+ dependents unknown)",
        "Donation covers main applicant plus up to 3 family members (no age cutoff stated)",
        "Covers a family of up to 4 (no age cutoff stated)",
      ],
      "Processing time": [
        "Not yet officially confirmed",
        "Roughly 3-6 months including due diligence",
        "About 4-6 months",
      ],
      "Physical presence": ["None anticipated", "Not required", "Not required"],
      "Mobility / passport": [
        "170+ countries visa-free/visa-on-arrival, incl. Schengen, UK, Japan",
        "Below Argentina's 170+ figure; UK revoked visa-free short stays July 2023",
        "Below Argentina's 170+ figure; retains UK short-stay access, US E-2 treaty",
      ],
    }),
  },
  greece: {
    columns: ["Argentina", "Greece"],
    photos: [{ label: "Greece", alt: "Athens, Greece skyline" }],
    rows: buildRows({
      "Legal structure": [
        "Naturalization via Treasury contribution or bond",
        "Renewable 5-year residence permit via property purchase or fund/deposit/company-capital options — not citizenship",
      ],
      "Program status": ["Not open", "Operating since 2013"],
      "Investment floor": [
        "$500,000 contribution or $1,000,000 bond",
        "€800,000 (Attica/Thessaloniki/Mykonos/Santorini/islands over 3,100 residents); €400,000 elsewhere; €250,000 for defined exceptions (Law 5100/2024)",
      ],
      "Hold period": [
        "Bond 7 years / contribution non-refundable",
        "Investment must remain in place for renewal",
      ],
      "Family inclusion": [
        "Spouse and children under 18 anticipated includable (18+ status unknown)",
        "Investor and included family members (no age cutoff stated on page)",
      ],
      "Processing time": [
        "Not yet officially confirmed",
        "Months-long timeline (no exact range stated on page)",
      ],
      "Physical presence": [
        "None anticipated",
        "No minimum days required to hold/renew permit; citizenship requires 7-year residence plus language",
      ],
      "Mobility / passport": [
        "170+ countries incl. Schengen",
        "Permit grants Greek residence plus Schengen short stay only; not a passport",
      ],
    }),
  },
  turkey: {
    columns: ["Argentina", "Turkey"],
    photos: [{ label: "Turkey", alt: "Istanbul, Turkey skyline" }],
    rows: buildRows({
      "Legal structure": [
        "Naturalization via Treasury contribution or bond",
        "Direct citizenship via real estate purchase (or deposit, bonds, business capital, job creation)",
      ],
      "Program status": ["Not open", "Operating — currently processing"],
      "Investment floor": [
        "$500,000 contribution or $1,000,000 bond",
        "$400,000 real estate (since 2022 increase); other routes commonly cited around $500,000",
      ],
      "Hold period": [
        "Bond 7 years / contribution non-refundable",
        "3-year resale restriction on property",
      ],
      "Family inclusion": [
        "Spouse and children under 18 anticipated includable (18+ status unknown)",
        "Not stated on page (dual citizenship permitted on the Turkish side)",
      ],
      "Processing time": [
        "Not yet officially confirmed",
        "Realistically under a year for a complete file",
      ],
      "Physical presence": [
        "None anticipated",
        "Continuous residence not required, though in-person biometrics/title steps occur inside Turkey",
      ],
      "Mobility / passport": [
        "170+ countries incl. Schengen",
        "No published visa-free count; Turkish citizens generally require a Schengen visa for short stays",
      ],
    }),
  },
  paraguay: {
    columns: ["Argentina", "Paraguay"],
    photos: [{ label: "Paraguay", alt: "Asunción, Paraguay skyline" }],
    rows: buildRows({
      "Legal structure": [
        "Naturalization via Treasury contribution or bond",
        "Permanent residence (carnet, not citizenship) via SUACE — commercial/industrial, stock-market, real estate, or tourism tracks",
      ],
      "Program status": ["Not open", "Operating (MIC Resolution 0283/2026)"],
      "Investment floor": [
        "$500,000 contribution or $1,000,000 bond",
        "$70,000 commercial/industrial plus 5 jobs; $200,000 stock-market; $200,000 real estate; $150,000 tourism",
      ],
      "Hold period": [
        "Bond 7 years / contribution non-refundable",
        "Stock-market: commonly described as a 2-year minimum hold; other tracks not stated; permit valid 10 years",
      ],
      "Family inclusion": [
        "Spouse and children under 18 anticipated includable (18+ status unknown)",
        "Dependents apply separately for temporary residence; principal may sponsor eligible family after 2 years (no age cutoff stated)",
      ],
      "Processing time": [
        "Not yet officially confirmed",
        "No published processing-day table",
      ],
      "Physical presence": [
        "None anticipated",
        "Naturalization requires 3 years' legal residence plus language; investor-permit presence requirement not stated on page",
      ],
      "Mobility / passport": [
        "170+ countries incl. Schengen; Mercosur nationality if granted",
        "Carnet is not a passport; Mercosur mobility only available if and when naturalization succeeds",
      ],
    }),
  },
  panama: {
    columns: ["Argentina", "Panama"],
    photos: [{ label: "Panama", alt: "Panama City, Panama skyline" }],
    rows: buildRows({
      "Legal structure": [
        "Naturalization via Treasury contribution or bond",
        "Residency-first: Friendly Nations Visa, Qualified Investor Visa, or real estate route — none produce citizenship at approval",
      ],
      "Program status": ["Not open", "Operating"],
      "Investment floor": [
        "$500,000 contribution or $1,000,000 bond",
        "Friendly Nations: $200,000 real estate or a similar fixed-term deposit. Qualified Investor: $300,000 real estate (rising to $500,000 effective October 15, 2026); $500,000 securities; $750,000 bank deposit",
      ],
      "Hold period": [
        "Bond 7 years / contribution non-refundable",
        "FN deposit: held for a stated term. QIV: commonly held 5 years. FN residence: roughly 2-year provisional permit, then permanent.",
      ],
      "Family inclusion": [
        "Spouse and children under 18 anticipated includable (18+ status unknown)",
        "Not stated on page for FN/QIV dependents",
      ],
      "Processing time": [
        "Not yet officially confirmed",
        "QIV: business days to weeks. FN: no separate timeline given on page.",
      ],
      "Physical presence": [
        "None anticipated",
        "Naturalization requires 5 years' permanent residence; confirm current permit-maintenance day requirements directly",
      ],
      "Mobility / passport": [
        "170+ countries incl. Schengen; Mercosur nationality if granted",
        "Residence permit is not a passport; Panama is not a Mercosur state party",
      ],
    }),
  },
  portugal: {
    columns: ["Argentina", "Portugal"],
    photos: [],
    rows: buildRows({
      "Legal structure": [
        "Direct citizenship via Treasury contribution or bond, no prior residency period (Decree 524/2025)",
        "Residency by investment; primary route is €500,000 to qualifying funds/venture capital funds (real estate and capital-transfer routes eliminated)",
      ],
      "Program status": [
        "Pending — not yet officially confirmed",
        "Established, live program",
      ],
      "Investment floor": [
        "$500,000 contribution or $1,000,000 bond",
        "€500,000 (fund route)",
      ],
      "Hold period": [
        "Bond 7 years / contribution non-refundable",
        "Not stated on page for the fund route",
      ],
      "Family inclusion": [
        "Spouse and children under 18 anticipated includable (18+ status unknown)",
        "Spouse, dependent children, and dependent parents (no age cutoff stated)",
      ],
      "Processing time": [
        "Unknown / not yet officially confirmed",
        "Not stated on page",
      ],
      "Physical presence": [
        "None anticipated",
        "Average of 7 days per year to maintain the permit; citizenship requires 5 years plus basic Portuguese language",
      ],
      "Mobility / passport": [
        "170+ countries incl. Schengen, UK, Japan, most of Asia; Mercosur mobility with Brazil/Uruguay/Paraguay; not part of the US Visa Waiver Program",
        "Permit: Schengen (27 countries) short-stay only, not a passport outside Europe. Portuguese passport after 5 years: 185+ destinations including the US.",
      ],
    }),
  },
} as const satisfies Record<string, ComparisonPageData>;

export type ComparisonTableId = keyof typeof comparisonTables;

export const comparisonTableByGuideSlug: Partial<Record<string, ComparisonTableId>> = {
  "argentina-cbi-vs-caribbean-citizenship": "caribbean",
  "argentina-citizenship-investment-vs-greece-golden-visa": "greece",
  "argentina-citizenship-investment-vs-turkey": "turkey",
  "argentina-citizenship-investment-vs-paraguay": "paraguay",
  "argentina-citizenship-investment-vs-panama": "panama",
};

export const comparisonTableByNewsSlug: Partial<Record<string, ComparisonTableId>> = {
  "argentina-citizenship-investment-vs-portugal-golden-visa": "portugal",
};
