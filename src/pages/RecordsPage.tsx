import { SolutionHero } from "../components/sections/SolutionHero";
import { FeatureSection } from "../components/sections/FeatureSection";
import { imgPath } from "../utils/images";
import "../styles/solution-page-layout.css";

const RECORDS_URL = "https://zealous-mud-0d3297f0f.3.azurestaticapps.net/";

export function RecordsPage() {
  return (
    <div className="solution-page records-page">
      <SolutionHero
        title="Semantic Engine"
        subtitle="Records"
        heading="Describe your work"
        description="Write descriptive metadata following a variety of standards to describe your work"
        theme="records"
      />
      <main className="solution-page__content">
        <div className="solution-page__text">
          <p>
            Write machine-readable metadata records that describe your work
            following many data standards.
          </p>
          <p>
            Describe your projects, datasets, schemas, sample libraries and more
            and integrate the records into existing infrastructure and data
            catalogues.
          </p>
        </div>
        <a
          href={RECORDS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="solution-page__cta"
        >
          Try it out
        </a>
        <div className="solution-page__partner-card solution-page__partner-card--records">
          <span className="solution-page__partner-card-title">
            For Data Spaces
          </span>
          <br /> <br />
          <span className="solution-page__partner-card-text">
            Research groups can create their own metadata templates using the
            Semantic Engine’s Schema tool. These templates guide easy‑to‑use
            forms in the Records tool that help people write accurate,
            standardized, machine‑readable information.
          </span>
          <br />
          <span className="solution-page__partner-card-text">
            Metadata records generated through the Records tool can be
            incorporated into other data space infrastructure such as catalogues
            for improved searching.
          </span>
        </div>
        <FeatureSection
          title="Write clear, machine-readable metadata records"
          imageSrc="/images/records_WriteClearMachineReadableMetadataRecords.png"
          imageAlt="Write clear data documentation interface"
        >
          <p>
            Write structured, standards‑based metadata that accurately describes
            your work.
            <br /> <br />
            The Semantic Engine helps you create records for projects, datasets,
            schemas, sample libraries, and more—ready to integrate with your
            organization’s existing systems and data catalogues.
          </p>
        </FeatureSection>
        <FeatureSection
          title="Create your own record schemas"
          imageSrc={imgPath('/images/records_CreateYourOwnRecordSchemas.png')}
          imageAlt="Create your own record schemas interface"
        >
          <p>
            Use the Semantic Engine’s schema writer to define the structure of
            the metadata you want to collect.
            <br /> <br />
            These schemas are used in the record‑creation tool, making data
            entry consistent, intuitive, and error‑free.
          </p>
        </FeatureSection>
      </main>
    </div>
  );
}
