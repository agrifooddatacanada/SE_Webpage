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
      <div className="solution-hero__heading">
        {logoSrc && (
          <img
            src={logoSrc}
            alt=""
            className="solution-hero__logo"
            aria-hidden
          />
        )}
        <div className="solution-hero__heading-text">
          <span className="solution-hero__title">{title}</span>
          <span className="solution-hero__subtitle">{subtitle}</span>
        </div>
      </div>
      <div className="solution-hero__text">
        <h1 id="solution-hero-heading">{heading}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
