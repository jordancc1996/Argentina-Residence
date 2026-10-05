export const CONSENT_COOKIE = "ar_consent";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
export const OPEN_CONSENT_EVENT = "ar:open-consent";

export type ConsentChoice = {
  v: 1;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export function parseConsent(raw: string | null | undefined): ConsentChoice | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(decodeURIComponent(raw)) as Partial<ConsentChoice>;
    if (data?.v !== 1 || typeof data.analytics !== "boolean" || typeof data.marketing !== "boolean") {
      return null;
    }
    return {
      v: 1,
      necessary: true,
      analytics: data.analytics,
      marketing: data.marketing,
    };
  } catch {
    return null;
  }
}

export function readConsent(): ConsentChoice | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`));
  return parseConsent(match?.[1]);
}

export function writeConsent(choice: Pick<ConsentChoice, "analytics" | "marketing">): void {
  const value: ConsentChoice = {
    v: 1,
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
  };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}
