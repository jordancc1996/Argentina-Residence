import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const ADVISOR_EMAIL = "rachele@argentinaresidence.com";
const ADVISOR_PHONE_DISPLAY = "+1 (555) 000-0000"; // placeholder — awaiting confirmed number
const ADVISOR_PHONE_TEL = "+15550000000";

const ConsultationCTA = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setSubmitted(true);
      form.reset();
    } catch {
      /* keep form for retry */
    } finally {
      setSubmitting(false);
    }
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
        {/* Column 1 — Form */}
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="hidden" name="_source" value="Pre-footer CTA" />
                <input required name="first_name" placeholder="First name" style={inputStyle} />
                <input required type="email" name="email" placeholder="Email" style={inputStyle} />
                <input required type="tel" name="phone" placeholder="Phone number" style={inputStyle} />
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
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 12,
                  marginTop: 12,
                  lineHeight: 1.5,
                }}
              >
                We respect your privacy. Your details are secure and never shared.
              </p>
            </>
          )}
        </div>

        {/* Column 2 — Direct Contact */}
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
            <li>
              <a
                href={`tel:${ADVISOR_PHONE_TEL}`}
                className="flex items-center gap-3 group"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                }}
              >
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(45, 29%, 65%)" }} />
                <span className="group-hover:text-white transition-colors">
                  {ADVISOR_PHONE_DISPLAY}
                </span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ConsultationCTA;
