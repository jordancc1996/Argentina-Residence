export type PageFaqItem = {
  question: string;
  answer: string;
};

const faqsByPath: Record<string, PageFaqItem[]> = {
  "/guides/argentina-citizenship-investment-vs-paraguay": [
    {
      question: "Does Paraguay Investor Pass provide citizenship or only permanent residence?",
      answer:
        "The Paraguay Investor Pass, if granted, is permanent residence. It is a renewable residence card, reported as valid for ten years, not a Paraguayan passport. Naturalization is a later, separate, and discretionary process. Paraguay does not operate citizenship by investment.",
    },
    {
      question: "Which is better for investors, Argentina citizenship or Paraguay residency?",
      answer:
        "Neither option is universally better. Paraguay Residency by Investment can be filed now for permanent residence. Argentina Citizenship by Investment is intended as a citizenship pathway, but Argentina is not currently accepting applications. The better fit depends on whether the investor needs residence that is available today or wants to wait for Argentina's proposed citizenship route.",
    },
    {
      question: "How much does Paraguay residency by investment cost?",
      answer:
        "Paraguay residency by investment cost depends on the Investor Pass category. Summaries of MIC Resolution 0283/2026 describe USD 70,000 plus five formal jobs for commercial and industrial investment, USD 200,000 for financial holdings commonly described as stock-market investments, USD 200,000 for real estate not for personal use, and USD 150,000 for tourism. Confirm the current official text before treating any brochure amount as the filing rule.",
    },
    {
      question: "Does Paraguay residency provide Mercosur mobility?",
      answer:
        "No. A Paraguayan permanent-residence card does not, by itself, provide Mercosur mobility. Those regional rights follow Paraguayan nationality, which is available only if later naturalization succeeds. Argentine nationality, if granted through the proposed investment route, would be Mercosur nationality.",
    },
    {
      question: "Can I apply for Argentina citizenship by investment while Paraguay is open?",
      answer:
        "Argentina is not currently accepting applications. Operational due diligence protocols and a filing portal have not been published. Completing a Paraguay Investor Pass file does not create an Argentine citizenship file.",
    },
    {
      question: "Can family members be included on a Paraguay Investor Pass application?",
      answer:
        "Current summaries state that dependents cannot ride on the principal's Paraguay Investor Pass file. They apply separately for temporary residence. After two years, the principal may be able to sponsor eligible family members for permanent residence. Argentine family rules have not been published.",
    },
  ],

  "/guides/argentina-citizenship-investment-vs-panama": [
    {
      question: "Does Panama investment residency grant citizenship at approval?",
      answer:
        "No. Panama Friendly Nations Visa and Qualified Investor Visa files, if granted, produce residence, not Panamanian nationality. Naturalization is described as a later process after years of permanent residence. Argentina's unpublished route is described as nationality through a qualifying investment, and it is not accepting applications.",
    },
    {
      question: "What is the difference between Panama Friendly Nations Visa and Qualified Investor Visa?",
      answer:
        "Friendly Nations Visa is for nationals on Panama's published list, plus an economic tie such as employment, a commonly cited USD 200,000 real-estate purchase, or a similar bank deposit. Qualified Investor Visa is an investment-residence route with higher cited floors, including real estate currently cited at USD 300,000, rising to USD 500,000 from 15 October 2026. Confirm live Panama rules with Panamanian counsel. Lists and floors move.",
    },
    {
      question: "Is Panama in Mercosur?",
      answer:
        "No. Panama is not a Mercosur State Party. A Panamanian residence permit is not Mercosur nationality. Argentine nationality, if granted, would be nationality of a Mercosur member. That contrast is Panama-specific and is not a Paraguay comparison. For the Mercosur-member residence comparison, see [Argentina Citizenship by Investment vs Paraguay Residency by Investment](/guides/argentina-citizenship-investment-vs-paraguay).",
    },
    {
      question: "Does a USD 200,000 Panama property purchase qualify for Argentina citizenship by investment?",
      answer:
        "No. A Panama Friendly Nations property or deposit is not an Argentine Treasury contribution or government bond. Argentina is anticipated as a $500,000 USD Treasury contribution or a $1,000,000 USD 7-year government bond, subject to final regulation. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Is the October 2026 Panama real-estate increase an Argentina launch date?",
      answer:
        "No. The published increase of the Panama Qualified Investor real-estate floor to USD 500,000 from 15 October 2026 is a Panama statutory calendar. It is not an Argentine launch date. Argentina is not currently accepting applications.",
    },
  ],

  "/guides/argentina-citizenship-investment-vs-greece-golden-visa": [
    {
      question: "Does the Greece Golden Visa grant Greek citizenship?",
      answer:
        "No. Greece's Golden Visa issues a five-year, renewable Greek residence card tied to a qualifying investment that must stay in place for renewal. It authorizes residence in Greece and Schengen short-stay travel. It is not Greek nationality and not a Greek passport. Greek naturalization is a separate clock.",
    },
    {
      question: "Is Greek real estate an anticipated Argentina citizenship by investment path?",
      answer:
        "No. Real estate is not an anticipated Argentine path. Argentina is anticipated as a $500,000 USD Treasury contribution or a $1,000,000 USD 7-year government bond, subject to final regulation. Buying Greek property for a Hellenic residence permit is a different transaction. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I apply for Argentina citizenship by investment instead of a Greece Golden Visa in 2026?",
      answer:
        "Greece's Golden Visa is an operating residence program. Argentina is not currently accepting applications. Operational protocols remain unpublished. This is not a choice between two open nationality windows.",
    },
    {
      question: "Do Greece Golden Visa location tiers apply to Argentina?",
      answer:
        "No. Greece uses location-tiered property thresholds, including higher bands in Attica, Thessaloniki, Mykonos, Santorini, and certain islands. Those euro purchase prices are Greek real-estate rules. They are not Argentina's anticipated contribution or bond amounts.",
    },
    {
      question: "Does a Greece Golden Visa Schengen card equal an Argentine passport?",
      answer:
        "No. Schengen movement on a Greek Golden Visa comes from the residence permit. An Argentine passport, if issued through the unpublished investment route, is described on this site as visa-free or visa-on-arrival to over 170 countries, including Schengen. That Argentine document is not an APCI product today. See [visa-free travel](/faq/argentina-visa-free-travel).",
    },
  ],

  "/guides/argentina-citizenship-investment-vs-turkey": [
    {
      question: "Does Turkey citizenship by investment grant a passport, or only a residence permit?",
      answer:
        "Turkey's investment route is aimed at nationality, not a multi-year residence card that later converts. The default path is real estate at a published floor of USD 400,000 since the 2022 increase, commonly with a three-year resale restriction. Confirm the current regulation with Turkish counsel.",
    },
    {
      question: "Is Turkish property an anticipated Argentina citizenship by investment path?",
      answer:
        "No. Real estate is not an anticipated Argentine path. Argentina is anticipated as a $500,000 USD Treasury contribution or a $1,000,000 USD 7-year government bond, subject to final regulation. A Turkish title at USD 400,000 is not an Argentine Treasury contribution or government bond. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I file Turkey citizenship by investment now if Argentina is not open?",
      answer:
        "Turkey is processing files. Argentina is not currently accepting applications. A finished Turkish file does not create an Argentine file. Headline proximity between USD 400,000 and $500,000 is not legal equivalence.",
    },
    {
      question: "Does Turkey citizenship by investment require living in Turkey?",
      answer:
        "Published accounts of this track do not treat continuous physical residence as a condition of the grant. Language proficiency is not required for the investment route. Filing still involves steps inside Turkey, including title work and typically in-person biometrics. That is presence for a procedure, not a stay quota.",
    },
    {
      question: "How long does Turkey citizenship by investment take compared with Argentina?",
      answer:
        "Turkey can be started now. Treat under a year for a complete file as a realistic band, not a statutory deadline. Argentina's processing time is not yet officially confirmed because APCI is not processing files. See [application process timeline](/faq/argentina-citizenship-investment-application-timeline).",
    },
  ],

  "/guides/argentina-cbi-vs-caribbean-citizenship": [
    {
      question: "Are Dominica and Grenada citizenship by investment programs currently open?",
      answer:
        "Yes. Dominica and Grenada run operating citizenship-by-investment units that currently process files. Argentina's investment citizenship route is not accepting applications. This page is not a choice between two open Argentine and Caribbean filing windows.",
    },
    {
      question: "Do Caribbean CBI programs require living in Dominica or Grenada?",
      answer:
        "Typical Caribbean CBI rules do not require the applicant to live in the country before or after the grant. This site also describes the Argentine investment route as not requiring prior residence or relocation, but that Argentine route is not open. Ordinary two-year Argentine naturalization is a different track. See [residency requirements](/faq/argentina-residency-physical-presence).",
    },
    {
      question: "Is a Caribbean donation the same as Argentina's anticipated Treasury contribution?",
      answer:
        "No. Caribbean files are typically a government-fund contribution or an approved real-estate project holding. Argentina is anticipated as a $500,000 USD Treasury contribution or a $1,000,000 USD 7-year government bond, subject to final regulation. Real estate is not an anticipated Argentine path. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I apply for Argentina CBI if I already hold Caribbean citizenship?",
      answer:
        "Argentina is not currently accepting applications. Holding a Dominica or Grenada passport does not open an APCI filing channel. Completing a Caribbean CBI file does not create an Argentine file.",
    },
  ],

  "/guides/argentina-citizenship-investment-due-diligence": [
    {
      question: "Is Argentina citizenship by investment due diligence open for filing?",
      answer:
        "No. Applications are not open. Decree 524/2025 did not publish operational due diligence manuals, checklists, or filing portals. None of the review described on this page can be completed with APCI today. See the [launch-date research note](/research/argentina-citizenship-by-investment-launch-date).",
    },
    {
      question: "Do cryptocurrency holdings qualify as the Argentine investment?",
      answer:
        "No. Cryptocurrency and digital asset holdings do not qualify as the Argentine investment on current published categories. Holding Bitcoin, ether, or tokens is not a qualifying Argentine investment. Source-of-funds review, when it exists, is separate from that path test. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Is there a published net-worth multiple for Argentina citizenship by investment?",
      answer:
        "No. Net worth requirements have not been published as a separate numeric floor. The anticipated $500,000 USD Treasury contribution and $1,000,000 USD 7-year government bond are expected investment amounts, subject to final regulation. They are not a rule that applicants must show a multiple of either sum as personal net worth.",
    },
    {
      question: "What is source of funds in the Argentina citizenship by investment due diligence process?",
      answer:
        "Source-of-funds review asks where capital came from and how it moved, including bank statements showing funds leaving a foreign account and arriving in the Argentine transaction used for the anticipated contribution or bond. It does not replace the path test. Neither path has been officially confirmed.",
    },
    {
      question: "Who is expected to review an Argentina citizenship by investment file?",
      answer:
        "The decrees describe a multi-agency review. APCI, under the Ministry of Economy, is expected to receive the investment proposal. Program summaries on this site also list Immigration, security authorities, the Financial Intelligence Unit (UIF), and the intelligence secretariat (SIDE). Those agencies are not processing APCI citizenship files today.",
    },
  ],

  "/guides/argentina-citizenship-investment-business-sale": [
    {
      question: "Does selling a company create Argentina citizenship by investment by itself?",
      answer:
        "No. A share sale, asset sale, or startup exit can produce capital that later funds a qualifying Argentine investment. It does not, by itself, create citizenship. Sale proceeds are not an anticipated qualifying path. APCI is not processing applications.",
    },
    {
      question: "Can I use company sale proceeds for the anticipated Treasury contribution or bond?",
      answer:
        "Using company proceeds means moving lawfully received sale consideration into one of the two anticipated Argentine paths: a $500,000 USD Treasury contribution or a $1,000,000 USD 7-year government bond, subject to final regulation. Parking closing cash is not a citizenship file. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Do earn-outs or buyer stock count as the Argentine investment?",
      answer:
        "Earn-outs that have not yet been paid are not an investment. Buyer stock in a foreign acquirer is not an Argentine Treasury contribution or government bond. Those instruments may matter later as source-of-wealth context. They are not the investment itself.",
    },
    {
      question: "Can crypto from a startup exit be the qualifying Argentine investment?",
      answer:
        "No. Cryptocurrency holdings and foreign accounts without an Argentine nexus are not anticipated as the investment itself. An exit can still be the origin of funds that are later converted into an anticipated contribution or bond, once a filing channel exists.",
    },
    {
      question: "Should I wait to sell my company until Argentina citizenship by investment launches?",
      answer:
        "This page does not set a sale date. Work that can be done now is sequencing proceeds and keeping a clean paper trail. Work that cannot be done is submitting those proceeds to a citizenship unit that is not processing files. Launch timing is covered on the [launch-date research note](/research/argentina-citizenship-by-investment-launch-date).",
    },
  ],

  "/guides/argentina-citizenship-investment-us-visa-backlog": [
    {
      question: "Can Argentina citizenship by investment move my US Visa Bulletin priority date?",
      answer:
        "No. Argentina citizenship by investment will not advance a priority date, bypass a Visa Bulletin cutoff, or turn a pending US petition into a faster green card. It is a separate Argentine track with its own process and timeline. It is not a US immigration shortcut.",
    },
    {
      question: "Can I apply for Argentina citizenship by investment while waiting for a US green card?",
      answer:
        "Argentina is not currently accepting applications as of September 2026. An Argentine investment file cannot be lodged with APCI while due diligence protocols remain unpublished, regardless of a pending US immigrant visa.",
    },
    {
      question: "Does this page apply to US citizens who are not in a green card backlog?",
      answer:
        "No. This page is for people waiting on US immigrant visa numbers. US citizens who are not waiting on an immigrant visa should see [Argentina citizenship by investment for Americans](/research/argentina-citizenship-investment-american-investors).",
    },
    {
      question: "Is an EB-5 visa backlog the same as an I-140 request for evidence?",
      answer:
        "No. A backlog is a supply constraint on immigrant visa numbers after a petition may already be approved. It is not a request for evidence and it is not a denied petition. This site does not publish a live wait-time table. Read the current Visa Bulletin with counsel.",
    },
    {
      question: "If I obtain Argentine nationality, does my US case continue?",
      answer:
        "An Argentine file, if one can later be made, does not replace a US petition, does not change chargeability by itself as described on this page, and does not require abandoning a pending US case. It is a parallel track. It does not decide the US case.",
    },
  ],

  "/guides/argentina-golden-visa-program": [
    {
      question: "Is the Argentina Golden Visa accepting applications in 2026?",
      answer:
        "No. Proposed legislation is under review. APCI has not published operational regulations and is not processing applications. Decree 524/2025 created a legal pathway. It did not open a filing portal.",
    },
    {
      question: "What are the anticipated Argentina Golden Visa investment amounts?",
      answer:
        "Two paths are currently anticipated, subject to final regulation: a non-refundable $500,000 USD contribution to the Argentine Treasury, or a $1,000,000 USD investment in a 7-year, 0% interest Argentine government bond, with principal returned at maturity. Real estate, business ventures, and investment funds are not anticipated qualifying paths. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Does buying Buenos Aires real estate qualify for the Argentina Golden Visa?",
      answer:
        "No. Real estate is not an anticipated qualifying path for the investment citizenship route. Property can still be bought independently of the program. See [Argentina real estate investment](/guides/argentina-real-estate-investment).",
    },
    {
      question: "Has Argentina confirmed a Golden Visa processing time?",
      answer:
        "No. Processing time is not yet officially confirmed. No decision window has been published. See [application process timeline](/faq/argentina-citizenship-investment-application-timeline).",
    },
    {
      question: "Does joining the priority waitlist on this page file an APCI application?",
      answer:
        "No. The eligibility assessment on this page is a waitlist and screening step for when the program launches. It is not an APCI filing. APCI has not published operational regulations and is not processing applications.",
    },
  ],

  "/guides/argentina-real-estate-investment": [
    {
      question: "Does buying property in Argentina grant Golden Visa eligibility?",
      answer:
        "No. Owning property in Argentina does not itself grant Golden Visa eligibility. This guide covers Buenos Aires property types and neighborhoods for buyers interested in the market on its own terms, independent of residency by investment.",
    },
    {
      question: "Can I buy Argentine property now if the Golden Visa is not open?",
      answer:
        "Property purchases are a separate market decision from the unpublished citizenship program. This page does not treat a closing as an APCI application. Confirm title, tax, and foreign-buyer rules with qualified counsel in Argentina.",
    },
  ],

  "/research/argentina-citizenship-by-investment-launch-date": [
    {
      question: "When is the Argentina citizenship by investment launch date?",
      answer:
        "The anticipated launch date is not yet confirmed. After the April 2026 tender cancellation, application procedures and due diligence protocols had still not been defined. Decree 524/2025 is a legal framework, not an open filing channel. In June 2026, two federal appellate courts, including the National Electoral Chamber, declared DNU 366/2025 invalid, finding it did not meet the constitutional standard required for a decree of necessity and urgency. Neither ruling arose from an investor case, but the reasoning reaches the same decree the investment pathway depends on. The government has appealed to the Supreme Court, and the outcome remains pending. No launch date can be confirmed while this question is unresolved. Decree 524/2025, which created APCI, is a separate instrument and was not affected by these rulings. The article body above covers the rulings in full.",
    },
    {
      question: "Did the cancelled tender set a due-diligence deadline?",
      answer:
        "No. The cancelled tender is not a due-diligence deadline and does not open applications. Watch for APCI operational regulations and a filing portal, not a marketing quarter.",
    },
  ],

  "/research/argentina-citizenship-investment-american-investors": [
    {
      question: "Is Argentina citizenship by investment open for American investors?",
      answer:
        "No. APCI has not published operational regulations and is not processing applications. This page is about the US-investor case for the unpublished route, not a live filing checklist.",
    },
    {
      question: "Does Argentina citizenship by investment require Americans to live in Argentina full-time?",
      answer:
        "This site describes the investment nationality route as not using ordinary two-year residence as the path. Physical-presence rules for ordinary residency are covered on [do I need to live in Argentina full-time](/faq/argentina-residency-physical-presence). Do not treat that FAQ as a confirmed APCI filing rule.",
    },
    {
      question: "Where are US tax-residency triggers for this program discussed?",
      answer:
        "US-investor tax-residency triggers are discussed on this page. Worldwide-income taxation for Argentine residents generally is covered on [Argentina residency tax implications](/faq/argentina-residency-tax-implications). Those are not the same topic.",
    },
    {
      question: "I am waiting on a US green card. Is this the right article?",
      answer:
        "No. This article is for US citizens considering Argentine nationality. Backlogged immigrant-visa applicants should use [Argentina citizenship by investment for US greencard backlog](/guides/argentina-citizenship-investment-us-visa-backlog).",
    },
    {
      question: "Would Argentine nationality be Mercosur nationality for Americans?",
      answer:
        "If APCI granted citizenship under the decrees, the result would be Argentine nationality, which is Mercosur nationality. That outcome is not available through a live APCI application today.",
    },
  ],

  "/research/argentina-golden-visa-american-investors-2026": [
    {
      question: "Should 2026 be treated as a filing year for American investors?",
      answer:
        "No. Treat 2026 as a planning window in this article's argument, not as a confirmed year when Americans can lodge an APCI file. The program is not processing applications.",
    },
    {
      question: "Can Argentine citizens apply for a US E-2 visa?",
      answer:
        "This page states that Argentina holds a treaty of commerce and navigation with the United States, and that Argentine citizens can apply for an E-2 visa to live and run a business in the United States. That is a US immigration process, not an Argentine Golden Visa filing. The Golden Visa is not processing applications.",
    },
  ],

  "/research/american-dream-argentina-golden-visa-solution": [
    {
      question: "Is the Argentina Golden Visa a substitute for the cost of living in the United States?",
      answer:
        "The US lifestyle figures on this page are not APCI filing fees. The unpublished Golden Visa is a planning option, not a live application. It is not a cost-of-living calculator and not a promise that Argentine residency will replicate a US standard of living at a fixed price.",
    },
    {
      question: "Are the lifestyle cost figures on this page official Argentine program fees?",
      answer:
        "No. Lifestyle and US-cost illustrations on this page are not APCI filing fees. Anticipated program amounts remain the $500,000 Treasury contribution or $1,000,000 7-year bond, subject to final regulation.",
    },
  ],

  "/research/argentine-investment-landscape-golden-visa-value-proposition": [
    {
      question: "Does investing in Vaca Muerta or RIGI qualify for Argentina citizenship by investment?",
      answer:
        "This page describes macroeconomic and sector context, including energy and incentive frameworks. Sector exposure is not an anticipated qualifying path. The unpublished citizenship route is anticipated as a Treasury contribution or government bond. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Should capital be deployed before the Golden Visa launches?",
      answer:
        "Investing in Argentine assets now is a market decision. It is not an APCI citizenship filing. It does not open an APCI channel. Deploying capital into Argentine assets is not the same as lodging a citizenship file.",
    },
  ],

  "/research/buenos-aires-real-estate-bull-market-analysis": [
    {
      question: "Are Palermo, Recoleta, and Monserrat Golden Visa zones?",
      answer:
        "No. Those names are neighborhood market illustrations on this page. Argentina does not publish location-tiered Golden Visa property bands on this site the way Greece does.",
    },
  ],

  "/industry-news/argentina-citizenship-investment-vs-portugal-golden-visa": [
    {
      question: "Does Portugal Golden Visa grant citizenship at approval?",
      answer:
        "No. Portugal Golden Visa is residency by investment. Citizenship is not immediate. The page describes eligibility to apply for Portuguese citizenship after maintaining legal residency for five years and demonstrating basic Portuguese, plus an average of seven days per year to maintain the permit.",
    },
    {
      question: "Is Argentina citizenship by investment a faster passport than Portugal Golden Visa?",
      answer:
        "Argentina's unpublished route is described as nationality without a prior residency period. APCI is not processing applications, and processing time is unknown. Portugal is a live residence program with a later citizenship clock. They are not the same product.",
    },
    {
      question: "What is Portugal's primary Golden Visa investment after real estate was restricted?",
      answer:
        "This page describes the primary Portugal route as €500,000 to qualifying funds or venture capital funds, with real estate and capital-transfer routes eliminated. Confirm current Portuguese rules with Portuguese counsel.",
    },
    {
      question: "Can I apply for Argentina instead of Portugal Golden Visa in 2026?",
      answer:
        "Portugal's program is established and live. Argentina is not processing applications. Choosing Argentina on this comparison is a planning decision, not a current filing option.",
    },
  ],

  "/industry-news/decree-524-2025-progress-update": [
    {
      question: "Does Decree 524/2025 mean I can apply for Argentina citizenship by investment?",
      answer:
        "No. Decree 524/2025 is the legal framework. APCI has not published operational regulations and is not processing applications. A decree is not a filing portal.",
    },
    {
      question: "Did Decree 524/2025 confirm the $500,000 and $1,000,000 amounts in the Official Gazette as live filing rules?",
      answer:
        "This site treats those amounts as anticipated and subject to final regulation. They have not been published as live filing rules in the Official Gazette on the [investment requirements](/faq/argentina-citizenship-investment-requirements) page. Do not treat this news item as a confirmed fee schedule.",
    },
  ],

  "/industry-news/buenos-aires-foreign-buyer-activity-q1": [
    {
      question: "Does higher Q1 foreign-buyer activity mean the Golden Visa launched?",
      answer:
        "No. Foreign-buyer activity in Buenos Aires real estate is a property-market observation. It is not an APCI announcement that citizenship-by-investment applications are open.",
    },
    {
      question: "If I buy in the same quarter as this report, do I obtain residency?",
      answer:
        "No. A Buenos Aires purchase is not an anticipated qualifying path for the unpublished citizenship route. See [Argentina real estate investment](/guides/argentina-real-estate-investment).",
    },
    {
      question: "Should this report be used as a price forecast?",
      answer:
        "No. It reports a period of buyer activity. It does not publish a guaranteed appreciation rate or a Golden Visa price list.",
    },
  ],

  "/program": [
    {
      question: "Is Argentina residency by investment open for applications?",
      answer:
        "No. APCI has not published operational regulations and is not processing applications. The amounts and paths on this page are anticipated, subject to final regulation.",
    },
    {
      question: "What investment does the Argentina residency by investment program anticipate?",
      answer:
        "Two paths are currently anticipated: a non-refundable $500,000 USD contribution to the Argentine Treasury, or a $1,000,000 USD investment in a 7-year, 0% interest Argentine government bond, with principal returned at maturity. Real estate, business or startup ventures, and investment funds are not anticipated qualifying paths. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Does visa-free access to 170 destinations exist as an APCI product today?",
      answer:
        "This site describes an Argentine passport, if issued, as visa-free or visa-on-arrival to over 170 destinations. That document is not available through a live APCI citizenship filing today. See [visa-free travel](/faq/argentina-visa-free-travel).",
    },
  ],

  "/about": [
    {
      question: "Is Argentina Residence a government agency or APCI office?",
      answer:
        "No. This website provides educational content only and is not affiliated with any government agency. Argentina Residence advises on Argentine residency by investment. It does not operate the government program.",
    },
    {
      question: "Where should I read program mechanics rather than firm background?",
      answer:
        "Use the [Argentina Golden Visa Program](/guides/argentina-golden-visa-program) guide and the [program](/program) page for structure and status. Use this About page for who the office is.",
    },
  ],

  "/market-insights": [
    {
      question: "Are Argentina investment trends the same as Golden Visa eligibility?",
      answer:
        "No. This page is market and economic context. Sector or real-estate exposure is not an anticipated qualifying path for unpublished citizenship by investment. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I apply for residency because market reforms look favorable?",
      answer:
        "No. Economic reforms do not open an APCI filing channel. Applications are not being processed.",
    },
  ],

  "/compliance": [
    {
      question: "Does Argentina Residence provide legal, tax, or investment advice?",
      answer:
        "No. The compliance page states that information is for informational purposes and does not constitute legal, tax, or investment advice. Prospective investors should consult qualified counsel before any investment or residency decision.",
    },
    {
      question: "Are past program conditions a guarantee of future Argentina Golden Visa terms?",
      answer:
        "No. The disclosure states that past program conditions are not indicative of future availability or terms. The investment citizenship route is not processing applications.",
    },
    {
      question: "Does Argentina Residence receive referral fees from lawyers or real estate professionals?",
      answer:
        "The firm maintains relationships with independent immigration attorneys, tax advisors, and real estate professionals. When clients are referred to those professionals, referral fees or commissions may be received. Any such arrangements are to be disclosed to clients before engagement. Referred professionals are independent. The firm does not employ, supervise, or guarantee their work.",
    },
  ],
};

export function getPageFaqs(path: string): PageFaqItem[] {
  const normalized = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  return faqsByPath[normalized] ?? [];
}

export function getAllFaqPaths(): string[] {
  return Object.keys(faqsByPath);
}
