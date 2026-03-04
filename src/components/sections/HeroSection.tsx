import { Link } from "react-router-dom";
import "./HeroSection.css";

export interface FeatureCard {
  id: string;
  title: string;
  sectionLabel?: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  learnMoreHref: string;
  color: "schemas" | "agreements" | "records";
}
interface HeroSectionProps {
  title?: string;
  subtitle?: React.ReactNode;
  cards?: FeatureCard[];
  descriptions?: Record<string, string>;
  showButtons?: boolean;
}

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "schemas",
    title: "Schemas",
    sectionLabel: "Semantic Engine",
    description:
      "Describe your data in a machine-readable format. No coding, just fill in your information.",
    buttonText: "Write your own schema",
    buttonHref: "https://www.semanticengine.org/",
    learnMoreHref: "/solutions/schemas",
    color: "schemas",
  },
  {
    id: "agreements",
    title: "Agreements",
    sectionLabel: "Semantic Engine",
    description:
      "Describe in custom terms how you want to make your work available.​",
    buttonText: "Demo Agreements",
    buttonHref: "https://agreements.semanticengine.org/",
    learnMoreHref: "/solutions/agreements",
    color: "agreements",
  },
  {
    id: "records",
    title: "Records",
    sectionLabel: "Semantic Engine",
    description:
      "Catalogue your data, your project and more in a machine-readable format.",
    buttonText: "Write your own record",
    buttonHref: "https://records.semanticengine.org/",
    learnMoreHref: "/solutions/records",
    color: "records",
  },
];

export function HeroSection({
  title,
  subtitle,
  cards,
  descriptions,
  showButtons = true,
}: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {cards && cards.length > 0 && (
          <div className="hero__cards">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`hero__card hero__card--${card.color}`}
              >
                <div className="hero__card-header">
                  <span className="hero__card-label">
                    {card.sectionLabel ?? "Semantic Engine"}
                  </span>
                  <h2 className="hero__card-title">{card.title}</h2>
                </div>
                <p className="hero__card-description">
                  {descriptions?.[card.id] ?? card.description}
                </p>
                {showButtons && card.buttonHref && card.buttonText && (
                  (card.buttonHref.startsWith('http://') || card.buttonHref.startsWith('https://')) ? (
                    <a
                      href={card.buttonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero__card-button"
                    >
                      {card.buttonText}
                    </a>
                  ) : (
                    <Link to={card.buttonHref} className="hero__card-button">
                      {card.buttonText}
                    </Link>
                  )
                )}
                <Link to={card.learnMoreHref} className="hero__card-link">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
