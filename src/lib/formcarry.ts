const FORMCARRY_ENDPOINT = "https://formcarry.com/s/1vbKuKjPCBx";

export const FORM_SUBMIT_ERROR = "We couldn't submit your request. Please try again.";

type FormcarryResponse = {
  code?: number;
  status?: string;
};

let submissionInFlight = false;

export type FormcarryResult =
  | { ok: true }
  | { ok: false; inFlight?: boolean };

export async function submitFormcarry(
  fields: Record<string, string>,
): Promise<FormcarryResult> {
  if (submissionInFlight) {
    return { ok: false, inFlight: true };
  }

  submissionInFlight = true;
  try {
    const body: Record<string, string> = { _gotcha: "" };
    for (const [key, value] of Object.entries(fields)) {
      if (key === "_gotcha") continue;
      body[key] = value == null ? "" : String(value);
    }

    const response = await fetch(FORMCARRY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const payload = (await response.json().catch(() => ({}))) as FormcarryResponse;
    const captured =
      response.ok && payload.code === 200 && payload.status === "success";

    return captured ? { ok: true } : { ok: false };
  } catch {
    return { ok: false };
  } finally {
    submissionInFlight = false;
  }
}
