import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import { FEATURE_CARDS } from "../components/sections/HeroSection";
import { imgPath } from "../utils/images";

export function HomePage() {
  return (
    <main className="home-page">
      <HeroSection
        title="The Semantic Engine"
        subtitle="Modular tools that add meaning to data and grow your research Data Space"
        cards={FEATURE_CARDS}
      />

      <FeatureSection
        title="Write clear data documentation"
        imageSrc={imgPath('/images/home_1.png')}
        imageAlt="Data documentation interface"
      >
        <p>
          Schemas work together with a dataset and describe data features such
          as column names, units, and descriptions etc.
        </p>
        <p>
          Using the schema tool of the Semantic Engine you can write human- and
          machine-readable schemas.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Build data sharing agreements"
        imageSrc={imgPath('/images/home_2.png')}
        imageAlt="Data sharing agreement form"
      >
        <p>
          Running your own instance of the Data Request Tracker lets you manage
          requests for your restricted data with customized questionnaires.
        </p>
        <p>
          Use the answers to fill in your customized data agreement templates.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Write descriptive metadata"
        imageSrc={imgPath('/images/home_3.png')}
        imageAlt="Metadata entry form"
      >
        <p>
          Describe your dataset, your research project, your sample library and
          more.
        </p>
        <p>
          Generate a metadata record in a machine-readable format by filling out
          forms.
        </p>
        <p>
          Customize the metadata records you generate when you run your own
          instance of our tool.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Collect verified data"
        imageSrc="/images/home4.png"
        imageAlt="Data verification interface"
      >
        <p>
          Customize the Semantic Engine tools to send verified data into your
          ETL pipelines.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Standardize data collection"
        imageSrc={imgPath('/images/home_5.png')}
        imageAlt="Standardized data collection"
      >
        <p>
          Generate standardized data entry sheets in Excel with your schema
          documentation directly included.
        </p>
        <p>
          Data collectors can reference the data documentation right in the
          Excel file.
        </p>
      </FeatureSection>
    </main>
  );
}
