import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

export function HeroSection({
  title,
  subtitle,
  cards,
  descriptions,
  showButtons = true,
}: HeroSectionProps) {
  const { t } = useTranslation();

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
                    {card.sectionLabel ?? t("cards.sectionLabel")}
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
                  {t("common.learnMore")}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
