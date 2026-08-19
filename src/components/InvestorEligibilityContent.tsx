import { useState } from "react";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, ArrowRight, Star, Clock, Shield, Sparkles } from "lucide-react";
import eligibilityBackground from "@/assets/argentina-golden-visa-eligibility.jpg";

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
  const [priorityStatus, setPriorityStatus] = useState<"standard" | "priority" | "vip">("standard");

  const calculatePriorityStatus = () => {
    if (formData.budget === "$500k+") {
      return "vip";
    }
    return "standard";
  };

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
    
    const status = calculatePriorityStatus();
    setPriorityStatus(status);

    try {
      await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          // Budget values changed 2026-08-19: "$below-500k" | "$500k+" (was "$100k-$249k" | "$250k-$499k" | "$500k+").
          ...formData,
          priorityStatus: status,
          source: "Investor Eligibility Tool",
          submittedAt: new Date().toISOString()
        })
      });
      
      setIsComplete(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${
              priorityStatus === "vip" 
                ? "bg-gold/20" 
                : priorityStatus === "priority" 
                  ? "bg-gold/10" 
                  : "bg-secondary"
            }`}>
              {priorityStatus === "vip" ? (
                <Sparkles className="h-12 w-12 text-gold" />
              ) : priorityStatus === "priority" ? (
                <Star className="h-12 w-12 text-gold" />
              ) : (
                <CheckCircle className="h-12 w-12 text-primary" />
              )}
            </div>
            
            <h1 className="font-serif text-xl-editorial mb-4">
              {priorityStatus === "vip" && "VIP Status Confirmed!"}
              {priorityStatus === "priority" && "Priority Status Granted!"}
              {priorityStatus === "standard" && "Application Received!"}
            </h1>
            
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              priorityStatus === "vip" 
                ? "bg-gold text-primary" 
                : priorityStatus === "priority"
                  ? "bg-gold/20 text-gold"
                  : "bg-secondary text-text-primary"
            }`}>
              {priorityStatus === "vip" && "VIP Priority Waitlist"}
              {priorityStatus === "priority" && "Priority Waitlist"}
              {priorityStatus === "standard" && "General Waitlist"}
            </div>
            
            <p className="text-text-secondary mb-8 text-lg">
              {priorityStatus === "vip" && (
                "Based on your investment profile, you qualify for our VIP track with dedicated concierge support and first access when the program launches."
              )}
              {priorityStatus === "priority" && (
                "Your investment profile qualifies you for priority processing. You'll receive early access notifications and expedited review when applications open."
              )}
              {priorityStatus === "standard" && (
                "The amount selected is below this site's expected $500,000 USD qualifying floor, subject to final regulation. APCI has not published operational regulations and is not processing applications. We will notify you if a published threshold differs."
              )}
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
                  <span>Your spot on the waitlist is secured</span>
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
                  View Investment Options
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
        title="Argentina Golden Visa Eligibility Assessment"
        subtitle="Discover your path to residency and citizenship through investment."
        backgroundImage={eligibilityBackground}
        imageAlt="Patagonia landscape representing freedom and Argentina citizenship by investment"
      />
      
      <EditorialSection>
        <p className="text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          Argentina offers one of the world's most accessible Citizenship by Investment opportunities. 
          Whether you are interested in the Rentista Visa for passive income earners or the upcoming 
          Golden Visa for investors, this tool analyzes your profile against current government requirements. 
          In just 2 minutes, determine if you qualify for instant Permanent Residency via investment, 
          future Citizenship, and a powerful Mercosur Passport.
        </p>
      </EditorialSection>

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
                    What is your investment budget?
                  </h2>
                  <p className="text-text-secondary">
                    Select the range that matches your planned investment in Argentina
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
                        <p className="text-sm text-text-secondary">Does not meet the expected qualifying floor</p>
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
                        <p className="text-sm text-text-secondary">Expected floor, subject to final regulation</p>
                      </div>
                    </div>
                    <span className="text-xs bg-gold text-primary px-2 py-1 rounded-full">VIP</span>
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
                    Your timeline helps us prepare your application materials
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
                        <p className="text-sm text-text-secondary">Ready to move forward quickly</p>
                      </div>
                    </div>
                    <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">Fast Track</span>
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
                    Preferred investment type?
                  </h2>
                  <p className="text-text-secondary">
                    Select the investment category that interests you most
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
                        <p className="text-sm text-text-secondary">Property in Buenos Aires or other cities</p>
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
                        <p className="text-sm text-text-secondary">Argentine government securities</p>
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
                        <p className="font-semibold">Approved Funds</p>
                        <p className="text-sm text-text-secondary">Pre-approved investment funds</p>
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
                        <p className="text-sm text-text-secondary">Start or acquire an Argentine business</p>
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
                    Complete your registration
                  </h2>
                  <p className="text-text-secondary">
                    Join the waitlist and receive priority updates
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
                <Button 
                  type="submit" 
                  disabled={!isStepValid() || isSubmitting}
                  className="bg-gold hover:bg-gold/90 text-primary"
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </EditorialSection>
      
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
              Investment Options
            </h3>
            <p className="text-sm text-text-secondary">
              Explore qualifying real estate and approved investment funds.
            </p>
          </a>
        </div>
      </EditorialSection>
    </>
  );
};

export default InvestorEligibilityContent;
