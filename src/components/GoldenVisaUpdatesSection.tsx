import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import casaRosadaDaytime from "@/assets/casa-rosada-daytime.jpg";

const casaRosadaDaytimeSrc =
  typeof casaRosadaDaytime === "string" ? casaRosadaDaytime : casaRosadaDaytime.src;

interface UpdatesSignupData {
  name: string;
  phone: string;
  email: string;
}

const GoldenVisaUpdatesSection = () => {
  const parallaxY = useParallax(-0.3);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdatesSignupData>();

  const onSubmit = async (data: UpdatesSignupData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          formType: "golden-visa-updates-signup",
        }),
      });

      if (response.ok) {
        toast({
          title: "Subscribed",
          description: "We'll keep you updated on the Argentina Golden Visa program.",
        });
        reset();
        setOpen(false);
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
    <EditorialSection className="pt-0">
      <figure className="max-w-xl mx-auto overflow-hidden">
        <motion.div className="scale-110 will-change-transform" style={{ y: parallaxY }}>
          <img
            src={casaRosadaDaytimeSrc}
            alt="Casa Rosada in Buenos Aires, daytime"
            className="w-full h-auto"
            width={1280}
            height={2274}
          />
        </motion.div>
      </figure>
      <h2 className="font-serif text-xl-editorial mb-8 tracking-wide mt-8">
        Stay Ahead of the Argentina Golden Visa Launch
      </h2>
      <p className="text-editorial text-text-secondary mb-8 tracking-wide">
        Get program updates, including Decree 524 developments and the official launch timeline, sent directly to you.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className="bg-white hover:bg-white/90">
              Get Golden Visa Updates
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle className="font-serif tracking-wide">
                  Stay Updated on the Argentina Golden Visa
                </DialogTitle>
                <DialogDescription>
                  Be the first to know about official program updates and the launch timeline.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="gv-signup-name" className="text-sm font-medium mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="gv-signup-name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full"
                    placeholder="Enter your name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="gv-signup-phone" className="text-sm font-medium mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="gv-signup-phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <Label htmlFor="gv-signup-email" className="text-sm font-medium mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="gv-signup-email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Submitting..." : "Keep Me Updated"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </EditorialSection>
  );
};

export default GoldenVisaUpdatesSection;
