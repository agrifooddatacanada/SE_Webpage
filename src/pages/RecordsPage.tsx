import { useTranslation } from "react-i18next";
import { SolutionHero } from "../components/sections/SolutionHero";
import { FeatureSection } from "../components/sections/FeatureSection";
import { imgPath } from "../utils/images";
import "../styles/solution-page-layout.css";

const RECORDS_URL = "https://zealous-mud-0d3297f0f.3.azurestaticapps.net/";

export function RecordsPage() {
  const { t } = useTranslation();

  return (
    <div className="solution-page records-page">
      <SolutionHero
        title={t("records.hero.title")}
        subtitle={t("records.hero.subtitle")}
        heading={t("records.hero.heading")}
        description={t("records.hero.description")}
        theme="records"
      />
      <main className="solution-page__content">
        <div className="solution-page__text">
          <p>{t("records.intro.p1")}</p>
          <p>{t("records.intro.p2")}</p>
        </div>
        <a
          href={RECORDS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="solution-page__cta"
        >
          {t("common.tryItOut")}
        </a>
        <div className="solution-page__partner-card solution-page__partner-card--records">
          <span className="solution-page__partner-card-title">
            {t("common.forDataSpaces")}
          </span>
          <br /> <br />
          <span className="solution-page__partner-card-text">
            {t("records.partnerCard.p1")}
          </span>
          <br />
          <span className="solution-page__partner-card-text">
            {t("records.partnerCard.p2")}
          </span>
        </div>
        <FeatureSection
          title={t("records.features.metadata.title")}
          imageSrc={imgPath('/images/records_WriteClearMachineReadableMetadataRecords.png')}
          imageAlt="Write clear data documentation interface"
        >
          <p>{t("records.features.metadata.body")}</p>
        </FeatureSection>
        <FeatureSection
          title={t("records.features.schemas.title")}
          imageSrc={imgPath('/images/records_CreateYourOwnRecordSchemas.png')}
          imageAlt="Create your own record schemas interface"
        >
          <p>{t("records.features.schemas.body")}</p>
        </FeatureSection>
      </main>
    </div>
  );
}
