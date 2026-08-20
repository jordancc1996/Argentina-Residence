import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup = ({ className }: NewsletterSignupProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

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
      <p className="text-[11px] uppercase tracking-widest font-semibold text-text-secondary mb-4">
        Argentina Residence Newsletter
      </p>
      <h2 className="font-serif text-xl-editorial mb-3 tracking-wide text-foreground">
        Never miss an update. Subscribe for the latest on Argentina's investor residency program.
      </h2>
      <p className="text-sm text-text-secondary mb-6 tracking-wide leading-relaxed">
        Program status, regulatory developments, and residency updates, delivered by email.
      </p>

      {submitted ? (
        <p className="text-sm text-foreground tracking-wide" role="status">
          Thank you. You are subscribed to Argentina Residence program updates.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div>
            <Label htmlFor="newsletter-email" className="text-sm font-medium mb-2 block">
              Email *
            </Label>
            <Input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "newsletter-email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="newsletter-email-error" className="text-destructive text-sm mt-1">
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
