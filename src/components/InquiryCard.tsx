import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  us_immigration_status: z.string().min(1, "Current US immigration status is required"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export interface InquiryCardProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
}

const InquiryCard = ({
  eyebrow = "US Immigration Not Moving?",
  heading = "Argentina Runs on a Different Clock.",
  body = "No visa bulletin. No employer dependency. No lottery. Tell us where you are in the US process and we will tell you whether an Argentine file makes sense to track in parallel.",
  ctaLabel = "Start the Conversation",
  className,
}: InquiryCardProps) => {
  const { toast } = useToast();
  const fieldId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          "form-name": "inline-inquiry-us-immigration",
          formType: "inline-inquiry-us-immigration",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "bg-muted border border-border rounded-lg p-6 md:p-8 text-left not-prose my-8",
        className,
      )}
    >
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-widest font-semibold text-text-secondary mb-4">
          {eyebrow}
        </div>
      )}
      <div className="font-serif text-xl-editorial mb-3 tracking-wide text-foreground">
        {heading}
      </div>
      {body && (
        <div className="text-sm text-text-secondary mb-6 tracking-wide leading-relaxed">
          {body}
        </div>
      )}

      {submitted ? (
        <div className="text-sm text-foreground tracking-wide" role="status">
          Thank you. We have your details and will be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <input type="hidden" name="form-name" value="inline-inquiry-us-immigration" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${fieldId}-first-name`} className="sr-only">
                First Name
              </label>
              <Input
                id={`${fieldId}-first-name`}
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                className="w-full"
                aria-invalid={errors.first_name ? true : undefined}
                aria-describedby={errors.first_name ? `${fieldId}-first-name-error` : undefined}
                {...register("first_name")}
              />
              {errors.first_name && (
                <p id={`${fieldId}-first-name-error`} className="text-destructive text-sm mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={`${fieldId}-last-name`} className="sr-only">
                Last Name
              </label>
              <Input
                id={`${fieldId}-last-name`}
                type="text"
                autoComplete="family-name"
                placeholder="Last name"
                className="w-full"
                aria-invalid={errors.last_name ? true : undefined}
                aria-describedby={errors.last_name ? `${fieldId}-last-name-error` : undefined}
                {...register("last_name")}
              />
              {errors.last_name && (
                <p id={`${fieldId}-last-name-error`} className="text-destructive text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={`${fieldId}-email`} className="sr-only">
                Email
              </label>
              <Input
                id={`${fieldId}-email`}
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="w-full"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? `${fieldId}-email-error` : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p id={`${fieldId}-email-error`} className="text-destructive text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={`${fieldId}-status`} className="sr-only">
                Current US immigration status
              </label>
              <Input
                id={`${fieldId}-status`}
                type="text"
                placeholder="e.g. H-1B holder, EB-5 pending, EB-2 backlog, OPT"
                className="w-full"
                aria-invalid={errors.us_immigration_status ? true : undefined}
                aria-describedby={
                  errors.us_immigration_status ? `${fieldId}-status-error` : undefined
                }
                {...register("us_immigration_status")}
              />
              {errors.us_immigration_status && (
                <p id={`${fieldId}-status-error`} className="text-destructive text-sm mt-1">
                  {errors.us_immigration_status.message}
                </p>
              )}
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full mt-2" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : ctaLabel}
          </Button>
          <div className="text-xs text-text-secondary tracking-wide leading-relaxed">
            We respect your privacy. Your details are never shared.
          </div>
        </form>
      )}
    </div>
  );
};

export default InquiryCard;
