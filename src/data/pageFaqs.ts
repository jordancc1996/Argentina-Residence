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
        "Neither option is universally better. Paraguay Residency by Investment can be filed now for permanent residence. Argentina Citizenship by Investment is an announced citizenship pathway, but government applications are not yet confirmed as open. The better fit depends on whether the investor needs residence that is available today or wants to wait for Argentina's filing window.",
    },
    {
      question: "How much does Paraguay residency by investment cost?",
      answer:
        "Law 6984/2022 requires the investor to demonstrate the investment. It does not, in the text reviewed, set the dollar schedules previously repeated on this page. Those unsupported amounts have been removed.",
    },
    {
      question: "Does Paraguay residency provide Mercosur mobility?",
      answer:
        "No. A Paraguayan permanent-residence card does not, by itself, provide Mercosur mobility. Those regional rights follow Paraguayan nationality, which is available only if later naturalization succeeds. Argentine nationality, if granted through the proposed investment route, would be Mercosur nationality.",
    },
    {
      question: "Can I apply for Argentina citizenship by investment while Paraguay is open?",
      answer:
        "Government applications are not yet confirmed as open. Operational due diligence protocols and a filing portal have not been published. Completing a Paraguay Investor Pass file does not create an Argentine citizenship file.",
    },
    {
      question: "Can family members be included on a Paraguay Investor Pass application?",
      answer:
        "Current summaries state that dependents cannot ride on the principal's Paraguay Investor Pass file. They apply separately for temporary residence. After two years, the principal may be able to sponsor eligible family members for permanent residence. The decrees do not establish a general family-inclusion rule for investor applicants.",
    },
  ],

  "/guides/argentina-citizenship-investment-vs-panama": [
    {
      question: "Does Panama investment residency grant citizenship at approval?",
      answer:
        "No. Panama Friendly Nations Visa and Qualified Investor Visa files, if granted, produce residence, not Panamanian nationality. Naturalization is described as a later process after years of permanent residence. Argentina's October 2, 2026 announcement states a Treasury contribution or a public-bond route. Government applications are not yet confirmed as open.",
    },
    {
      question: "What is the difference between Panama Friendly Nations Visa and Qualified Investor Visa?",
      answer:
        "Friendly Nations Visa is for nationals on Panama's published list, plus an economic tie such as employment or an investment such as $200,000 in real estate or a fixed-term bank deposit. The Qualified Investor Visa is a separate permanent residence route. The Ministry of Commerce release of 21 September 2026 states that Executive Decree 17 of 8 September 2026 sets B/.300,000 for a first-sale new property, B/.500,000 for a second-sale property, and B/.500,000 for a fixed-term deposit at Banco Nacional de Panamá or Caja de Ahorros. That release does not describe a future increase on 15 October 2026, and it does not state a securities minimum or a private-bank minimum. Confirm live Panama rules with Panamanian counsel.",
    },
    {
      question: "Is Panama in Mercosur?",
      answer:
        "No. Panama is not a Mercosur State Party. A Panamanian residence permit is not Mercosur nationality. Argentine nationality, if granted, would be nationality of a Mercosur member. That contrast is Panama-specific and is not a Paraguay comparison. For the Mercosur-member residence comparison, see [Argentina Citizenship by Investment vs Paraguay Residency by Investment](/guides/argentina-citizenship-investment-vs-paraguay).",
    },
    {
      question: "Does a USD 200,000 Panama property purchase qualify for Argentina citizenship by investment?",
      answer:
        "No. A Panama Friendly Nations property or deposit is not an Argentine qualifying investment. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Does the September 2026 Panama rule set a future real-estate increase, or an Argentina launch date?",
      answer:
        "No. The Ministry of Commerce release of 21 September 2026 does not describe a future increase on 15 October 2026. It distinguishes B/.300,000 for new first-sale property from B/.500,000 for second-sale property, and B/.500,000 for a fixed-term deposit at Banco Nacional de Panamá or Caja de Ahorros. That release is not an Argentine launch date. Government applications are not yet confirmed as open.",
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
        "No. Buying Greek property for a Hellenic residence permit is a different transaction. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I apply for Argentina citizenship by investment instead of a Greece Golden Visa in 2026?",
      answer:
        "Greece's Golden Visa is an operating residence program. Argentina has announced financial terms, and government applications are not yet confirmed as open. This is not a choice between two open nationality windows.",
    },
    {
      question: "Do Greece Golden Visa location tiers apply to Argentina?",
      answer:
        "No. Greece uses location-tiered property thresholds, including higher bands in Attica, Thessaloniki, Mykonos, Santorini, and certain islands. Those euro purchase prices are Greek real-estate rules. They are not an Argentine investment rule. The October 2, 2026 announcement states a Treasury contribution or a public-bond route.",
    },
    {
      question: "Does a Greece Golden Visa Schengen card equal an Argentine passport?",
      answer:
        "No. Schengen movement on a Greek Golden Visa comes from the residence permit. An Argentine passport, if later issued, is a separate document. Argentine residency does not provide that passport's travel access. Current figures are on the [visa-free travel](/faq/argentina-visa-free-travel) page. That Argentine document is not an APCI product today.",
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
        "No. A Turkish title at USD 400,000 is not an Argentine qualifying investment. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I file Turkey citizenship by investment now if Argentina is not open?",
      answer:
        "Turkey is processing files. Government applications are not yet confirmed as open. A finished Turkish file does not create an Argentine file. A Turkish property price is not an Argentine investment rule.",
    },
    {
      question: "Does Turkey citizenship by investment require living in Turkey?",
      answer:
        "Published accounts of this track do not treat continuous physical residence as a condition of the grant. Language proficiency is not required for the investment route. Filing still involves steps inside Turkey, including title work and typically in-person biometrics. That is presence for a procedure, not a stay quota.",
    },
    {
      question: "How long does Turkey citizenship by investment take compared with Argentina?",
      answer:
        "Turkey can be started now. Treat under a year for a complete file as a realistic band, not a statutory deadline. Argentina's processing time is not yet officially confirmed because The pathway should not be treated as an open application program. See [application process timeline](/faq/argentina-citizenship-investment-application-timeline).",
    },
  ],

  "/guides/argentina-cbi-vs-caribbean-citizenship": [
    {
      question: "Are Dominica and Grenada citizenship by investment programs currently open?",
      answer:
        "Yes. Dominica and Grenada run operating citizenship-by-investment units that currently process files. Government applications are not yet confirmed as open. This page is not a choice between two open Argentine and Caribbean filing windows.",
    },
    {
      question: "Do Caribbean CBI programs require living in Dominica or Grenada?",
      answer:
        "Typical Caribbean CBI rules do not require the applicant to live in the country before or after the grant. The decrees do not specify a physical-presence rule for investor applicants. Ordinary two-year Argentine naturalization is a different track. See [residency requirements](/faq/argentina-residency-physical-presence).",
    },
    {
      question: "Is a Caribbean donation the Argentine investment?",
      answer:
        "No. Caribbean files are a government-fund contribution or an approved real-estate project holding. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I apply for Argentina CBI if I already hold Caribbean citizenship?",
      answer:
        "Government applications are not yet confirmed as open. Holding a Dominica or Grenada passport does not open an APCI filing channel. Completing a Caribbean CBI file does not create an Argentine file.",
    },
  ],

  "/guides/argentina-citizenship-investment-due-diligence": [
    {
      question: "Is Argentina citizenship by investment due diligence open for filing?",
      answer:
        "The pathway should not be treated as an open application program. Decree 524/2025 did not publish operational due diligence manuals, checklists, or filing portals. None of the review described on this page can be completed with APCI today. See the [launch-date research note](/research/argentina-citizenship-by-investment-launch-date).",
    },
    {
      question: "Do cryptocurrency holdings qualify as the Argentine investment?",
      answer:
        "The decrees do not identify cryptocurrency as a qualifying or disqualifying investment. Source-of-funds review, when it exists, is separate from that path test. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Is there a published net-worth multiple for Argentina citizenship by investment?",
      answer:
        "No. Net worth requirements have not been published as a separate numeric floor. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. They do not state a net-worth multiple.",
    },
    {
      question: "What is source of funds in the Argentina citizenship by investment due diligence process?",
      answer:
        "Source-of-funds review asks where capital came from and how it moved, including how capital moved. The decrees do not identify the investment type that review would test.",
    },
    {
      question: "Who is expected to review an Argentina citizenship by investment file?",
      answer:
        "The decrees describe a multi-agency review. APCI, under the Ministry of Economy, is expected to receive the investment proposal. This page does not add agencies beyond what the decrees state. The pathway should not be treated as an open application program.",
    },
  ],

  "/guides/argentina-citizenship-investment-business-sale": [
    {
      question: "Does selling a company create Argentina citizenship by investment by itself?",
      answer:
        "No. A share sale, asset sale, or startup exit does not, by itself, create citizenship. The decrees do not identify sale proceeds as a qualifying or disqualifying investment. The pathway should not be treated as an open application program.",
    },
    {
      question: "Do company sale proceeds become an Argentine citizenship filing by themselves?",
      answer:
        "No. Parking closing cash is not a citizenship file. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Do earn-outs or buyer stock count as the Argentine investment?",
      answer:
        "The decrees do not identify buyer stock or an unpaid earn-out as a qualifying or disqualifying investment. Those instruments may matter later as source-of-wealth context.",
    },
    {
      question: "Can crypto from a startup exit be the qualifying Argentine investment?",
      answer:
        "The decrees do not identify cryptocurrency as a qualifying or disqualifying investment. An exit can still be discussed as a possible origin of funds. It is not itself an identified investment type.",
    },
    {
      question: "Should I wait to sell my company until Argentina citizenship by investment launches?",
      answer:
        "This page does not set a sale date. Work that can be done now is sequencing proceeds and keeping a clean paper trail. Work that cannot be done is submitting those proceeds as an investment-naturalization application. The pathway should not be treated as an open application program. Launch timing is covered on the [launch-date research note](/research/argentina-citizenship-by-investment-launch-date).",
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
        "Government applications are not yet confirmed as open. An Argentine investment file cannot be lodged with APCI while that remains the case, regardless of a pending US immigrant visa.",
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
        "Do not treat the pathway as an open application program. DNU 366/2025 created APCI within the amended citizenship framework. Decree 524/2025 subsequently established a basic application and review procedure involving APCI. It did not create APCI, and it did not by itself confirm that applications are being accepted.",
    },
    {
      question: "Does Decree 524/2025 set the Argentina Golden Visa investment amount?",
      answer:
        "No. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. They do not establish that real estate, a business, or a fund qualifies or disqualifies. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Does buying Buenos Aires real estate qualify for the Argentina Golden Visa?",
      answer:
        "The decrees do not identify real estate as a qualifying or disqualifying investment. A property purchase is a separate transaction. See [Argentina real estate investment](/guides/argentina-real-estate-investment).",
    },
    {
      question: "Has Argentina confirmed a Golden Visa processing time?",
      answer:
        "No total processing time has been published. Decree 524/2025 gives DNM 30 business days to decide after DNM receives APCI's report. That period is not 30 days from the application, and it is not a guaranteed overall processing time. See [application process timeline](/faq/argentina-citizenship-investment-application-timeline).",
    },
    {
      question: "Does joining the Argentina Residence waitlist file an APCI application?",
      answer:
        "No. The Argentina Residence waitlist is this firm's list for updates. It is not an Argentine government application, a government priority list, or a reserved filing place. Government applications are not yet confirmed as open.",
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
        "Property purchases are a separate market decision from the announced Treasury contribution and public-bond routes. This page does not treat a closing as an APCI application. Confirm title, tax, and foreign-buyer rules with qualified counsel in Argentina.",
    },
  ],

  "/research/argentina-citizenship-by-investment-launch-date": [
    {
      question: "When is the Argentina citizenship by investment launch date?",
      answer:
        "No exact filing date is confirmed on this page. The government expects applications during Q4 2026. Government applications are not yet confirmed as open. Two federal appellate decisions in June 2026, including the National Electoral Chamber decision in Yang, Liping, questioned or invalidated aspects of DNU 366/2025 in individual naturalization cases. Neither concerned a CBI applicant. The decisions create uncertainty about the DNU provisions on which the investment pathway depends. The available rulings do not establish the final, nationwide effect of the decisions. This page does not state that a Supreme Court appeal is pending. DNU 366/2025 created APCI. Decree 524/2025 subsequently established a basic review procedure involving APCI. It did not create APCI.",
    },
    {
      question: "Did the cancelled tender set a due-diligence deadline?",
      answer:
        "This page does not treat a tender cancellation as an established fact. Gazette publication of Resolution 522/2026 was not located. A due-diligence deadline is not stated here. Government applications are not yet confirmed as open.",
    },
  ],

  "/research/argentina-citizenship-investment-american-investors": [
    {
      question: "Is Argentina citizenship by investment open for American investors?",
      answer:
        "Government applications are not yet confirmed as open. This page is not a live filing checklist.",
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
        "If citizenship were later granted under the decrees, the result would be Argentine nationality. Mercosur effects, if any, would follow that nationality. Government applications are not yet confirmed as open.",
    },
  ],

  "/research/argentina-golden-visa-american-investors-2026": [
    {
      question: "Should 2026 be treated as a filing year for American investors?",
      answer:
        "No. Treat 2026 as a planning window in this article's argument, not as a confirmed year when Americans can lodge an APCI file. The pathway should not be treated as an open application program.",
    },
    {
      question: "Can Argentine citizens apply for a US E-2 visa?",
      answer:
        "This page states that Argentina holds a treaty of commerce and navigation with the United States, and that Argentine citizens can apply for an E-2 visa to live and run a business in the United States. That is a US immigration process, not an Argentine Golden Visa filing. The pathway should not be treated as an open application program.",
    },
  ],

  "/research/american-dream-argentina-golden-visa-solution": [
    {
      question: "Is the Argentina Golden Visa a substitute for the cost of living in the United States?",
      answer:
        "The US lifestyle figures on this page are not APCI filing fees. The announced Golden Visa terms are a planning reference, not a live application. It is not a cost-of-living calculator and not a promise that Argentine residency will replicate a US standard of living at a fixed price.",
    },
    {
      question: "Are the lifestyle cost figures on this page official Argentine program fees?",
      answer:
        "No. Lifestyle and US-cost illustrations on this page are not APCI filing fees. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open.",
    },
  ],

  "/research/argentine-investment-landscape-golden-visa-value-proposition": [
    {
      question: "Does investing in Vaca Muerta or RIGI qualify for Argentina citizenship by investment?",
      answer:
        "This page describes macroeconomic and sector context, including energy and incentive frameworks. The decrees do not identify sector exposure, a Treasury payment, or a bond as a qualifying or disqualifying investment. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
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
        "Investment naturalization is distinct from residence. The decrees do not specify a physical-presence rule. DNM has 30 business days after it receives APCI's report. That is not total processing time. The pathway should not be treated as an open application program. Portugal is a live residence program with a later citizenship clock. They are not the same product.",
    },
    {
      question: "What is Portugal's primary Golden Visa investment after real estate was restricted?",
      answer:
        "This page describes the primary Portugal route as €500,000 to qualifying funds or venture capital funds, with real estate and capital-transfer routes eliminated. Confirm current Portuguese rules with Portuguese counsel.",
    },
    {
      question: "Can I apply for Argentina instead of Portugal Golden Visa in 2026?",
      answer:
        "Portugal's program is established and live. Government applications are not yet confirmed as open. Choosing Argentina on this comparison is a planning decision, not a current filing option.",
    },
  ],

  "/industry-news/decree-524-2025-progress-update": [
    {
      question: "Does Decree 524/2025 mean I can apply for Argentina citizenship by investment?",
      answer:
        "Decree 524/2025 established a basic review procedure involving APCI. DNU 366/2025 created APCI. Government applications are not yet confirmed as open. A decree is not a filing portal.",
    },
    {
      question: "Did Decree 524/2025 set a confirmed investment amount?",
      answer:
        "No. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Do not treat this news item as a confirmed fee schedule. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
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
        "The decrees do not identify a Buenos Aires purchase as a qualifying or disqualifying investment. See [Argentina real estate investment](/guides/argentina-real-estate-investment).",
    },
    {
      question: "Should this report be used as a price forecast?",
      answer:
        "No. It reports a period of buyer activity. It does not publish a guaranteed appreciation rate or a Golden Visa price list.",
    },
  ],

  "/program": [
    {
      question: "Are Argentina citizenship-by-investment applications open?",
      answer:
        "The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open.",
    },
    {
      question: "Does Decree 524/2025 set an investment amount?",
      answer:
        "No. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Does visa-free travel come with Argentine residency today?",
      answer:
        "No. Argentine residency is not an Argentine passport. Current passport-mobility figures are on the [visa-free travel](/faq/argentina-visa-free-travel) page. That passport is not a benefit of residence or of an investment-naturalization application.",
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
        "No. This page is market and economic context. The decrees do not identify sector or real-estate exposure as a qualifying or disqualifying investment. See [investment requirements](/faq/argentina-citizenship-investment-requirements).",
    },
    {
      question: "Can I apply for residency because market reforms look favorable?",
      answer:
        "No. Economic reforms do not open an APCI filing channel. Government applications are not yet confirmed as open.",
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
        "No. The disclosure states that past program conditions are not indicative of future availability or terms. The pathway should not be treated as an open application program.",
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
