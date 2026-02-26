import { SolutionHero } from "../components/sections/SolutionHero";
import { FeatureSection } from "../components/sections/FeatureSection";
import { imgPath } from "../utils/images";
import "../styles/solution-page-layout.css";

const SE_SCHEMAS_URL = "https://www.semanticengine.org/";

export function SchemasPage() {
  return (
    <div className="solution-page records-page">
      <SolutionHero
        title="Semantic Engine"
        subtitle="Schemas"
        heading="Schemas add value to data"
        description="Make your data more valuable with a data schema."
        theme="schemas"
      />
      <main className="solution-page records-page">
        <div className="solution-page__text">
          <p>
            Schemas work together with a dataset and describe data features such
            as column names, units, and descriptions etc.
          </p>
          <p>
            Using the tools of the Semantic Engine you can write human- and
            machine-readable schemas and put them to use.
          </p>
        </div>
        <a
          href={SE_SCHEMAS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="solution-page__cta"
        >
          Try it out
        </a>
        <div className="solution-page__partner-card solution-page__partner-card--schemas">
          <span className="solution-page__partner-card-title">
            For Data Spaces
          </span>
          <br /> <br />
          <span className="solution-page__partner-card-text">
            Research data spaces, laboratories, departments and projects can
            customize and deploy our OCA Composer – the tool that runs all the
            schema-related tools of the Semantic Engine.
          </span>
        </div>
        <FeatureSection
          title="Write clear data documentation"
          imageSrc="/images/schemas_WriteClearDataDocumentation.png"
          imageAlt="Write clear data documentation interface"
        >
          <p>
            Using the schema tool of the Semantic Engine you can write human-
            and machine-readable schemas which describe your data.
            <br /> <br />
            Instructions, forms and help pages guide users through writing
            schemas which are exported into a machine-readable JSON format.
            <br /> <br />
            Reload your saved JSON schema into the schema tool to edit and
            upgrade your data description.
          </p>
        </FeatureSection>
        <FeatureSection
          title="Verify data"
          imageSrc={imgPath('/images/schemas_VerifyData.png')}
          imageAlt="Verify data interface"
        >
          <p>
            Load a schema into the Data Verification tool of the Semantic Engine
            to verify inputted or loaded data. Correct data right in the
            interface and then download the final data.
            <br /> <br />
            Data column names can be harmonized to the schema standard or kept
            in the original format.
            <br /> <br />
            You can also deploy the verification tool as a way to ingest data
            into existing ETL pipelines and harmonize and clean data input.
          </p>
        </FeatureSection>
        <FeatureSection
          title="Standardize data collection"
          imageSrc={imgPath('/images/schemas_StandardizeDataCollection.png')}
          imageAlt="Standardize data collection interface"
        >
          <p>
            From a loaded schema in the schemas tool you can generate Excel
            sheets prepared for data entry.
            <br /> <br />
            The Excel workbook is prepared already with the documentation
            collected from the schema description and includes a data sheet
            ready for input with columns correctly names and lists
            pre-generated.
          </p>
        </FeatureSection>
        <FeatureSection
          title="Archival schema documentation"
          imageSrc={imgPath('/images/schemas_ArchivalSchemaDocumentation.png')}
          imageAlt="Archival schema documentation interface"
        >
          <p>
            Export a version of your schema in an archival human-readable text
            format, suitable for deposition in existing research data
            repositories.
          </p>
        </FeatureSection>
      </main>
    </div>
  );
}
