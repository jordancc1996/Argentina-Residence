import { cn } from "@/lib/utils";

export interface InquiryCardProps {
  heading?: string;
  body: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
}

const InquiryCard = ({
  heading = "Inquire",
  body,
  href = "/contact",
  ctaLabel = "Inquire",
  className,
}: InquiryCardProps) => {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 md:p-8 text-left not-prose my-8",
        className,
      )}
    >
      <div className="font-serif text-lg-editorial mb-3 tracking-wide text-foreground">
        {heading}
      </div>
      <div className="text-sm text-text-secondary tracking-wide leading-relaxed mb-6">
        {body}
      </div>
      <a
        href={href}
        className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-medium tracking-wide !text-foreground no-underline hover:border-gold/50 hover:bg-secondary/20 hover:no-underline transition-all duration-150 ease-out"
      >
        {ctaLabel}
      </a>
    </div>
  );
};

export default InquiryCard;
