import { useTranslation } from "react-i18next";
import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import { getFeatureCards } from "../content/featureCards";
import { imgPath } from "../utils/images";

export function HomePage() {
  const { t } = useTranslation();
  const featureCards = getFeatureCards(t);

  return (
    <main className="home-page">
      <HeroSection
        title={t("home.heroTitle")}
        subtitle={t("home.heroSubtitle")}
        cards={featureCards}
      />

      <FeatureSection
        title={t("home.features.clearDocumentation.title")}
        imageSrc={imgPath('/images/home_1.png')}
        imageAlt="Data documentation interface"
      >
        <p>{t("home.features.clearDocumentation.p1")}</p>
        <p>{t("home.features.clearDocumentation.p2")}</p>
      </FeatureSection>

      <FeatureSection
        title={t("home.features.agreements.title")}
        imageSrc={imgPath('/images/home_2.png')}
        imageAlt="Data sharing agreement form"
      >
        <p>{t("home.features.agreements.p1")}</p>
        <p>{t("home.features.agreements.p2")}</p>
      </FeatureSection>

      <FeatureSection
        title={t("home.features.metadata.title")}
        imageSrc={imgPath('/images/home_3.png')}
        imageAlt="Metadata entry form"
      >
        <p>{t("home.features.metadata.p1")}</p>
        <p>{t("home.features.metadata.p2")}</p>
        <p>{t("home.features.metadata.p3")}</p>
      </FeatureSection>

      <FeatureSection
        title={t("home.features.verifiedData.title")}
        imageSrc={imgPath('/images/home4.png')}
        imageAlt="Data verification interface"
      >
        <p>{t("home.features.verifiedData.p1")}</p>
      </FeatureSection>

      <FeatureSection
        title={t("home.features.standardizeCollection.title")}
        imageSrc={imgPath('/images/home_5.png')}
        imageAlt="Standardized data collection"
      >
        <p>{t("home.features.standardizeCollection.p1")}</p>
        <p>{t("home.features.standardizeCollection.p2")}</p>
      </FeatureSection>
    </main>
  );
}
