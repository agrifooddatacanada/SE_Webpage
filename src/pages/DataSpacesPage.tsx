import { HeroSection } from "../components/sections/HeroSection";
import { PartnerCard } from "../components/sections/PartnerCard";
import "./DataSpacesPage.css";

export function DataSpacesPage() {
  return (
    <main className="data-spaces-page">
      <HeroSection
        title="Data Spaces"
        subtitle="How modular tools of the Semantic Engine support modern research data ecosystems"
      />
      <PartnerCard
        text={
          <>
            <strong>Take Action</strong>
            <br /> <br />
            If you are developing or participating
            in a data space and want to explore how the Semantic Engine can
            support your workflows, we welcome collaboration.
          </>
        }
        buttonText="Partner with ADC"
        buttonHref="/services"
      />
      
    </main>
  );
}
