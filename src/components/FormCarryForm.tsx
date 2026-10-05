import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import {
  ConsentCheckbox,
  PRIVACY_CONSENT_ERROR,
  PROFESSIONAL_CONSENT_ERROR,
  PrivacyConsentLabel,
  ProfessionalConsentLabel,
  ThirdPersonNote,
  consentPayload,
} from "@/components/FormConsent";
import { FORM_SUBMIT_ERROR, submitFormcarry } from "@/lib/formcarry";
import {
  isOptionalLinkedInProfileUrl,
  LINKEDIN_PROFILE_URL_ERROR,
  linkedinProfilePayload,
} from "@/lib/linkedinProfileUrl";
import { useId, useState } from "react";

interface FormCarryData {
  name: string;
  workEmail: string;
  countryOfResidence: string;
  linkedinProfileUrl?: string;
  formType: string;
  privacyConsent: boolean;
  professionalIntroductionConsent?: boolean;
}

interface FormCarryFormProps {
  formType: "market-insights" | "application";
  buttonText: string;
  title: string;
  description?: string;
}

const FormCarryForm = ({ formType, buttonText, title, description }: FormCarryFormProps) => {
  const privacyId = useId();
  const { register, handleSubmit, setFocus, formState: { errors }, reset } = useForm<FormCarryData>({
    defaultValues: { privacyConsent: false, professionalIntroductionConsent: false },
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormCarryData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitFormcarry({
        name: data.name,
        workEmail: data.workEmail,
        countryOfResidence: data.countryOfResidence,
        ...linkedinProfilePayload(data.linkedinProfileUrl),
        formType,
        ...consentPayload(
          data.privacyConsent,
          formType === "application" ? data.professionalIntroductionConsent : undefined,
        ),
      });

      if (!result.ok && result.inFlight) {
        return;
      }

      if (result.ok) {
        toast({
          title: "Success!",
          description: formType === "market-insights" 
            ? "Your market insights report will be sent to your email shortly."
            : "Thank you for your interest. We'll contact you within 24 hours.",
        });
        reset();
        
        // Trigger file download for market insights
        if (formType === "market-insights") {
          const link = document.createElement('a');
          link.href = 'https://drive.google.com/uc?export=download&id=1UCSXKRW2iGplscfjeH2sX5tLL0JiOFGq';
          link.download = 'argentina-market-report.pdf';
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        throw new Error('Submission failed');
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

  return (
    <div data-md-exclude className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">{title}</h3>
        {description && (
          <p className="text-editorial text-text-secondary tracking-wide">{description}</p>
        )}
      </div>
      
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit, (formErrors) => {
          if (formErrors.linkedinProfileUrl) setFocus("linkedinProfileUrl");
          else if (formErrors.privacyConsent) setFocus("privacyConsent");
          else if (formErrors.professionalIntroductionConsent) setFocus("professionalIntroductionConsent");
        })}
        className="space-y-6"
      >
        <div>
          <Label htmlFor="name" className="text-sm font-medium mb-2 block">
            Full Name *
          </Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="workEmail" className="text-sm font-medium mb-2 block">
            Work Email *
          </Label>
          <Input
            id="workEmail"
            type="email"
            {...register("workEmail", { 
              required: "Work email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            className="w-full"
            placeholder="Enter your work email"
          />
          {errors.workEmail && (
            <p className="text-destructive text-sm mt-1">{errors.workEmail.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="countryOfResidence" className="text-sm font-medium mb-2 block">
            Country of Origin *
          </Label>
          <Input
            id="countryOfResidence"
            {...register("countryOfResidence", { required: "Country is required" })}
            className="w-full"
            placeholder="Enter your country of origin"
          />
          {errors.countryOfResidence && (
            <p className="text-destructive text-sm mt-1">{errors.countryOfResidence.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor={`${privacyId}-linkedin`} className="text-sm font-medium mb-2 block">
            LinkedIn Profile URL (optional)
          </Label>
          <Input
            id={`${privacyId}-linkedin`}
            type="text"
            inputMode="url"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="https://www.linkedin.com/in/username"
            className="w-full min-w-0 max-w-full"
            aria-invalid={errors.linkedinProfileUrl ? true : undefined}
            {...register("linkedinProfileUrl", {
              validate: (value) =>
                isOptionalLinkedInProfileUrl(value) || LINKEDIN_PROFILE_URL_ERROR,
            })}
          />
          {errors.linkedinProfileUrl && (
            <p className="text-destructive text-sm mt-1">{errors.linkedinProfileUrl.message}</p>
          )}
        </div>

        <ConsentCheckbox
          id={privacyId}
          label={<PrivacyConsentLabel />}
          error={errors.privacyConsent?.message}
          requiredConsent
          {...register("privacyConsent", {
            validate: (value) => value === true || PRIVACY_CONSENT_ERROR,
          })}
        />
        {formType === "application" && (
          <ConsentCheckbox
            id={`${privacyId}-professional`}
            label={<ProfessionalConsentLabel />}
            error={errors.professionalIntroductionConsent?.message}
            requiredConsent
            {...register("professionalIntroductionConsent", {
              validate: (value) => value === true || PROFESSIONAL_CONSENT_ERROR,
            })}
          />
        )}
        <ThirdPersonNote />

        <Button 
          type="submit" 
          size="lg" 
          className="w-full mt-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default FormCarryForm;
