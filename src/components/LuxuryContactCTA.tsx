import { useId, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Hero from "@/components/Hero";
import waitlistHero from "@/assets/argentina-residence-argentina-golden-visa.webp";
import { useToast } from "@/hooks/use-toast";
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

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+54", country: "AR" },
  { code: "+61", country: "AU" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
  { code: "+55", country: "BR" },
  { code: "+52", country: "MX" },
  { code: "+41", country: "CH" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "SG" },
  { code: "+852", country: "HK" },
];

const investmentInterests = [
  "Real Estate Investment",
  "Government Bonds (BOPREAL)",
  "Business or Startup Venture",
  "Residency Only, No Investment",
  "Not Sure Yet, Need Guidance",
];

const waitlistHeroSrc =
  typeof waitlistHero === "string" ? waitlistHero : waitlistHero.src;

const fieldLabelClass = "mb-3 block text-base font-medium leading-snug text-foreground";

const fieldClass =
  "w-full min-h-12 rounded-[5px] border border-foreground/25 bg-background px-4 py-3 text-base text-foreground transition-colors duration-200 placeholder:text-foreground/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const LuxuryContactCTA = () => {
  const { toast } = useToast();
  const fieldId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyError, setPrivacyError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    linkedinProfileUrl: "",
    relocateIntent: "",
    goldenVisaProgram: "",
    privacyConsent: false,
    professionalIntroductionConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setPrivacyError(PRIVACY_CONSENT_ERROR);
      document.getElementById(`${fieldId}-privacy`)?.focus();
      return;
    }
    if (!isOptionalLinkedInProfileUrl(formData.linkedinProfileUrl)) {
      setLinkedinError(LINKEDIN_PROFILE_URL_ERROR);
      document.getElementById(`${fieldId}-linkedin`)?.focus();
      return;
    }
    setPrivacyError("");
    setLinkedinError("");
    setIsSubmitting(true);

    try {
      const result = await submitFormcarry({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: `${formData.countryCode} ${formData.phone}`,
        ...linkedinProfilePayload(formData.linkedinProfileUrl),
        relocateIntent: formData.relocateIntent,
        goldenVisaProgram: formData.goldenVisaProgram,
        formType: "waitlist-contact",
        ...consentPayload(formData.privacyConsent, formData.professionalIntroductionConsent),
      });

      if (!result.ok && result.inFlight) {
        return;
      }

      if (result.ok) {
        toast({
          title: "Thank you for your inquiry",
          description:
            "A member of our team will be in touch within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+1",
          phone: "",
          linkedinProfileUrl: "",
          relocateIntent: "",
          goldenVisaProgram: "",
          privacyConsent: false,
          professionalIntroductionConsent: false,
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: FORM_SUBMIT_ERROR,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "linkedinProfileUrl") setLinkedinError("");
  };

  return (
    <>
    <Hero
      title="JOIN THE WAITLIST"
      subtitle="Join the Argentina Residence waitlist to receive program updates and discuss your plans with our team. Government applications are not confirmed open. Joining this waitlist does not file a government application, reserve a place, or confirm eligibility or citizenship."
      backgroundImage={waitlistHeroSrc}
      imageAlt="Argentine flag on a pole with mountains behind it"
      imageClassName="object-[center_42%] md:object-[center_50%] lg:object-[center_54%] xl:object-[center_68%]"
    />
    <section className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-20 md:px-8 md:pb-32 md:pt-32">
        <form data-md-exclude method="post" onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label htmlFor={`${fieldId}-firstName`} className={fieldLabelClass}>
                First Name
              </label>
              <input
                type="text"
                id={`${fieldId}-firstName`}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                autoComplete="given-name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor={`${fieldId}-lastName`} className={fieldLabelClass}>
                Last Name
              </label>
              <input
                type="text"
                id={`${fieldId}-lastName`}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                autoComplete="family-name"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label htmlFor={`${fieldId}-email`} className={fieldLabelClass}>
                Email Address
              </label>
              <input
                type="email"
                id={`${fieldId}-email`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor={`${fieldId}-phone`} className={fieldLabelClass}>
                Phone Number
              </label>
              <div className="flex gap-3">
                <div className="relative w-32 shrink-0">
                  <select
                    name="countryCode"
                    aria-label="Country code"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className={`${fieldClass} appearance-none pr-9`}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.country} {c.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground" />
                </div>
                <input
                  type="tel"
                  id={`${fieldId}-phone`}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel-national"
                  className={`${fieldClass} min-w-0 flex-1`}
                />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <label htmlFor={`${fieldId}-linkedin`} className={fieldLabelClass}>
              LinkedIn Profile URL (optional)
            </label>
            <input
              type="text"
              inputMode="url"
              id={`${fieldId}-linkedin`}
              name="linkedinProfileUrl"
              value={formData.linkedinProfileUrl}
              onChange={handleChange}
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              placeholder="https://www.linkedin.com/in/username"
              aria-invalid={linkedinError ? true : undefined}
              aria-describedby={linkedinError ? `${fieldId}-linkedin-error` : undefined}
              className={`${fieldClass} min-w-0 max-w-full`}
            />
            {linkedinError && (
              <p id={`${fieldId}-linkedin-error`} className="text-destructive text-sm mt-2" role="alert">
                {linkedinError}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${fieldId}-relocate`} className={fieldLabelClass}>
              Do you intend to relocate to Argentina within 12 months?
            </label>
            <div className="relative">
              <select
                id={`${fieldId}-relocate`}
                name="relocateIntent"
                value={formData.relocateIntent}
                onChange={handleChange}
                required
                className={`${fieldClass} appearance-none pr-10`}
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="yes">Yes, within the next 12 months</option>
                <option value="maybe">Possibly, still exploring</option>
                <option value="no">No, just gathering information</option>
              </select>
              <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground" />
            </div>
          </div>

          <div>
            <label htmlFor={`${fieldId}-interest`} className={fieldLabelClass}>
              What type of investment interests you?
            </label>
            <p className="mb-3 text-base leading-relaxed text-foreground">
              Consultation topics are broader than the proposed Citizenship by Investment program and do not represent official qualifying investment categories.
            </p>
            <div className="relative">
              <select
                id={`${fieldId}-interest`}
                name="goldenVisaProgram"
                value={formData.goldenVisaProgram}
                onChange={handleChange}
                required
                className={`${fieldClass} appearance-none pr-10`}
              >
                <option value="" disabled>
                  Please Select
                </option>
                {investmentInterests.map((interest) => (
                  <option key={interest} value={interest.toLowerCase()}>
                    {interest}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground" />
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <ConsentCheckbox
              id={`${fieldId}-privacy`}
              name="privacyConsent"
              tone="light"
              checked={formData.privacyConsent}
              label={<PrivacyConsentLabel tone="light" />}
              requiredConsent
              error={privacyError}
              onChange={(event) => {
                setFormData({ ...formData, privacyConsent: event.target.checked });
                if (event.target.checked) setPrivacyError("");
              }}
            />
            <ConsentCheckbox
              id={`${fieldId}-professional`}
              name="professionalIntroductionConsent"
              tone="light"
              checked={formData.professionalIntroductionConsent}
              label={<ProfessionalConsentLabel />}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  professionalIntroductionConsent: event.target.checked,
                })
              }
            />
            <ThirdPersonNote tone="light" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-cta-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.06em] text-white transition-colors duration-200 ease-out hover:bg-gold hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "JOIN THE WAITLIST"}
            {!isSubmitting && (
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1"
              />
            )}
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default LuxuryContactCTA;
