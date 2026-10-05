import { useEffect, useId, useState } from "react";
import { OPEN_CONSENT_EVENT, readConsent, writeConsent, type ConsentChoice } from "@/lib/consent";

type View = "choice" | "customize";

const buttonClass =
  "inline-flex min-h-11 items-center justify-center rounded-[5px] px-4 py-2.5 text-sm font-medium transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ConsentBanner = () => {
  const titleId = useId();
  const bodyId = useId();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("choice");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [ready, setReady] = useState(false);

  const applyStored = (choice: ConsentChoice | null, nextView: View) => {
    setAnalytics(choice?.analytics ?? false);
    setMarketing(choice?.marketing ?? false);
    setView(nextView);
    setOpen(true);
  };

  useEffect(() => {
    const stored = readConsent();
    if (!stored) applyStored(null, "choice");
    setReady(true);

    const reopen = () => applyStored(readConsent(), "customize");
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const save = (next: Pick<ConsentChoice, "analytics" | "marketing">) => {
    writeConsent(next);
    window.location.reload();
  };

  if (!ready || !open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-border bg-background text-foreground">
      <div
        role="dialog"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        className="mx-auto w-full max-w-6xl px-4 py-4 pr-16 sm:px-6 sm:py-5 md:pr-6"
      >
        {view === "choice" ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 id={titleId} className="font-serif text-xl text-foreground">
                Cookie preferences
              </h2>
              <p id={bodyId} className="mt-2 text-sm leading-relaxed text-text-secondary">
                Necessary storage remembers this choice. Analytics is Ahrefs Web Analytics and stays off until you allow it. Marketing is reserved for future advertising measurement. No advertising tags are installed. You can use the site without allowing analytics or marketing.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button type="button" className={`${buttonClass} border border-foreground bg-background text-foreground hover:bg-muted`} onClick={() => save({ analytics: false, marketing: false })}>
                Decline
              </button>
              <button type="button" className={`${buttonClass} border border-foreground bg-background text-foreground hover:bg-muted`} onClick={() => setView("customize")}>
                Customize
              </button>
              <button type="button" className={`${buttonClass} bg-cta-primary text-white hover:bg-cta-primary-hover`} onClick={() => save({ analytics: true, marketing: true })}>
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 id={titleId} className="font-serif text-xl text-foreground">
              Customize cookies
            </h2>
            <p id={bodyId} className="mt-2 max-w-3xl text-sm leading-relaxed text-text-secondary">
              Necessary storage is required to remember this choice. Analytics and marketing stay off unless you turn them on.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Category
                title="Necessary"
                checked
                disabled
                description="Stores your consent choice in a first-party cookie named ar_consent."
              />
              <Category
                title="Analytics"
                checked={analytics}
                onChange={setAnalytics}
                description="Allows Ahrefs Web Analytics to load and record page views and on-site clicks."
              />
              <Category
                title="Marketing"
                checked={marketing}
                onChange={setMarketing}
                description="Reserved for future advertising tags. No advertising tag is installed in this version."
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button type="button" className={`${buttonClass} bg-cta-primary text-white hover:bg-cta-primary-hover`} onClick={() => save({ analytics, marketing })}>
                Save preferences
              </button>
              <button type="button" className={`${buttonClass} border border-foreground bg-background text-foreground hover:bg-muted`} onClick={() => setView("choice")}>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function Category({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  const id = title.toLowerCase();
  return (
    <label htmlFor={id} className="block border border-border p-3">
      <span className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-foreground">{title}</span>
        <input
          id={id}
          type="checkbox"
          className="h-4 w-4 accent-current"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.checked)}
        />
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-text-secondary">{description}</span>
    </label>
  );
}

export default ConsentBanner;
