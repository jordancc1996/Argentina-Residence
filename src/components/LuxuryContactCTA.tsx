import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useParallax } from "@/hooks/useParallax";

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+54", country: "AR" },
  { code: "+61", country: "AU" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
  { code: "+55", country: "BR" },
  { code: "+52", country: "MX" },
  { code: "+41", country: "CH" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "SG" },
  { code: "+852", country: "HK" },
];

const investmentInterests = [
  "Real Estate Investment",
  "Government Bonds (BOPREAL)",
  "Business or Startup Venture",
  "Residency Only — No Investment",
  "Not Sure Yet — Need Guidance",
];

const LuxuryContactCTA = () => {
  const { toast } = useToast();
  const parallaxY = useParallax(-0.18);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    relocateIntent: "",
    goldenVisaProgram: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`,
          formType: "luxury-contact-cta",
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your inquiry",
          description:
            "A member of our team will be in touch within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+1",
          phone: "",
          relocateIntent: "",
          goldenVisaProgram: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputBaseClasses =
    "w-full bg-transparent text-white/90 placeholder:text-white/40 py-4 pb-2 border-0 border-b border-white/20 focus:border-[#C9A962] focus:outline-none transition-colors duration-300 text-base";

  const selectBaseClasses =
    "w-full bg-transparent text-white/90 py-4 pb-2 border-0 border-b border-white/20 focus:border-[#C9A962] focus:outline-none transition-colors duration-300 text-base appearance-none cursor-pointer";

  const labelClasses =
    "block text-white/60 text-sm font-sans tracking-wide mb-2";

  // Custom thin gold chevron for luxury feel
  const GoldChevron = () => (
    <svg 
      className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#C9A962" 
      strokeWidth="1.5"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );

  return (
    <section
      className="min-h-screen w-full"
      style={{ backgroundColor: "#0B1215" }}
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Image/Video Placeholder */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(11, 18, 21, 0.3), rgba(11, 18, 21, 0.5)), url('https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=1000&auto=format&fit=crop')",
              transform: `translate3d(0, ${parallaxY}px, 0) scale(1.1)`,
              transition: "transform 80ms linear",
            }}
          />
          <div className="absolute inset-0 flex items-end p-8 lg:p-12">
            <p className="text-white/60 text-sm font-sans tracking-widest uppercase">
              Buenos Aires, Argentina
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-16 lg:px-16 lg:py-24">
          <div className="w-full max-w-lg">
            {/* Headline */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Argentina Investment Immigration Consultation
            </h1>

            <p className="text-white/60 text-base md:text-lg mb-12 leading-relaxed font-sans">
              Book a free, no-obligation 15-minute call with our advisory team. We'll answer your questions about Argentine residency and help you understand your best options.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Fields - 2 Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputBaseClasses}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClasses}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputBaseClasses}
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputBaseClasses}
                  placeholder="john.smith@email.com"
                />
              </div>

              {/* Phone with Country Code */}
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <div className="flex gap-4">
                  <div className="relative w-28">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className={`${selectBaseClasses} pr-8`}
                      style={{ backgroundColor: "#0B1215" }}
                    >
                      {countryCodes.map((c) => (
                        <option
                          key={c.code}
                          value={c.code}
                          style={{ backgroundColor: "#0B1215" }}
                        >
                          {c.country} {c.code}
                        </option>
                      ))}
                    </select>
                    <GoldChevron />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`${inputBaseClasses} flex-1`}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Relocate Intent Dropdown */}
              <div>
                <label htmlFor="relocateIntent" className={labelClasses}>
                  Do you intend to relocate to Argentina within 12 months?
                </label>
                <div className="relative">
                  <select
                    id="relocateIntent"
                    name="relocateIntent"
                    value={formData.relocateIntent}
                    onChange={handleChange}
                    required
                    className={`${selectBaseClasses} pr-10`}
                    style={{ backgroundColor: "#0B1215" }}
                  >
                    <option value="" disabled style={{ backgroundColor: "#0B1215" }}>
                      Please Select
                    </option>
                    <option value="yes" style={{ backgroundColor: "#0B1215" }}>
                      Yes, within the next 12 months
                    </option>
                    <option value="maybe" style={{ backgroundColor: "#0B1215" }}>
                      Possibly, still exploring
                    </option>
                    <option value="no" style={{ backgroundColor: "#0B1215" }}>
                      No, just gathering information
                    </option>
                  </select>
                  <GoldChevron />
                </div>
              </div>

              {/* Golden Visa Program Dropdown */}
              <div>
                <label htmlFor="goldenVisaProgram" className={labelClasses}>
                  What type of investment interests you?
                </label>
                <div className="relative">
                  <select
                    id="goldenVisaProgram"
                    name="goldenVisaProgram"
                    value={formData.goldenVisaProgram}
                    onChange={handleChange}
                    required
                    className={`${selectBaseClasses} pr-10`}
                    style={{ backgroundColor: "#0B1215" }}
                  >
                    <option value="" disabled style={{ backgroundColor: "#0B1215" }}>
                      Please Select
                    </option>
                    {investmentInterests.map((interest) => (
                      <option
                        key={interest}
                        value={interest.toLowerCase()}
                        style={{ backgroundColor: "#0B1215" }}
                      >
                        {interest}
                      </option>
                    ))}
                  </select>
                  <GoldChevron />
                </div>
              </div>

              {/* Submit Button - Ghost Style with Dramatic Hover */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 border border-white/50 text-white text-sm tracking-[0.2em] uppercase font-sans bg-transparent hover:bg-[#C9A962] hover:border-[#C9A962] hover:text-[#0B1215] transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(201,169,98,0.3)]"
                >
                  {isSubmitting ? "Submitting..." : "Book My Free Call"}
                </button>
              </div>
            </form>

            {/* Privacy Note */}
            <p className="text-white/40 text-xs mt-8 text-center font-sans tracking-wide">
              We respect your privacy. Your information is secure and will never
              be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryContactCTA;
