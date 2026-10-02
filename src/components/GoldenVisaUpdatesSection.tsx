import EditorialSection from "@/components/EditorialSection";
import casaRosadaDaytime from "@/assets/casa-rosada-daytime.webp";

const casaRosadaDaytimeSrc =
  typeof casaRosadaDaytime === "string" ? casaRosadaDaytime : casaRosadaDaytime.src;

const GoldenVisaUpdatesSection = () => {
  return (
    <EditorialSection className="pt-0">
      <figure className="max-w-xl mx-auto text-left">
        <img
          src={casaRosadaDaytimeSrc}
          alt="Casa Rosada in Buenos Aires, daytime"
          className="w-full h-auto"
          width={1280}
          height={2274}
        />
        <figcaption className="text-sm text-text-secondary tracking-wide mt-4 leading-relaxed">
          Casa Rosada in Buenos Aires. Program updates, including Decree 524 developments, are tracked as they emerge from Argentina&apos;s federal government.
        </figcaption>
      </figure>
    </EditorialSection>
  );
};

export default GoldenVisaUpdatesSection;
