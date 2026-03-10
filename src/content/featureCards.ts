import type { FeatureCard } from "../components/sections/HeroSection";

type Translator = (key: string) => string;

export const getFeatureCards = (t: Translator): FeatureCard[] => [
  {
    id: "schemas",
    title: t("cards.schemas.title"),
    sectionLabel: t("cards.sectionLabel"),
    description: t("cards.schemas.description"),
    buttonText: t("cards.schemas.buttonText"),
    buttonHref: "https://schemas.semanticengine.org/",
    learnMoreHref: "/solutions/schemas",
    color: "schemas",
  },
  {
    id: "agreements",
    title: t("cards.agreements.title"),
    sectionLabel: t("cards.sectionLabel"),
    description: t("cards.agreements.description"),
    buttonText: t("cards.agreements.buttonText"),
    buttonHref: "https://agreements.semanticengine.org/",
    learnMoreHref: "/solutions/agreements",
    color: "agreements",
  },
  {
    id: "records",
    title: t("cards.records.title"),
    sectionLabel: t("cards.sectionLabel"),
    description: t("cards.records.description"),
    buttonText: t("cards.records.buttonText"),
    buttonHref: "https://records.semanticengine.org/",
    learnMoreHref: "/solutions/records",
    color: "records",
  },
];
