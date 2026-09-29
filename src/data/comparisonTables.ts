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
        "Naturalization for a relevant investment the Ministry of Economy defines. DNU 366/2025 created APCI. Decree 524/2025 set a basic review procedure. The decrees do not identify qualifying investment types.",
        "Donation to Economic Diversification Fund or approved real estate",
        "Contribution to National Transformation Fund or approved real estate project",
      ],
      "Program status": [
        "Do not treat it as an open application program. The government has not published the criteria or confirmed that applications are being accepted.",
        "Operating since 1993 — accepting applications",
        "Operating since 2013 — accepting applications",
      ],
      "Investment floor": [
        "The decrees do not set a confirmed minimum amount or identify qualifying investment types.",
        "$200,000 single applicant / $250,000 family of four (donation); $200,000 real estate",
        "$235,000 covers up to a family of four",
      ],
      "Hold period": [
        "The decrees do not set a hold period or a refund rule.",
        "Real estate route: hold period applies (duration not stated on page)",
        "Not stated on page",
      ],
      "Family inclusion": [
        "The decrees do not establish a general family-inclusion rule for investor applicants.",
        "Donation covers main applicant plus up to 3 family members (no age cutoff stated)",
        "Covers a family of up to 4 (no age cutoff stated)",
      ],
      "Processing time": [
        "DNM has 30 business days to decide after it receives APCI's report. That is not total or guaranteed processing time.",
        "Roughly 3-6 months including due diligence",
        "About 4-6 months",
      ],
      "Physical presence": ["The decrees do not specify a physical-presence rule for investor applicants.", "Not required", "Not required"],
      "Mobility / passport": [
        "Henley Passport Index, 13 April 2026: Argentine passport rank 15, score 168. The score includes visa-free entry, visa on arrival, and an electronic travel authorization. It is not a residency right, and it is not a benefit of residence or of an investment-naturalization application.",
        "UK revoked visa-free short stays July 2023",
        "Retains UK short-stay access, US E-2 treaty",
      ],
    }),
  },
  greece: {
    columns: ["Argentina", "Greece"],
    photos: [{ label: "Greece", alt: "Greek island cove and beach" }],
    rows: buildRows({
      "Legal structure": [
        "Naturalization for a relevant investment the Ministry of Economy defines. The decrees do not identify qualifying investment types.",
        "Renewable 5-year residence permit via property purchase or fund/deposit/company-capital options — not citizenship",
      ],
      "Program status": ["Do not treat it as an open application program.", "Operating since 2013"],
      "Investment floor": [
        "The decrees do not set a confirmed minimum amount or identify qualifying investment types.",
        "€800,000 (Attica/Thessaloniki/Mykonos/Santorini/islands over 3,100 residents); €400,000 elsewhere; €250,000 for defined exceptions (Law 5100/2024)",
      ],
      "Hold period": [
        "The decrees do not set a hold period or a refund rule.",
        "Investment must remain in place for renewal",
      ],
      "Family inclusion": [
        "The decrees do not establish a general family-inclusion rule for investor applicants.",
        "Investor and included family members (no age cutoff stated on page)",
      ],
      "Processing time": [
        "DNM has 30 business days to decide after it receives APCI's report. That is not total or guaranteed processing time.",
        "Months-long timeline (no exact range stated on page)",
      ],
      "Physical presence": [
        "The decrees do not specify a physical-presence rule for investor applicants.",
        "No minimum days required to hold/renew permit; citizenship requires 7-year residence plus language",
      ],
      "Mobility / passport": [
        "Henley Passport Index, 13 April 2026: Argentine passport rank 15, score 168. The score includes visa-free entry, visa on arrival, and an electronic travel authorization. It is not a residency right, and it is not a benefit of residence or of an investment-naturalization application.",
        "Permit grants Greek residence plus Schengen short stay only; not a passport",
      ],
    }),
  },
  turkey: {
    columns: ["Argentina", "Turkey"],
    photos: [{ label: "Turkey", alt: "Istanbul, Turkey skyline" }],
    rows: buildRows({
      "Legal structure": [
        "Naturalization for a relevant investment the Ministry of Economy defines. The decrees do not identify qualifying investment types.",
        "Direct citizenship via real estate purchase (or deposit, bonds, business capital, job creation)",
      ],
      "Program status": ["Do not treat it as an open application program.", "Operating — currently processing"],
      "Investment floor": [
        "The decrees do not set a confirmed minimum amount or identify qualifying investment types.",
        "$400,000 real estate (since 2022 increase); other routes commonly cited around $500,000",
      ],
      "Hold period": [
        "The decrees do not set a hold period or a refund rule.",
        "3-year resale restriction on property",
      ],
      "Family inclusion": [
        "The decrees do not establish a general family-inclusion rule for investor applicants.",
        "Not stated on page (dual citizenship permitted on the Turkish side)",
      ],
      "Processing time": [
        "DNM has 30 business days to decide after it receives APCI's report. That is not total or guaranteed processing time.",
        "Realistically under a year for a complete file",
      ],
      "Physical presence": [
        "The decrees do not specify a physical-presence rule for investor applicants.",
        "Continuous residence not required, though in-person biometrics/title steps occur inside Turkey",
      ],
      "Mobility / passport": [
        "Henley Passport Index, 13 April 2026: Argentine passport rank 15, score 168. The score includes visa-free entry, visa on arrival, and an electronic travel authorization. It is not a residency right, and it is not a benefit of residence or of an investment-naturalization application.",
        "No published visa-free count; Turkish citizens generally require a Schengen visa for short stays",
      ],
    }),
  },
  paraguay: {
    columns: ["Argentina", "Paraguay"],
    photos: [{ label: "Paraguay", alt: "Asunción, Paraguay skyline" }],
    rows: [
      {
        label: "Program type",
        values: [
          "Investment naturalization, distinct from residence. Do not treat the pathway as an open application program.",
          "Operating residency by investment (Investor Pass). Permanent residence, not citizenship by investment.",
        ],
      },
      {
        label: "Current availability",
        values: [
          "Do not treat it as an open application program. The government has not published the criteria or confirmed that applications are being accepted.",
          "Operating. Investor Pass files are being processed.",
        ],
      },
      {
        label: "What the investor receives",
        values: [
          "If granted, Argentine nationality. That result is distinct from residence. Do not treat the pathway as an open application program.",
          "Permanent residence (a renewable carnet, reported as valid for 10 years). Not a passport.",
        ],
      },
      {
        label: "Minimum investment",
        values: [
          "The decrees do not set a confirmed minimum amount or identify qualifying investment types.",
          "Law 6984/2022 requires the investor to demonstrate the investment. It does not, in the text reviewed, set the dollar schedules previously repeated on this page. Those unsupported amounts have been removed.",
        ],
      },
      {
        label: "Investment options",
        values: [
          "The decrees do not identify qualifying investment types.",
          "Commercial/industrial, stock market holdings, real estate not for personal use, or tourism.",
        ],
      },
      {
        label: "Hold period",
        values: [
          "The decrees do not set a hold period or a refund rule.",
          "Stock market holdings are generally subject to a minimum two-year hold. Other tracks not stated on this page. The residence permit is reported as valid for 10 years.",
        ],
      },
      {
        label: "Family treatment",
        values: [
          "The decrees do not establish a general family-inclusion rule for investor applicants.",
          "Dependents cannot ride on the principal's file. They apply separately for temporary residence. After two years, the principal may be able to sponsor eligible family members for permanent residence.",
        ],
      },
      {
        label: "Processing time",
        values: [
          "DNM has 30 business days to decide after it receives APCI's report. That is not total or guaranteed processing time.",
          "No published processing-day table. The carnet is issued on the timeline actually run by Paraguayan authorities after a complete file.",
        ],
      },
      {
        label: "Physical presence",
        values: [
          "The decrees do not specify a physical-presence rule for investor applicants.",
          "Presence required to hold the Investor Pass is not stated on this page. Possible future naturalization is commonly described as requiring three years of legal residence plus language and integration tests.",
        ],
      },
      {
        label: "Citizenship path",
        values: [
          "Investment naturalization, distinct from residence. Do not treat the pathway as an open application program.",
          "Permanent residence first. Possible future naturalization is a separate, discretionary process. Paraguay does not operate citizenship by investment. Paying the Investor Pass threshold does not buy a Paraguayan passport.",
        ],
      },
      {
        label: "Mercosur mobility",
        values: [
          "Argentine nationality, if granted, is Mercosur nationality.",
          "The residence carnet is not Mercosur nationality. Regional mobility that follows Paraguayan nationality is available only if and when naturalization succeeds.",
        ],
      },
      {
        label: "Current 2026 status",
        values: [
          "Do not treat it as an open application program. The government has not published the criteria or confirmed that applications are being accepted.",
          "Operating in 2026. Paraguay is processing Investor Pass applications. Confirm the current filing rule with Paraguayan counsel before treating any brochure as final.",
        ],
      },
    ],
  },
  panama: {
    columns: ["Argentina", "Panama"],
    photos: [{ label: "Panama", alt: "Panama City, Panama skyline" }],
    rows: buildRows({
      "Legal structure": [
        "Naturalization for a relevant investment the Ministry of Economy defines. The decrees do not identify qualifying investment types.",
        "Residency-first: Friendly Nations Visa, Qualified Investor Visa, or real estate route — none produce citizenship at approval",
      ],
      "Program status": ["Do not treat it as an open application program.", "Operating"],
      "Investment floor": [
        "The decrees do not set a confirmed minimum amount or identify qualifying investment types.",
        "Friendly Nations: $200,000 in real estate or a fixed-term bank deposit. Qualified Investor, Ministry of Commerce release of 21 September 2026: B/.300,000 first-sale property, B/.500,000 second-sale property, B/.500,000 fixed-term deposit at Banco Nacional de Panamá or Caja de Ahorros.",
      ],
      "Hold period": [
        "The decrees do not set a hold period or a refund rule.",
        "FN deposit: held for a stated term. QIV: commonly held 5 years. FN residence: roughly 2-year provisional permit, then permanent.",
      ],
      "Family inclusion": [
        "The decrees do not establish a general family-inclusion rule for investor applicants.",
        "Not stated on page for FN/QIV dependents",
      ],
      "Processing time": [
        "DNM has 30 business days to decide after it receives APCI's report. That is not total or guaranteed processing time.",
        "QIV: business days to weeks. FN: no separate timeline given on page.",
      ],
      "Physical presence": [
        "The decrees do not specify a physical-presence rule for investor applicants.",
        "Naturalization requires 5 years' permanent residence; confirm current permit-maintenance day requirements directly",
      ],
      "Mobility / passport": [
        "Henley Passport Index, 13 April 2026: Argentine passport rank 15, score 168. The score includes visa-free entry, visa on arrival, and an electronic travel authorization. It is not a residency right, and it is not a benefit of residence or of an investment-naturalization application. Mercosur nationality if granted.",
        "Residence permit is not a passport; Panama is not a Mercosur state party",
      ],
    }),
  },
  portugal: {
    columns: ["Argentina", "Portugal"],
    photos: [],
    rows: buildRows({
      "Legal structure": [
        "Investment naturalization, distinct from temporary or permanent residence. The decrees do not identify qualifying investment types or a physical-presence rule.",
        "Residency by investment; primary route is €500,000 to qualifying funds/venture capital funds (real estate and capital-transfer routes eliminated)",
      ],
      "Program status": [
        "Do not treat it as an open application program. Criteria and acceptance have not been confirmed.",
        "Established, live program",
      ],
      "Investment floor": [
        "The decrees do not set a confirmed minimum amount or identify qualifying investment types.",
        "€500,000 (fund route)",
      ],
      "Hold period": [
        "The decrees do not set a hold period or a refund rule.",
        "Not stated on page for the fund route",
      ],
      "Family inclusion": [
        "The decrees do not establish a general family-inclusion rule for investor applicants.",
        "Spouse, dependent children, and dependent parents (no age cutoff stated)",
      ],
      "Processing time": [
        "DNM has 30 business days to decide after it receives APCI's report. That is not total or guaranteed processing time.",
        "Not stated on page",
      ],
      "Physical presence": [
        "The decrees do not specify a physical-presence rule for investor applicants.",
        "Average of 7 days per year to maintain the permit; citizenship requires 5 years plus basic Portuguese language",
      ],
      "Mobility / passport": [
        "Henley Passport Index, 13 April 2026: Argentine passport rank 15, score 168. The score includes visa-free entry, visa on arrival, and an electronic travel authorization. It is not a residency right, and it is not a benefit of residence or of an investment-naturalization application. Mercosur mobility with Brazil, Uruguay, and Paraguay if nationality is granted. Not part of the US Visa Waiver Program.",
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
