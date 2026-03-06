import { useTranslation } from "react-i18next";
import { HeroSection } from "../components/sections/HeroSection";
import { PartnerCard } from "../components/sections/PartnerCard";
import { FeatureSection } from "../components/sections/FeatureSection";
import { getFeatureCards } from "../content/featureCards";
import { imgPath } from "../utils/images";
import "./DataSpacesPage.css";

export function DataSpacesPage() {
  const { t } = useTranslation();
  const featureCards = getFeatureCards(t);

  return (
    <main className="data-spaces-page">
      <HeroSection
        title={t("dataSpaces.heroTitle")}
        subtitle={t("dataSpaces.heroSubtitle")}
      />
      <FeatureSection
        title={t("dataSpaces.whatIs.title")}
        imageSrc={imgPath('/images/DS_whatIsDS.png')}
        imageAlt="Add meaning to data interface"
      >
        <p>{t("dataSpaces.whatIs.p1")}</p>
      </FeatureSection>

      <div className="data-spaces-page__core-elements">
        <h2 className="data-spaces-page__core-elements-title">
          {t("dataSpaces.coreElements.title")}
        </h2>
        <ul>
          <li>{t("dataSpaces.coreElements.li1")}</li>
          <li>{t("dataSpaces.coreElements.li2")}</li>
          <li>{t("dataSpaces.coreElements.li3")}</li>
          <li>{t("dataSpaces.coreElements.li4")}</li>
          <li>{t("dataSpaces.coreElements.li5")}</li>
        </ul>
        {t("dataSpaces.coreElements.summary")}
      </div>
      <FeatureSection
        title={t("dataSpaces.fit.title")}
        imageSrc={imgPath('/images/DS_SE_fit.png')}
        imageAlt="How the Semantic Engine Fits Into Data Spaces"
      >
        <p>{t("dataSpaces.fit.p1")}</p>
      </FeatureSection>
      <HeroSection
        cards={featureCards}
        descriptions={{
          schemas: t("dataSpaces.cards.schemas"),
          agreements: t("dataSpaces.cards.agreements"),
          records: t("dataSpaces.cards.records"),
        }}
        showButtons={false}
      />
      <FeatureSection
        title={t("dataSpaces.whyFit.title")}
        imageSrc={imgPath('/images/DS_SE_fitNaturally.png')}
        imageAlt="Why Semantic Engine Tools Fit Naturally into Data Spaces"
      >
        <p>{t("dataSpaces.whyFit.p1")}</p>
        <ul className="data-spaces-page__core-elements-list">
          <li>{t("dataSpaces.whyFit.li1")}</li>
          <li>{t("dataSpaces.whyFit.li2")}</li>
          <li>{t("dataSpaces.whyFit.li3")}</li>
          <li>{t("dataSpaces.whyFit.li4")}</li>
        </ul>
        <p>{t("dataSpaces.whyFit.p2")}</p>
      </FeatureSection>
      <PartnerCard
        text={
          <>
            <strong>{t("dataSpaces.takeAction.title")}</strong>
            <br /> <br />
            {t("dataSpaces.takeAction.body")}
          </>
        }
        buttonText={t("common.partnerWithAdc")}
        buttonHref="/services"
      />
    </main>
  );
}
