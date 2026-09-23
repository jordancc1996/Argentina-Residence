import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const compareOptionsSchema = z.object({
  first_name: z.string().min(1, "Name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
  privacy_agreed: z.boolean().refine((value) => value === true, {
    message: "Agreement is required",
  }),
});

type CompareOptionsFormData = z.infer<typeof compareOptionsSchema>;

export const compareOptionsTriggerClassName =
  "inline-block font-sans font-medium text-[0.7rem] tracking-[0.22em] uppercase bg-primary px-11 py-[14px] hover:bg-primary/80 hover:-translate-y-0.5 transition-all duration-300 no-underline hover:no-underline border-0 cursor-pointer";

const textareaClassName = cn(
  "flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
);

export interface CompareOptionsModalProps {
  triggerLabel: string;
  heading?: string;
  description?: string;
  triggerClassName?: string;
  wrapper?: "mdx" | "none";
}

const CompareOptionsModal = ({
  triggerLabel,
  heading = "Compare Your Options",
  description = "Counsel on investment migration routes can be arranged through this office.",
  triggerClassName = compareOptionsTriggerClassName,
  wrapper = "none",
}: CompareOptionsModalProps) => {
  const { toast } = useToast();
  const fieldId = useId();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CompareOptionsFormData>({
    resolver: zodResolver(compareOptionsSchema),
    defaultValues: {
      phone: "",
      message: "",
      privacy_agreed: false,
    },
  });

  const onSubmit = async (data: CompareOptionsFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone ?? "",
          message: data.message ?? "",
          "form-name": "compare-options-inquiry",
          formType: "compare-options-inquiry",
        }),
      });

      if (response.ok) {
        reset();
        setOpen(false);
        toast({
          title: "Inquiry sent",
          description: "This office will follow up on the comparison request.",
        });
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

  const dialog = (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={triggerClassName}
          style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none" }}
        >
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl-editorial tracking-wide">
            {heading}
          </DialogTitle>
          <DialogDescription className="text-sm text-text-secondary tracking-wide leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor={`${fieldId}-first-name`} className="text-sm font-medium mb-2 block">
              Name
            </Label>
            <Input
              id={`${fieldId}-first-name`}
              autoComplete="given-name"
              aria-invalid={errors.first_name ? true : undefined}
              {...register("first_name")}
            />
            {errors.first_name && (
              <p className="text-destructive text-sm mt-1">{errors.first_name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor={`${fieldId}-last-name`} className="text-sm font-medium mb-2 block">
              Last name
            </Label>
            <Input
              id={`${fieldId}-last-name`}
              autoComplete="family-name"
              aria-invalid={errors.last_name ? true : undefined}
              {...register("last_name")}
            />
            {errors.last_name && (
              <p className="text-destructive text-sm mt-1">{errors.last_name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor={`${fieldId}-email`} className="text-sm font-medium mb-2 block">
              Email
            </Label>
            <Input
              id={`${fieldId}-email`}
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? true : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor={`${fieldId}-phone`} className="text-sm font-medium mb-2 block">
              Phone number
            </Label>
            <Input
              id={`${fieldId}-phone`}
              type="tel"
              autoComplete="tel"
              placeholder="+1 201-555-0123"
              {...register("phone")}
            />
          </div>
          <div>
            <Label htmlFor={`${fieldId}-message`} className="text-sm font-medium mb-2 block">
              Message
            </Label>
            <textarea
              id={`${fieldId}-message`}
              className={textareaClassName}
              placeholder="Are you interested in a particular programme or country, or would you just like an introduction call to take your next migration step?"
              {...register("message")}
            />
          </div>
          <div>
            <label htmlFor={`${fieldId}-privacy`} className="flex items-start gap-3 text-xs text-text-secondary tracking-wide leading-relaxed">
              <input
                id={`${fieldId}-privacy`}
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0"
                {...register("privacy_agreed")}
              />
              <span>
                I agree to the{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.privacy_agreed && (
              <p className="text-destructive text-sm mt-1">{errors.privacy_agreed.message}</p>
            )}
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Inquire"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );

  if (wrapper === "mdx") {
    return <p className="not-prose my-8">{dialog}</p>;
  }

  return dialog;
};

export default CompareOptionsModal;
