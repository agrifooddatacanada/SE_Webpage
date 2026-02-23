import './FeatureSection.css';

interface FeatureSectionProps {
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export function FeatureSection({
  title,
  children,
  imageSrc,
  imageAlt,
}: FeatureSectionProps) {
  return (
    <section className="feature-section">
      <div
        className={`feature-section__inner ${!imageSrc ? 'feature-section__inner--no-image' : ''}`}
      >
        <div className="feature-section__content">
          <h2 className="feature-section__title">{title}</h2>
          <div className="feature-section__text">{children}</div>
        </div>
        {imageSrc && (
          <div className="feature-section__image">
            <img src={imageSrc} alt={imageAlt ?? title} />
          </div>
        )}
      </div>
    </section>
  );
}
