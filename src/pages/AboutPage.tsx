import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import "./AboutPage.css";
import { FEATURE_CARDS } from "../components/sections/HeroSection";

export function AboutPage() {
  return (
    <main className="about-page">
      <HeroSection
        title="About"
        subtitle={
          <>
            Semantics is the study of how we represent meaning. <br /> <br />
            The Semantic Engine offers tools that let researchers add meaning to
            their data, making it more discoverable, shareable, and
            machine-accessible.
          </>
        }
      />
      <FeatureSection
        title="Add meaning to data"
        imageSrc="/images/about_addMeaningToData.png"
        imageAlt="Add meaning to data interface"
      >
        <p>
          The Semantic Engine is a suite of web-based tools that helps
          researchers and research organizations add meaning to data——making it
          more <strong>discoverable, shareable,</strong> and
          <strong>machine-accessible</strong>.
          <br />
          Designed for adoption across varied research contexts, each tool can
          be deployed independently to support the needs of individual research
          teams or entire data ecosystems.
        </p>
      </FeatureSection>
      <section className="partner-card">
        <div className="partner-card__inner">
          <p className="partner-card__text">
            <strong>Partner with us.</strong> The University of Guelph team is
            ready to collaborate with institutions, data spaces, labs and
            departments to deploy, operationalize, and extend Semantic Engine
            capabilities—especially through:
          </p>
          <ul className="partner-card__list">
            <li>Co-applying on research grants</li>
            <li>Using the Semantic Engine in your environment</li>
            <li>Training and onboarding for researchers and administrators</li>
          </ul>
          <a
            href="https://adc.uoguelph.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card__button"
          >
            Partner with ADC
          </a>
        </div>
      </section>
      <FeatureSection title="What the Semantic Engine Enables">
        <p>
          The Semantic Engine supports research data practices that reduce
          friction and increase reuse—without requiring one-size-fits-all
          adoption. At a suite level, it enables:
        </p>
        <ul className="feature-section__list">
          <li>
            <strong>Meaningful structure:</strong> Define and communicate what
            your data <i>means</i>, not just what it <i>looks like</i>.
          </li>
          <li>
            <strong>Machine accessibility:</strong> Produce outputs that tools
            and systems can read consistently, improving interoperability.
          </li>
          <li>
            <strong>Better collaboration:</strong> Help teams collect harmonized
            data that requires less transformation before analysis.
          </li>
          <li>
            <strong>Stronger data spaces:</strong> Provide administrators with
            deployable tools that can be integrated into local workflows and
            governance.
          </li>
        </ul>
      </FeatureSection>
      <FeatureSection
        title="Modular by design"
        imageSrc="/images/about_modularByDesign.png"
        imageAlt="Add meaning to data interface"
      >
        <p>
          The Semantic Engine is intentionally <strong>modular</strong>. Each
          tool can be adopted on its own, depending on the needs and maturity of
          a given research group or data space.
          <br /> <br />
          Some components can also be configured to support{" "}
          <strong>pipeline-oriented workflows</strong>, such as data collection
          and verification steps that feed into ETL processes and downstream
          systems.
        </p>
      </FeatureSection>

      <HeroSection
        cards={FEATURE_CARDS}
      />


    </main>
  );
}
