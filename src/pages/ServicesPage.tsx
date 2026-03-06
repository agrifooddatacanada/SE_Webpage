import { useTranslation } from "react-i18next";
import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import "./ServicesPage.css";

const CONTACT_EMAIL = "adc@uoguelph.ca";

const SERVICES = [
  {
    key: "consultations",
  },
  {
    key: "training",
  },
  {
    key: "fundingProposals",
  },
] as const;

export function ServicesPage() {
  const { t } = useTranslation();

  return (
    <main className="services-page">
      <HeroSection
        title={t("services.heroTitle")}
      />
      {SERVICES.map((service) => (
        <FeatureSection key={service.key} title={t(`services.${service.key}.title`)}>
          <p>{t(`services.${service.key}.intro`)}</p>
          <p>
            {t(`services.${service.key}.ctaPrefix`)}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {t(`services.${service.key}.ctaSuffix`)}
          </p>
        </FeatureSection>
      ))}
    </main>
  );
}
