const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg mb-4">Argentina Residence</h3>
            <p className="text-sm text-muted-foreground">
              A specialized advisory boutique facilitating strategic capital deployment and residency acquisition in Argentina.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/program" className="text-muted-foreground hover:text-primary transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Argentina
                </a>
              </li>
              <li>
                <a href="/research" className="text-muted-foreground hover:text-primary transition-colors">
                  Research and Intelligence
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Guides and Resources
                </a>
              </li>
              <li>
                <a href="/research" className="text-muted-foreground hover:text-primary transition-colors">
                  Research and Intelligence
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal and External */}
          <div>
            <h3 className="font-serif text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/compliance" className="text-muted-foreground hover:text-primary transition-colors">
                  Compliance and Disclosures
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-muted-foreground text-sm mb-2">Contact:</p>
              <a href="mailto:rachele@argentinaresidence.com" className="text-primary hover:underline text-sm">
                rachele@argentinaresidence.com
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-muted-foreground text-sm mb-2">External Resources:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://www.argentina.gob.ar/interior/migraciones" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Argentina Migration Office
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.imidaily.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    IMI Daily
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="border-t border-border pt-6 pb-6">
          <p className="text-center text-muted-foreground font-body text-[0.7rem] leading-relaxed max-w-[800px] mx-auto">
            Argentina Residence Advisory provides market intelligence and program advisory services. We are not licensed immigration attorneys, tax advisors, or investment advisors. All information provided is for informational purposes only and does not constitute legal, tax, or investment advice. Prospective investors should consult with qualified legal and tax counsel before making any investment or residency decision. Past program conditions are not indicative of future availability or terms.
          </p>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 flex-wrap justify-center font-body text-[0.7rem]">
              <a href="/compliance" className="text-muted-foreground hover:text-foreground/70 transition-colors">
                Compliance &amp; Disclosures
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/privacy" className="text-muted-foreground hover:text-foreground/70 transition-colors">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/compliance#terms" className="text-muted-foreground hover:text-foreground/70 transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-center text-muted-foreground text-xs">
              © {new Date().getFullYear()} Argentina Residence. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
