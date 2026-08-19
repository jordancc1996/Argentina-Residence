import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface SubscribeData {
  firstName: string;
  lastName: string;
  email: string;
}

const ResearchSubscribe = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SubscribeData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: SubscribeData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, formType: "newsletter-subscribe" }),
      });
      if (response.ok) {
        toast({ title: "Subscribed", description: "You will receive our quarterly intelligence briefings." });
        reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-[600px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2 tracking-wide">
            Receive Market Intelligence
          </h2>
          <h3 className="font-serif text-lg md:text-xl text-foreground/80 italic mb-8">
            Subscribe
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto">
            Sign up to receive our quarterly analysis on Argentine investment conditions, regulatory developments, and residency program updates.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="firstName" className="text-xs uppercase tracking-[0.05em] text-muted-foreground mb-2 block font-body">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName", { required: "Required" })}
                  className="bg-background border-border text-foreground rounded-sm"
                  placeholder="First name"
                />
                {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <Label htmlFor="lastName" className="text-xs uppercase tracking-[0.05em] text-muted-foreground mb-2 block font-body">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  {...register("lastName", { required: "Required" })}
                  className="bg-background border-border text-foreground rounded-sm"
                  placeholder="Last name"
                />
                {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-xs uppercase tracking-[0.05em] text-muted-foreground mb-2 block font-body">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Required",
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" },
                })}
                className="bg-background border-border text-foreground rounded-sm"
                placeholder="Email address"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-sm font-body text-xs uppercase tracking-[0.08em] font-semibold py-3 h-auto"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </section>
  );
};

export default ResearchSubscribe;
