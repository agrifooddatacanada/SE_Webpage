import { useTranslation } from "react-i18next";
import { SolutionHero } from "../components/sections/SolutionHero";
import { FeatureSection } from "../components/sections/FeatureSection";
import { imgPath } from "../utils/images";
import "../styles/solution-page-layout.css";
import "./AgreementsPage.css";

const DRT_DEMO_URL =
  "https://github.com/ClimateSmartAgCollab/DRT_Design_Document/blob/main/README.md";

const DRT_MAIN_PAGE_URL = "https://agreements.semanticengine.org/";

export function AgreementsPage() {
  const { t } = useTranslation();

  return (
    <div className="solution-page agreements-page">
      <SolutionHero
        title={t("agreements.hero.title")}
        subtitle={t("agreements.hero.subtitle")}
        heading={t("agreements.hero.heading")}
        description={t("agreements.hero.description")}
        logoSrc={imgPath("/images/drt-logo.png")}
        theme="agreements"
      />
      <main className="solution-page__content">
        <div className="solution-page__text">
          <p>{t("agreements.intro.p1")}</p>
          <p>{t("agreements.intro.p2")}</p>
          <p>{t("agreements.intro.p3")}</p>
        </div>
        <a
          href={DRT_MAIN_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="solution-page__cta solution-page__cta--agreements"
        >
          {t("common.tryItOut")}
        </a>

        <div className="solution-page__partner-card solution-page__partner-card--agreements">
          <span className="solution-page__partner-card-title">
            {t("common.forDataSpaces")}
          </span>
          <a
            href={DRT_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="solution-page__partner-card-link"
          >
            {t("agreements.partnerCard.linkText")}
          </a>
          <span className="solution-page__partner-card-text">
            {t("agreements.partnerCard.body")}
          </span>
        </div>
        <FeatureSection
          title={t("agreements.features.questionnaires.title")}
          imageSrc={imgPath("images/agreements_CustomQuestionnaires.png")}
          imageAlt="Custom Questionnaires interface"
        >
          <p>{t("agreements.features.questionnaires.body")}</p>
        </FeatureSection>
        <FeatureSection
          title={t("agreements.features.templates.title")}
          imageSrc={imgPath("images/agreements_FillTemplates.png")}
          imageAlt="Fill Templates interface"
        >
          <p>{t("agreements.features.templates.body")}</p>
        </FeatureSection>

        <section className="agreements-page__partners">
          <p className="agreements-page__partners-subheading">{t("agreements.partnersTitle")}</p>
          <div className="agreements-page__partners-grid">
            <a
              href="https://agrifooddatacanada.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="agreements-page__partner-box"
            >
              <img
                src={imgPath("images/FOFR1002_ADC_Logo_Colour_Full (4).png")}
                alt="Agri-Food Data Canada logo"
              />
            </a>
            <a
              href="https://www.ulaval.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="agreements-page__partner-box"
            >
              <img
                src={imgPath("images/laval_logo.png")}
                alt="Université Laval logo"
              />
            </a>
            <a
              href="https://www.sfu.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="agreements-page__partner-box"
            >
              <img
                src={imgPath("images/SFU_horizontal_logo_rgb.png")}
                alt="Simon Fraser University logo"
              />
            </a>
            <a
              href="https://climatesmartagrifood.ca/cs-dcc-climate-smart-data-collaboration-centre/"
              target="_blank"
              rel="noopener noreferrer"
              className="agreements-page__partner-box"
            >
              <img
                src={imgPath("images/CS-DCC_Logo-EN_Colour.png")}
                alt="CS-DCC logo"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
