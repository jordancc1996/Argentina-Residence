import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ConsentCheckbox, PRIVACY_CONSENT_ERROR, PrivacyConsentLabel, consentPayload } from "@/components/FormConsent";
import { FORM_SUBMIT_ERROR, submitFormcarry } from "@/lib/formcarry";
import { cn } from "@/lib/utils";

const updateSchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value.length === 0 || /^[0-9+().\-\s]{6,}$/.test(value),
      "Enter a phone number with the country code. Any international format is accepted.",
    ),
  privacyConsent: z.boolean().refine((value) => value === true, {
    message: PRIVACY_CONSENT_ERROR,
  }),
});

type UpdateFormData = z.infer<typeof updateSchema>;

interface NewsletterSignupProps {
  className?: string;
  /** Formcarry source tag. Defaults to the existing newsletter submission type. */
  formType?: string;
}

const NewsletterSignup = ({
  className,
  formType = "newsletter-signup",
}: NewsletterSignupProps) => {
  const fieldId = useId();
  const headingId = `${fieldId}-heading`;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    reset,
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateSchema),
    defaultValues: { name: "", email: "", phone: "", privacyConsent: false },
  });

  const onSubmit = async (data: UpdateFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitFormcarry({
        name: data.name,
        email: data.email,
        phone: data.phone,
        formType,
        ...consentPayload(data.privacyConsent),
      });

      if (result.ok) {
        setSubmitted(true);
        reset();
      } else if (!result.inFlight) {
        toast({
          title: "Error",
          description: FORM_SUBMIT_ERROR,
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: FORM_SUBMIT_ERROR,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby={headingId}
      data-md-exclude
      className={cn(
        "not-prose my-12 md:my-16 max-w-full bg-secondary text-left border border-primary/20 border-l-4 border-l-primary rounded-lg shadow-quiet px-6 py-8 md:px-10 md:py-10",
        className,
      )}
    >
      <p className="eyebrow text-primary mb-3">Argentina Residence</p>
      <h2
        id={headingId}
        className="font-serif text-2xl md:text-[2rem] leading-tight text-foreground mb-3 max-w-xl"
      >
        Get Argentina Residence Updates
      </h2>
      <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-8 max-w-2xl">
        Receive updates on Argentina&apos;s developing citizenship-by-investment framework, residence pathways, regulatory developments, and related opportunities.
      </p>

      {submitted ? (
        <p className="text-sm md:text-base text-foreground leading-relaxed" role="status">
          Thank you. You are signed up for Argentina Residence updates.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit, (formErrors) => {
            if (formErrors.privacyConsent) setFocus("privacyConsent");
          })}
          className="space-y-5"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor={`${fieldId}-name`} className="text-sm font-medium text-foreground mb-2 block">
                Name
                <span className="sr-only"> (required)</span>
              </label>
              <Input
                id={`${fieldId}-name`}
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                className="w-full h-12 bg-background border-foreground/20 text-base"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? `${fieldId}-name-error` : undefined}
                {...register("name")}
              />
              {errors.name && (
                <p id={`${fieldId}-name-error`} className="text-destructive text-sm mt-1" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={`${fieldId}-email`} className="text-sm font-medium text-foreground mb-2 block">
                Email address
                <span className="sr-only"> (required)</span>
              </label>
              <Input
                id={`${fieldId}-email`}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                aria-required="true"
                className="w-full h-12 bg-background border-foreground/20 text-base"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? `${fieldId}-email-error` : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p id={`${fieldId}-email-error`} className="text-destructive text-sm mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <label htmlFor={`${fieldId}-phone`} className="text-sm font-medium text-foreground mb-2 block">
                Phone number (optional)
              </label>
              <Input
                id={`${fieldId}-phone`}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="w-full h-12 bg-background border-foreground/20 text-base"
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? `${fieldId}-phone-error` : undefined}
                {...register("phone")}
              />
              {errors.phone && (
                <p id={`${fieldId}-phone-error`} className="text-destructive text-sm mt-1" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <ConsentCheckbox
            id={`${fieldId}-privacy`}
            label={<PrivacyConsentLabel />}
            requiredConsent
            error={errors.privacyConsent?.message}
            {...register("privacyConsent")}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto min-h-12 px-10"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Updates"}
          </Button>
          <p className="text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            You may unsubscribe from marketing emails at any time. Providing a phone number does
            not consent to text messages or telephone marketing.
          </p>
        </form>
      )}
    </section>
  );
};

export default NewsletterSignup;
