import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import "./ServicesPage.css";

const CONTACT_EMAIL = "adc@uoguelph.ca";

const SERVICES = [
  {
    title: "Consultations",
    intro:
      "Are you starting a new project and need help creating documentation for your data or guidance on how to begin developing a data agreement with your partners? Work with one of our consultants to identify best practices and the most effective approaches to support your needs.",
    cta: {
      prefix: "Send an email to ",
      suffix: " to book a one-on-one consultation meeting.",
    },
  },
  {
    title: "Training",
    intro:
      "Welcoming new students or researchers to your project this semester? Heard about the Semantic Engine tools offered through Agri‑Food Data Canada and curious about how they can support your work? Let us design a customized workshop for your team to showcase the capabilities of the Semantic Engine and demonstrate how it can help streamline your research data management processes.",
    cta: {
      prefix: "Contact our team at ",
      suffix: " to discuss workshop and training options.",
    },
  },
  {
    title: "Funding Proposals",
    intro:
      "Writing a funding proposal and anticipating the need for research data management support? Let us help! We can assist with Data Management Plan (DMP) development, creation of data Standard Operating Procedures (SOPs) that include data documentation, data agreement support, and more. By including us in your proposal, we can take on the heavy lifting involved in research data management.",
    cta: {
      prefix: "Contact our team at ",
      suffix: " to discuss pricing options.",
    },
  },
] as const;

export function ServicesPage() {
  return (
    <main className="services-page">
      <HeroSection
        title="Services"
      />
      {SERVICES.map((service) => (
        <FeatureSection key={service.title} title={service.title}>
          <p>{service.intro}</p>
          <p>
            {service.cta.prefix}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {service.cta.suffix}
          </p>
        </FeatureSection>
      ))}
    </main>
  );
}
