import { useId, useState } from "react";
import { Mail } from "lucide-react";
import { FORM_SUBMIT_ERROR, submitFormcarry } from "@/lib/formcarry";
import {
  isOptionalLinkedInProfileUrl,
  LINKEDIN_PROFILE_URL_ERROR,
  linkedinProfilePayload,
} from "@/lib/linkedinProfileUrl";
import {
  ConsentCheckbox,
  PRIVACY_CONSENT_ERROR,
  PrivacyConsentLabel,
  ProfessionalConsentLabel,
  ThirdPersonNote,
  consentPayload,
} from "@/components/FormConsent";

const ADVISOR_EMAIL = "admin@argentinaresidence.com";

const ConsultationCTA = () => {
  const fieldId = useId();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [privacyError, setPrivacyError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const privacyConsent = data.get("privacyConsent") === "on";
    const professionalIntroductionConsent = data.get("professionalIntroductionConsent") === "on";
    const linkedinProfileUrl = String(data.get("linkedinProfileUrl") ?? "");
    if (!isOptionalLinkedInProfileUrl(linkedinProfileUrl)) {
      setLinkedinError(LINKEDIN_PROFILE_URL_ERROR);
      form.querySelector<HTMLInputElement>("[name='linkedinProfileUrl']")?.focus();
      return;
    }
    if (!privacyConsent) {
      setPrivacyError(PRIVACY_CONSENT_ERROR);
      form.querySelector<HTMLInputElement>("[name='privacyConsent']")?.focus();
      return;
    }
    setLinkedinError("");
    setPrivacyError("");
    setSubmitting(true);
    setSubmitError("");
    const result = await submitFormcarry({
      first_name: String(data.get("first_name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      ...linkedinProfilePayload(linkedinProfileUrl),
      _source: "Pre-footer CTA",
      formType: "pre-footer-consultation",
      ...consentPayload(privacyConsent, professionalIntroductionConsent),
    });
    if (result.ok) {
      setSubmitted(true);
      form.reset();
    } else if (!result.inFlight) {
      setSubmitError(FORM_SUBMIT_ERROR);
    }
    setSubmitting(false);
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 16,
    lineHeight: 1.25,
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 15,
    color: "#FFFFFF",
    backgroundColor: "hsla(0, 0%, 100%, 0.04)",
    border: "1px solid hsla(45, 29%, 65%, 0.25)",
    borderRadius: 6,
    padding: "12px 14px",
    outline: "none",
    width: "100%",
  };

  return (
    <section
      className="w-full py-16 md:py-20 px-6 md:px-10"
      style={{ backgroundColor: "hsl(150, 5%, 8%)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
        {/* Column 1: Form */}
        <div>
          <h3 style={headingStyle}>Start Your Residency Journey Now</h3>
          {submitted ? (
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "rgba(255,255,255,0.85)",
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              Thank you. An advisor will be in touch shortly.
            </p>
          ) : (
            <>
              <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="hidden" name="_source" value="Pre-footer CTA" />
                <input required name="first_name" placeholder="First name" style={inputStyle} />
                <input required type="email" name="email" placeholder="Email" style={inputStyle} />
                <input required type="tel" name="phone" placeholder="Phone number" style={inputStyle} />
                <div className="flex flex-col gap-1.5 min-w-0">
                  <label
                    htmlFor={`${fieldId}-linkedin`}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    LinkedIn Profile URL (optional)
                  </label>
                  <input
                    id={`${fieldId}-linkedin`}
                    type="text"
                    inputMode="url"
                    name="linkedinProfileUrl"
                    placeholder="https://www.linkedin.com/in/username"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    aria-invalid={linkedinError ? true : undefined}
                    aria-describedby={linkedinError ? `${fieldId}-linkedin-error` : undefined}
                    onChange={() => setLinkedinError("")}
                    style={inputStyle}
                  />
                  {linkedinError && (
                    <p
                      id={`${fieldId}-linkedin-error`}
                      role="alert"
                      className="text-destructive text-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif", lineHeight: 1.5 }}
                    >
                      {linkedinError}
                    </p>
                  )}
                </div>
                <ConsentCheckbox
                  id={`${fieldId}-privacy`}
                  name="privacyConsent"
                  tone="dark"
                  label={<PrivacyConsentLabel compact tone="dark" />}
                  requiredConsent
                  error={privacyError}
                  onChange={() => setPrivacyError("")}
                />
                <ConsentCheckbox
                  id={`${fieldId}-professional`}
                  name="professionalIntroductionConsent"
                  tone="dark"
                  label={<ProfessionalConsentLabel />}
                />
                <ThirdPersonNote tone="dark" />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300"
                  style={{
                    marginTop: 8,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    padding: "14px 24px",
                    border: "none",
                    borderRadius: 6,
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? "Sending…" : "Book My Free Call"}
                </button>
              </form>
              {submitError && (
                <p role="alert" style={{ fontFamily: "'Montserrat', sans-serif", color: "#F2F2F2", fontSize: 13, marginTop: 12, lineHeight: 1.5 }}>
                  {submitError}
                </p>
              )}
            </>
          )}
        </div>

        {/* Column 2: Direct Contact */}
        <div>
          <h3 style={headingStyle}>Prefer to Reach Out Directly?</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href={`mailto:${ADVISOR_EMAIL}`}
                className="flex items-center gap-3 group"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                }}
              >
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(45, 29%, 65%)" }} />
                <span className="group-hover:text-white transition-colors break-all">
                  {ADVISOR_EMAIL}
                </span>
              </a>
            </li>
            {/* TODO: add WhatsApp link here once user provides a number (see AGENTS.md known issues) */}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ConsultationCTA;
