/**
 * Floating WhatsApp-style call button.
 * - Fixed bottom-right on every page.
 * - Circular, dark outlined WhatsApp glyph matching the reference mark.
 */
const WHATSAPP_NUMBER = "12676323162"; // US number with country code

const FloatingAdvisorCTA = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Call us on WhatsApp"
    className="fixed z-[9990] bottom-6 right-6 max-[480px]:bottom-4 max-[480px]:right-4
      hover:scale-[1.06] transition-transform duration-300"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-14 h-14 max-[480px]:w-12 max-[480px]:h-12 fill-foreground"
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.25-1.24A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.6 0-3.09-.46-4.35-1.26l-.31-.19-3.11.74.75-3.03-.2-.32A8.15 8.15 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
    </svg>
  </a>
);

export default FloatingAdvisorCTA;
