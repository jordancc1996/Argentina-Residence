import { useState } from "react";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, ArrowRight, Clock, Shield } from "lucide-react";
import eligibilityBackground from "@/assets/argentina-golden-visa-eligibility.webp";
import { FORM_SUBMIT_ERROR, submitFormcarry } from "@/lib/formcarry";

type Step = 1 | 2 | 3 | 4;
type InvestmentBudget = "$below-500k" | "$500k+" | "";
type InvestmentTimeline = "0-6months" | "6-12months" | "12+months" | "";
type InvestmentType = "real-estate" | "bonds" | "funds" | "business" | "";

interface FormData {
  budget: InvestmentBudget;
  timeline: InvestmentTimeline;
  investmentType: InvestmentType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
}

const InvestorEligibilityContent = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    budget: "",
    timeline: "",
    investmentType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const readinessFit = formData.timeline === "0-6months" ? "near-term conversation" : "monitoring";

  const handleNext = () => {
    if (step < 4) {
      setStep((step + 1) as Step);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setSubmitError("");
    const result = await submitFormcarry({
      budget: formData.budget,
      timeline: formData.timeline,
      investmentType: formData.investmentType,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      readinessFit,
      source: "Investment Readiness Tool",
      submittedAt: new Date().toISOString(),
      formType: "eligibility-waitlist",
    });

    if (result.ok) {
      setIsComplete(true);
    } else if (!result.inFlight) {
      setSubmitError(FORM_SUBMIT_ERROR);
    }
    setIsSubmitting(false);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.budget !== "";
      case 2:
        return formData.timeline !== "";
      case 3:
        return formData.investmentType !== "";
      case 4:
        return formData.firstName && formData.lastName && formData.email && formData.country;
      default:
        return false;
    }
  };

  if (isComplete) {
    return (
        <div className="min-h-screen flex items-center justify-center py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-secondary">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
            
            <h1 className="font-serif text-xl-editorial mb-4">
              Added to the Argentina Residence Waitlist
            </h1>
            
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-secondary text-text-primary">
              Private update list
            </div>
            
            <p className="text-text-secondary mb-8 text-lg">
              You are on the Argentina Residence waitlist. This is a private update list. It is not a government application, a filing priority, a reserved place, or a finding that you meet an investment requirement. Government applications are not yet confirmed as open.
              {" "}
              {readinessFit === "near-term conversation"
                ? "A near-term timeline can be discussed alongside operating programs, because the pathway should not be treated as an open application program unless the government publishes the applicable criteria and confirms that applications are being accepted."
                : "A longer timeline fits monitoring Argentina until official rules are published."}
            </p>
            
            <div className="bg-secondary/30 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>You'll receive a confirmation email within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>We'll send program updates as legislation progresses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>Your place is on the Argentina Residence waitlist for updates, not on a government list</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/guides/argentina-golden-visa-program">
                <Button size="lg">
                  Explore Program Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/guides/argentina-real-estate-investment">
                <Button variant="outline" size="lg">
                  Property Market Guide
                </Button>
              </a>
            </div>
          </div>
        </div>
    );
  }

  return (
    <>
      <Hero
        title="Argentina Golden Visa Investment Readiness"
        subtitle="A private readiness check. It is not a government eligibility determination. Government applications are not yet confirmed as open."
        backgroundImage={eligibilityBackground}
        imageAlt="Snow-capped volcano over an Andean desert landscape"
      />
      
      <EditorialSection>
        <p className="text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. This is an Argentina Residence readiness assessment. It is not a government eligibility determination. Published requirements are on the{" "}
          <a href="/faq/argentina-citizenship-investment-requirements" className="text-primary hover:underline">investment requirements</a>{" "}
          page. Current status is on the{" "}
          <a href="/research/argentina-citizenship-by-investment-status" className="text-primary hover:underline">status page</a>.
          Completing the form joins the Argentina Residence waitlist for updates. That list does not file an application, give filing priority, or reserve a government position.
        </p>
      </EditorialSection>

      <div data-md-exclude>
      <EditorialSection className="pt-0">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s}
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                    s <= step 
                      ? "bg-gold text-primary" 
                      : "bg-secondary text-text-muted"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Investment Budget */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-xl-editorial mb-3">
                    What investment range are you considering?
                  </h2>
                  <p className="text-text-secondary">
                    These are financial-profile bands. They are not an Argentina government threshold.
                  </p>
                </div>
                
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value as InvestmentBudget })}
                  className="space-y-4"
                >
                  <label
                    className={`flex items-center justify-between p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.budget === "$below-500k"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="$below-500k" id="budget-1" />
                      <div>
                        <p className="font-semibold">Below $500,000</p>
                        <p className="text-sm text-text-secondary">Private budget band. Not a government investment minimum.</p>
                      </div>
                    </div>
                  </label>
                  
                  <label
                    className={`flex items-center justify-between p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.budget === "$500k+"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="$500k+" id="budget-2" />
                      <div>
                        <p className="font-semibold">$500,000+</p>
                        <p className="text-sm text-text-secondary">Private budget band. Not a government investment minimum.</p>
                      </div>
                    </div>
                  </label>
                </RadioGroup>
              </div>
            )}
            
            {/* Step 2: Timeline */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-xl-editorial mb-3">
                    When do you plan to invest?
                  </h2>
                  <p className="text-text-secondary">
                    Your timeline shows whether you want a near-term conversation or time to monitor Argentina
                  </p>
                </div>
                
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value as InvestmentTimeline })}
                  className="space-y-4"
                >
                  <label
                    className={`flex items-center justify-between p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.timeline === "0-6months"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="0-6months" id="timeline-1" />
                      <div>
                        <p className="font-semibold">Within 6 months</p>
                        <p className="text-sm text-text-secondary">You want to talk soon. Government applications are not yet confirmed as open.</p>
                      </div>
                    </div>
                  </label>
                  
                  <label
                    className={`flex items-center justify-between p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.timeline === "6-12months"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="6-12months" id="timeline-2" />
                      <div>
                        <p className="font-semibold">6-12 months</p>
                        <p className="text-sm text-text-secondary">Planning and preparation phase</p>
                      </div>
                    </div>
                  </label>
                  
                  <label
                    className={`flex items-center justify-between p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.timeline === "12+months"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="12+months" id="timeline-3" />
                      <div>
                        <p className="font-semibold">12+ months</p>
                        <p className="text-sm text-text-secondary">Long-term planning</p>
                      </div>
                    </div>
                  </label>
                </RadioGroup>
              </div>
            )}
            
            {/* Step 3: Investment Type */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-xl-editorial mb-3">
                    What interests you most?
                  </h2>
                  <p className="text-text-secondary">
                    These choices route the conversation. They are not published Argentina program categories.
                  </p>
                </div>
                
                <RadioGroup
                  value={formData.investmentType}
                  onValueChange={(value) => setFormData({ ...formData, investmentType: value as InvestmentType })}
                  className="space-y-4"
                >
                  <label
                    className={`flex items-center p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.investmentType === "real-estate"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="real-estate" id="type-1" />
                      <div>
                        <p className="font-semibold">Real Estate</p>
                        <p className="text-sm text-text-secondary">Property, discussed separately from the announced Treasury and bond routes</p>
                      </div>
                    </div>
                  </label>
                  
                  <label
                    className={`flex items-center p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.investmentType === "bonds"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="bonds" id="type-2" />
                      <div>
                        <p className="font-semibold">Government Bonds</p>
                        <p className="text-sm text-text-secondary">Government securities as a topic for discussion</p>
                      </div>
                    </div>
                  </label>
                  
                  <label
                    className={`flex items-center p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.investmentType === "funds"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="funds" id="type-3" />
                      <div>
                        <p className="font-semibold">Investment Funds</p>
                        <p className="text-sm text-text-secondary">Funds as a topic for discussion</p>
                      </div>
                    </div>
                  </label>
                  
                  <label
                    className={`flex items-center p-6 border rounded-lg cursor-pointer transition-all ${
                      formData.investmentType === "business"
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="business" id="type-4" />
                      <div>
                        <p className="font-semibold">Business Creation</p>
                        <p className="text-sm text-text-secondary">A company or startup as a topic for discussion</p>
                      </div>
                    </div>
                  </label>
                </RadioGroup>
              </div>
            )}
            
            {/* Step 4: Contact Info */}
            {step === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-xl-editorial mb-3">
                    Join the Argentina Residence Waitlist
                  </h2>
                  <p className="text-text-secondary">
                    This signs you up for updates from Argentina Residence. It is not a government registration.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Residence *</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <p className="text-xs text-text-muted text-center">
                  By submitting, you agree to receive updates about Argentina's Golden Visa program. 
                  We respect your privacy and will never share your information.
                </p>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div />
              )}
              
              {step < 4 ? (
                <Button 
                  type="button" 
                  onClick={handleNext}
                  disabled={!isStepValid()}
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <div className="flex flex-col items-end gap-2">
                  {submitError && (
                    <p role="alert" className="text-sm text-destructive text-right">{submitError}</p>
                  )}
                  <Button 
                    type="submit" 
                    disabled={!isStepValid() || isSubmitting}
                    className="bg-gold hover:bg-gold/90 text-primary"
                  >
                    {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>
      </EditorialSection>
      </div>
      
      {/* Internal Linking */}
      <EditorialSection>
        <h2 className="font-serif text-lg-editorial mb-8 tracking-wide text-center">
          Review Program Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a 
            href="/guides/argentina-golden-visa-program" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Program Details
            </h3>
            <p className="text-sm text-text-secondary">
              Complete guide to Argentina's Golden Visa program and requirements.
            </p>
          </a>
          
          <a 
            href="/guides/argentina-real-estate-investment" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Property Market
            </h3>
            <p className="text-sm text-text-secondary">
              Buenos Aires and other markets for foreign buyers, independent of the announced Treasury and bond routes.
            </p>
          </a>
        </div>
      </EditorialSection>
    </>
  );
};

export default InvestorEligibilityContent;
