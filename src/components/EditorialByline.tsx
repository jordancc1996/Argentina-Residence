import { editorial } from "@/data/editorial";

function formatReviewDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const EditorialByline = ({ reviewedAt }: { reviewedAt?: string }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <span
          data-md-exclude
          role="img"
          aria-label={editorial.authorName}
          className="inline-flex h-4 w-4 items-center justify-center border border-current text-[0.45rem] font-sans leading-none"
        >
          AR
        </span>
        <span>
          Written by{" "}
          <a href={editorial.authorUrl} className="hover:underline">
            {editorial.authorName}
          </a>
        </span>
      </div>
      {reviewedAt ? (
        <p className="basis-full text-sm text-text-secondary">
          {editorial.reviewLabel} {editorial.reviewerCredential} on {formatReviewDate(reviewedAt)}.{" "}
          {editorial.reviewDisclaimer}
        </p>
      ) : null}
    </>
  );
};

export default EditorialByline;
