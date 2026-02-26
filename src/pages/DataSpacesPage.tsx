import { HeroSection } from "../components/sections/HeroSection";
import { PartnerCard } from "../components/sections/PartnerCard";
import { FeatureSection } from "../components/sections/FeatureSection";
import { FEATURE_CARDS } from "../components/sections/HeroSection";
import { imgPath } from "../utils/images";
import "./DataSpacesPage.css";

export function DataSpacesPage() {
  return (
    <main className="data-spaces-page">
      <HeroSection
        title="Data Spaces"
        subtitle="How modular tools of the Semantic Engine support modern research data ecosystems"
      />
      <FeatureSection
        title="What is a data space"
        imageSrc={imgPath('/images/DS_whatIsDS.png')}
        imageAlt="Add meaning to data interface"
      >
        <p>
          A <strong>data space</strong> is a trusted, community-led ecosystem
          that brings together people, governance, services, and infrastructure
          to enable responsible, interoperable, and long‑term use of research
          data.
          <br />
          Rather than operating as a single centralized repository, a data space
          supports coordinated, standards‑based collaboration across
          institutions, sectors, and research domains.
          <br />
          Data spaces can have varying levels of service which can be tuned to
          resources and needs of each community. Data spaces can grow with the
          community, provided tools and infrastructure are modular, open, and
          reusable.
        </p>
      </FeatureSection>

      <div className="data-spaces-page__core-elements">
        <h2 className="data-spaces-page__core-elements-title">
          Core elements of a data space include:
        </h2>
        <ul>
          <li>
            <strong>People and governance</strong> – Communities, policies, and
            shared rules that define how data is used responsibly.
          </li>
          <li>
            <strong>Services and workflows</strong> – Tools that support the
            creation, validation, and reuse of structured data.
          </li>
          <li>
            <strong>Technical infrastructure</strong> – Platforms and systems
            that store, transmit, and manage data.
          </li>
          <li>
            <strong>Interoperability and standards</strong> – Shared
            definitions, schemas, agreements, and metadata that ensure data can
            be understood and reused across contexts.
          </li>
          <li>
            <strong>Long-term stewardship</strong> – Ensuring that valuable
            research data remains accessible, meaningful, and usable over time.
          </li>
        </ul>
        Data spaces enable collaborative research, support sovereignty and
        security requirements, and promote the responsible reuse of data across
        projects, teams, and institutions.
      </div>
      <FeatureSection
        title="How the Semantic Engine Fits Into Data Spaces"
        imageSrc={imgPath('/images/DS_SE_fit.png')}
        imageAlt="How the Semantic Engine Fits Into Data Spaces"
      >
        <p>
          The Semantic Engine provides{" "}
          <strong>modular, open‑source tools</strong> that support a data space{" "}
          <strong>
            from its initial creation through day‑to‑day operation and future
            expansion
          </strong>
          . Each tool is independent and can be deployed wherever it adds
          value—whether in the early stages of designing a semantic foundation,
          or as part of ongoing data collection and responsible data sharing
          workflows.
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
      <FeatureSection
        title="Why Semantic Engine Tools Fit Naturally into Data Spaces"
        imageSrc={imgPath('/images/DS_SE_fitNaturally.png')}
        imageAlt="Why Semantic Engine Tools Fit Naturally into Data Spaces"
      >
        <p>
          All Semantic Engine components are:
          <ul className="data-spaces-page__core-elements-list">
            <li>
              <strong>Modular</strong> — Adopt only the tools you need.
            </li>
            <li>
              <strong>Open‑source</strong> — Deployable in any research
              environment.
            </li>
            <li>
              <strong>Web-based</strong> — Easy for researchers and
              administrators to use.
            </li>
            <li>
              <strong>Designed for data spaces</strong> — Supporting semantic
              clarity, harmonized collection, validation, and responsible
              sharing.
            </li>
          </ul>
          Whether a data space is just being formed or is already
          well-established, these tools can be integrated to support semantic
          alignment, researcher workflows, and governance practices.
        </p>
      </FeatureSection>
      <PartnerCard
        text={
          <>
            <strong>Take Action</strong>
            <br /> <br />
            If you are developing or participating in a data space and want to
            explore how the Semantic Engine can support your workflows, we
            welcome collaboration.
          </>
        }
        buttonText="Partner with ADC"
        buttonHref="/services"
      />
    </main>
  );
}
