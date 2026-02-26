import { Link } from "react-router-dom";
import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import { PartnerCard } from "../components/sections/PartnerCard";
import { imgPath } from "../utils/images";
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
        imageSrc={imgPath('/images/about_addMeaningToData.png')}
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
      <PartnerCard
        text={
          <>
            <strong>Partner with us.</strong> The University of Guelph team is
            ready to collaborate with institutions, data spaces, labs and
            departments to deploy, operationalize, and extend Semantic Engine
            capabilities—especially through:
          </>
        }
        listItems={[
          "Co-applying on research grants",
          "Using the Semantic Engine in your environment",
          "Training and onboarding for researchers and administrators",
        ]}
        buttonText="Partner with ADC"
        buttonHref="/services"
      />
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
        descriptions={{
          schemas:
            "Create machine-readable data schemas through a guided, web-based experience. Export schemas in multiple formats and generate templates that accelerate harmonized data collection.",
          agreements:
            "Support controlled data sharing through questionnaires and license templates administered within a hosted research data space. Enable structured requests and agreement workflows for access-managed datasets.",
          records:
            "Produce machine-readable records from collected data—supporting structured outputs suitable for linked data and system-to-system exchange.",
        }}
        showButtons={false}
      />
      <HeroSection
        subtitle={
          <>
            <strong>Open Source & Deployable</strong>
            <br />
            All tools in The Semantic Engine are <strong>
              open source
            </strong>{" "}
            and can be <strong>deployed in any research data space.</strong>
          </>
        }
      />
      <FeatureSection
        title="History and stewardship"
        imageSrc={imgPath('/images/about_history&stewardship.png')}
        imageAlt="History and stewardship interface"
      >
        <p>
          The Semantic Engine is a project under development within{" "}
          <strong>Agri-Food Data Canada</strong>. It was originally funded at
          the University of Guelph under the <strong>Food from Thought</strong>{" "}
          initiative, and continued development is supported by{" "}
          <strong>Genome Canada</strong>, with the{" "}
          <strong>CS-DCC Data Hub</strong> supporting the work.
          <br /> <br />
          The University of Guelph maintains an active team of software
          developers who continue to expand and refine the functionality across
          the suite.
        </p>
      </FeatureSection>
      <HeroSection
        subtitle={
          <>
            <strong>Ready to Bring Semantic Tooling to Your Data Space?</strong>
            <br />
            Whether you want to deploy one tool or adopt a modular set across
            your ecosystem, we can help you plan implementation, onboarding, and
            integration.
          </>
        }
      />
      <Link
        to="/services"
        className="partner-card__button"
        onClick={() => window.scrollTo(0, 0)}
      >
        Partner with ADC
      </Link>
    </main>
  );
}
