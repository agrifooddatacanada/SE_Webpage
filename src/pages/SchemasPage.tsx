import { useTranslation } from "react-i18next";
import { SolutionHero } from "../components/sections/SolutionHero";
import { FeatureSection } from "../components/sections/FeatureSection";
import { imgPath } from "../utils/images";
import "../styles/solution-page-layout.css";

const SE_SCHEMAS_URL = "https://schemas.semanticengine.org/";

export function SchemasPage() {
  const { t } = useTranslation();

  return (
    <div className="solution-page records-page">
      <SolutionHero
        title={t("schemas.hero.title")}
        subtitle={t("schemas.hero.subtitle")}
        heading={t("schemas.hero.heading")}
        description={t("schemas.hero.description")}
        theme="schemas"
      />
      <main className="solution-page records-page">
        <div className="solution-page__text">
          <p>{t("schemas.intro.p1")}</p>
          <p>{t("schemas.intro.p2")}</p>
        </div>
        <a
          href={SE_SCHEMAS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="solution-page__cta"
        >
          {t("common.tryItOut")}
        </a>
        <div className="solution-page__partner-card solution-page__partner-card--schemas">
          <span className="solution-page__partner-card-title">
            {t("common.forDataSpaces")}
          </span>
          <br /> <br />
          <span className="solution-page__partner-card-text">
            {t("schemas.partnerCard")}
          </span>
        </div>
        <FeatureSection
          title={t("schemas.features.documentation.title")}
          imageSrc={imgPath('/images/schemas_WriteClearDataDocumentation.png')}
          imageAlt="Write clear data documentation interface"
        >
          <p>{t("schemas.features.documentation.body")}</p>
        </FeatureSection>
        <FeatureSection
          title={t("schemas.features.verify.title")}
          imageSrc={imgPath('/images/schemas_VerifyData.png')}
          imageAlt="Verify data interface"
        >
          <p>{t("schemas.features.verify.body")}</p>
        </FeatureSection>
        <FeatureSection
          title={t("schemas.features.standardize.title")}
          imageSrc={imgPath('/images/schemas_StandardizeDataCollection.png')}
          imageAlt="Standardize data collection interface"
        >
          <p>{t("schemas.features.standardize.body")}</p>
        </FeatureSection>
        <FeatureSection
          title={t("schemas.features.archival.title")}
          imageSrc={imgPath('/images/schemas_ArchivalSchemaDocumentation.png')}
          imageAlt="Archival schema documentation interface"
        >
          <p>{t("schemas.features.archival.body")}</p>
        </FeatureSection>
      </main>
    </div>
  );
}
