import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const PRIVACY_CONSENT_ERROR =
  "Please confirm that you have read the Privacy Policy and consent to the use of your information.";

export const PROFESSIONAL_CONSENT_ERROR =
  "Please confirm that Argentina Residence may share relevant enquiry information when necessary to facilitate the requested introduction.";

export const THIRD_PERSON_AUTHORISATION =
  "If I am enquiring on behalf of another person, I confirm that I am authorised to provide their information.";

export function consentPayload(
  privacyConsent: boolean,
  professionalIntroductionConsent?: boolean,
): Record<string, string> {
  const fields: Record<string, string> = {};
  if (privacyConsent) {
    fields.privacyConsent = "true";
  }
  if (professionalIntroductionConsent) {
    fields.professionalIntroductionConsent = "true";
  }
  return fields;
}

export function PrivacyConsentLabel({
  compact = false,
  tone = "light",
}: {
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <>
      I have read the{" "}
      <a
        href="/privacy"
        className={
          tone === "dark"
            ? "text-[hsl(209,71%,74%)] underline underline-offset-2"
            : "text-primary underline underline-offset-2"
        }
        onClick={(event) => event.stopPropagation()}
      >
        Privacy Policy
      </a>{" "}
      {compact
        ? "and consent to Argentina Residence using my information to respond to my enquiry."
        : "and consent to Argentina Residence storing and using the information I provide to respond to my enquiry."}
    </>
  );
}

export function ProfessionalConsentLabel() {
  return (
    <>
      I authorise Argentina Residence to share relevant enquiry information with an immigration
      attorney, investment migration provider, or other professional where necessary to facilitate a
      requested introduction.
    </>
  );
}

interface ConsentCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  error?: string;
  tone?: "light" | "dark";
  requiredConsent?: boolean;
}

export const ConsentCheckbox = forwardRef<HTMLInputElement, ConsentCheckboxProps>(
  function ConsentCheckbox(
    {
      id,
      label,
      error,
      tone = "light",
      requiredConsent = false,
      className,
      ...inputProps
    },
    ref,
  ) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer py-1">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          aria-required={requiredConsent || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "mt-0.5 h-[22px] w-[22px] shrink-0 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            tone === "dark"
              ? "border-white/80 bg-transparent accent-[hsl(45,29%,65%)] focus-visible:ring-[hsl(45,29%,65%)] focus-visible:ring-offset-[hsl(150,5%,8%)]"
              : "border-foreground/70 bg-background accent-primary focus-visible:ring-ring",
            className,
          )}
          {...inputProps}
        />
        <span
          className={cn(
            "text-[15px] leading-relaxed",
            tone === "dark" ? "text-white/90" : "text-foreground",
          )}
        >
          {label}
        </span>
      </label>
      {error && (
        <p id={`${id}-error`} className="text-destructive text-sm mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export function ThirdPersonNote({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "text-[15px] leading-relaxed",
        tone === "dark" ? "text-white/75" : "text-text-secondary",
      )}
    >
      {THIRD_PERSON_AUTHORISATION}
    </p>
  );
}
