import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const emailOnlySchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
});

const namedNewsletterSchema = emailOnlySchema.extend({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
});

type NewsletterFormData = z.infer<typeof namedNewsletterSchema>;

interface NewsletterSignupProps {
  className?: string;
  includeNameFields?: boolean;
  heading?: string;
  compact?: boolean;
}

const NewsletterSignup = ({
  className,
  includeNameFields = false,
  heading,
  compact = false,
}: NewsletterSignupProps) => {
  const fieldId = useId();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(includeNameFields ? namedNewsletterSchema : emailOnlySchema),
  });

  const title =
    heading ??
    (compact
      ? "Get program updates"
      : "Never miss an update. Subscribe for the latest on Argentina's investor residency program.");

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          ...(includeNameFields
            ? { first_name: data.first_name, last_name: data.last_name }
            : {}),
          formType: "newsletter-signup",
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
        "bg-card border border-border rounded-lg p-6 md:p-8 text-left not-prose",
        className,
      )}
    >
      {!compact && (
        <p className="text-[11px] uppercase tracking-widest font-semibold text-text-secondary mb-4">
          Argentina Residence Newsletter
        </p>
      )}
      <h2 className={cn("font-serif text-xl-editorial tracking-wide text-foreground", compact ? "mb-6" : "mb-3")}>
        {title}
      </h2>
      {!compact && (
        <p className="text-sm text-text-secondary mb-6 tracking-wide leading-relaxed">
          Program status, regulatory developments, and residency updates, delivered by email.
        </p>
      )}

      {submitted ? (
        <p className="text-sm text-foreground tracking-wide" role="status">
          Thank you. You are subscribed to Argentina Residence program updates.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {includeNameFields && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`${fieldId}-first-name`} className="text-sm font-medium mb-2 block">
                  First Name *
                </Label>
                <Input
                  id={`${fieldId}-first-name`}
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  className="w-full"
                  aria-invalid={errors.first_name ? true : undefined}
                  aria-describedby={
                    errors.first_name ? `${fieldId}-first-name-error` : undefined
                  }
                  {...register("first_name")}
                />
                {errors.first_name && (
                  <p id={`${fieldId}-first-name-error`} className="text-destructive text-sm mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor={`${fieldId}-last-name`} className="text-sm font-medium mb-2 block">
                  Last Name *
                </Label>
                <Input
                  id={`${fieldId}-last-name`}
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name"
                  className="w-full"
                  aria-invalid={errors.last_name ? true : undefined}
                  aria-describedby={
                    errors.last_name ? `${fieldId}-last-name-error` : undefined
                  }
                  {...register("last_name")}
                />
                {errors.last_name && (
                  <p id={`${fieldId}-last-name-error`} className="text-destructive text-sm mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
          )}
          <div>
            <Label htmlFor={`${fieldId}-email`} className="text-sm font-medium mb-2 block">
              Email *
            </Label>
            <Input
              id={`${fieldId}-email`}
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
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
          <Button type="submit" size="lg" className="w-full mt-2" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
          <p className="text-xs text-text-secondary tracking-wide leading-relaxed">
            By submitting this form, you agree to receive email updates from Argentina Residence
            Advisory. You may unsubscribe at any time. Read the{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
