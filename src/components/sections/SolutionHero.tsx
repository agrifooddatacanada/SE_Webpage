import "./SolutionHero.css";

export interface SolutionHeroProps {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  logoSrc?: string;
  theme: "schemas" | "agreements" | "records";
}

export function SolutionHero({
  title,
  subtitle,
  heading,
  description,
  logoSrc,
  theme,
}: SolutionHeroProps) {
  return (
    <section
      className={`solution-hero solution-hero--${theme}`}
      aria-labelledby="solution-hero-heading"
    >
      <div className="solution-hero__content">
        {logoSrc && (
          <img
            src={logoSrc}
            alt=""
            className="solution-hero__logo"
            aria-hidden
          />
        )}
        <div className="solution-hero__heading">
          <span className="solution-hero__label">{title}</span>
          <span className="solution-hero__label-sub">{subtitle}</span>
        </div>
        <h1 id="solution-hero-heading" className="solution-hero__title">
          {heading}
        </h1>
        <p className="solution-hero__subtitle">{description}</p>
      </div>
    </section>
  );
}
