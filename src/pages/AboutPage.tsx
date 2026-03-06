import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import { PartnerCard } from "../components/sections/PartnerCard";
import { imgPath } from "../utils/images";
import "./AboutPage.css";
import { getFeatureCards } from "../content/featureCards";

export function AboutPage() {
  const { t } = useTranslation();
  const featureCards = getFeatureCards(t);

  return (
    <main className="about-page">
      <HeroSection
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
      />
      <FeatureSection
        title={t("about.addMeaning.title")}
        imageSrc={imgPath('/images/about_addMeaningToData.png')}
        imageAlt="Add meaning to data interface"
      >
        <p>{t("about.addMeaning.body")}</p>
      </FeatureSection>
      <PartnerCard
        text={
          <>
            <strong>{t("about.partner.title")}</strong> {t("about.partner.body")}
          </>
        }
        listItems={[
          t("about.partner.li1"),
          t("about.partner.li2"),
          t("about.partner.li3"),
        ]}
        buttonText={t("common.partnerWithAdc")}
        buttonHref="/services"
      />
      <FeatureSection title={t("about.enables.title")}>
        <p>{t("about.enables.intro")}</p>
        <ul className="feature-section__list">
          <li>{t("about.enables.li1")}</li>
          <li>{t("about.enables.li2")}</li>
          <li>{t("about.enables.li3")}</li>
          <li>{t("about.enables.li4")}</li>
        </ul>
      </FeatureSection>
      <FeatureSection
        title={t("about.modular.title")}
        imageSrc={imgPath('/images/about_modularByDesign.png')}
        imageAlt="Add meaning to data interface"
      >
        <p>{t("about.modular.body")}</p>
      </FeatureSection>

      <HeroSection
        cards={featureCards}
        descriptions={{
          schemas:
            t("dataSpaces.cards.schemas"),
          agreements:
            t("dataSpaces.cards.agreements"),
          records:
            t("dataSpaces.cards.records"),
        }}
        showButtons={false}
      />
      <HeroSection
        subtitle={t("about.openSource")}
      />
      <FeatureSection
        title={t("about.history.title")}
        imageSrc={imgPath('/images/about_history&stewardship.png')}
        imageAlt="History and stewardship interface"
      >
        <p>{t("about.history.body")}</p>
      </FeatureSection>
      <HeroSection
        subtitle={t("about.ready")}
      />
      <Link
        to="/services"
        className="partner-card__button"
        onClick={() => window.scrollTo(0, 0)}
      >
        {t("common.partnerWithAdc")}
      </Link>
    </main>
  );
}
