export const LINKEDIN_PROFILE_URL_ERROR =
  "Enter a LinkedIn profile URL, such as https://www.linkedin.com/in/username.";

const LINKEDIN_HOST = /^(?:[a-z0-9-]+\.)*linkedin\.com$/i;
const PROFILE_PATH = /\/(?:in|pub|profile)\/[^/?#]+/i;

function parseLinkedInProfileUrl(value: string): URL | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const withProtocol = /^[a-z][a-z0-9+.-]*:/i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    return null;
  }

  if (url.username || url.password) return null;
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (!LINKEDIN_HOST.test(url.hostname)) return null;

  let pathname = url.pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    pathname = url.pathname;
  }
  if (!PROFILE_PATH.test(pathname)) return null;

  return url;
}

/** Blank is valid. A non-blank value must be a LinkedIn profile URL. */
export function isOptionalLinkedInProfileUrl(value: string | null | undefined): boolean {
  const trimmed = (value ?? "").trim();
  if (!trimmed) return true;
  return parseLinkedInProfileUrl(trimmed) !== null;
}

/** Empty when blank. Adds https:// when the visitor omitted the protocol. */
export function linkedinProfileUrlForPayload(value: string | null | undefined): string {
  const trimmed = (value ?? "").trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const url = parseLinkedInProfileUrl(trimmed);
  return url ? url.toString() : trimmed;
}

export function linkedinProfilePayload(
  value: string | null | undefined,
): { linkedinProfileUrl: string } {
  return { linkedinProfileUrl: linkedinProfileUrlForPayload(value) };
}
