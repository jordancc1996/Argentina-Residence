import ChecklistCard from "@/components/ChecklistCard";
import ProcessSteps from "@/components/ProcessSteps";

export const DueDiligenceReviewGroups = () => (
  <ChecklistCard
    heading="Expected review groups"
    items={[
      <>
        Identity and background: passport validity, civil records, and criminal-record
        certificates, apostilled and translated into Spanish where the documents were
        issued abroad. See{" "}
        <a href="/faq/argentina-citizenship-investment-documents">required documents</a>.
      </>,
      <>
        Source verification: proof that the capital used for the Argentine investment
        originated outside Argentina and from lawful activity. See{" "}
        <a href="/faq/argentina-citizenship-investment-requirements">
          investment requirements
        </a>
        .
      </>,
      "Security screening: national-security and financial-intelligence review of the applicant and, where a family file is accepted, of included dependents.",
    ]}
  />
);

export const BusinessSaleTimingSteps = () => (
  <ProcessSteps
    label="Process"
    heading="After a liquidity event"
    steps={[
      {
        title: "Keep documents and the bank trail intact",
        description: (
          <>
            Keep the sale documents and bank trail intact. Mixing proceeds into unrelated
            accounts, or spending them down before a qualifying investment exists, makes
            later source-of-funds work harder. The documentation standard is described on
            the{" "}
            <a href="/guides/argentina-citizenship-investment-due-diligence">
              due diligence
            </a>{" "}
            page.
          </>
        ),
      },
      {
        title: "Do not assume a sale expires",
        description:
          'Do not assume a recent sale "expires" after a fixed number of months. Argentina has not published a look-back period for business-sale proceeds. It has also not promised that old proceeds will be accepted without a clear path into an anticipated contribution or bond.',
      },
      {
        title: "Tax residency is a separate question",
        description:
          "Tax residency in the country where the gain was recognized is a separate question from Argentine citizenship. A February 2026 clarification cited in the launch-date research note said citizenship obtained through investment would not automatically trigger Argentine tax residency. That is not tax advice on the sale itself.",
      },
      {
        title: "Apply once a channel opens",
        description: (
          <>
            Until applications open, a completed sale is a source of capital, not a place
            in a queue. Buying Argentine real estate or an operating company now is not an
            anticipated program path.{" "}
            <a href="/faq/argentina-citizenship-investment-requirements">
              Investment requirements
            </a>{" "}
            currently anticipate a Treasury contribution or a 7-year government bond only.
            A post-sale purchase done "to get ahead" can fail to match the program as
            described today.
          </>
        ),
      },
    ]}
  />
);
