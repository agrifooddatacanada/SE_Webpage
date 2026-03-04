import { SolutionHero } from "../components/sections/SolutionHero";
import { FeatureSection } from "../components/sections/FeatureSection";
import { imgPath } from "../utils/images";
import "../styles/solution-page-layout.css";
import "./AgreementsPage.css";

const DRT_DEMO_URL =
  "https://github.com/ClimateSmartAgCollab/DRT_Design_Document/blob/main/README.md";

const DRT_MAIN_PAGE_URL = "https://agreements.semanticengine.org/";

export function AgreementsPage() {
  return (
    <div className="solution-page agreements-page">
      <SolutionHero
        title="Semantic Engine"
        subtitle="Agreements"
        heading="Helping share your work"
        description="Describe in custom terms how you want to make your work available."
        logoSrc={imgPath("/images/drt-logo.png")}
        theme="agreements"
      />
      <main className="solution-page__content">
        <div className="solution-page__text">
          <p>
            <span className="agreements-page__highlight">Open data</span> is an
            ideal way for research data to be made available. In support of open
            data there are numerous license agreements such as the Creative
            Commons set of licenses.
          </p>
          <p>
            <span className="agreements-page__highlight">
              Not all data is suitable to be open,
            </span>{" "}
            it may contain personally identifiable information, sensitive data,
            indigenous data, commercial data, or may still be in an active phase
            of research and not yet published. These types of data can be only
            made available with more restrictive and custom agreements.
          </p>
          <p>
            The{" "}
            <span className="agreements-page__highlight">
              {" "}
              Data Request Tracker (DRT)
            </span>
            is a web-based tool to help data controllers use custom data
            agreements and answer data requests.
          </p>
        </div>
        <a
          href={DRT_MAIN_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="solution-page__cta solution-page__cta--agreements"
        >
          Try it out
        </a>

        <div className="solution-page__partner-card solution-page__partner-card--agreements">
          <span className="solution-page__partner-card-title">
            For Data Spaces
          </span>
          <a
            href={DRT_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="solution-page__partner-card-link"
          >
            Run your own DRT
          </a>
          <span className="solution-page__partner-card-text">
            For research groups, large-scale projects, or research Data Spaces,
            deploy our Data Request Tracker (DRT) to customize questions and
            manage ongoing communication with data requestors. The DRT enables
            you to generate custom data agreements – both human- and
            machine-readable – based on the responses you collect.
          </span>
        </div>
        <FeatureSection
          title="Custom Questionnaires"
          imageSrc={imgPath("images/agreements_CustomQuestionnaires.png")}
          imageAlt="Custom Questionnaires interface"
        >
          <p>
            Streamline how you gather the information needed to decide{" "}
            <strong> if, when, and how</strong> research data should be shared.
            With the DRT, you can build custom questionnaires that ask exactly
            the right questions to guide your data‑sharing decisions.
            <br />
            The tool is especially valuable for assessing requests involving
            <strong> sensitive data</strong> that cannot be placed in standard
            repositories, or for requests of{" "}
            <strong>active research data</strong> that isn’t yet ready for broad
            release but may be appropriate to share with close or potential
            collaborators.
            <br />
            Beyond data requests, the DRT also supports managing{" "}
            <strong>resource requests</strong>—such as sample library access—and
            other controlled research assets.
          </p>
        </FeatureSection>
        <FeatureSection
          title="Fill Templates"
          imageSrc={imgPath("images/agreements_FillTemplates.png")}
          imageAlt="Fill Templates interface"
        >
          <p>
            The DRT questionnaires not only help you collect the information
            needed to make data or resource‑sharing decisions—they also allow
            you to automatically insert those responses into custom‑generated
            templates.
            <br />
            These templates can serve as draft data sharing agreements, enabling
            you to pre‑fill and standardize key details before engaging your
            research agreement specialists to finalize the terms.
            <br />
            You can also use the DRT to record high‑level agreement terms within
            broader collaborations, creating a consistent, centralized record
            instead of piecing together information from old email threads.
            <br />
            Templates can take many forms, from agreement drafts to
            machine‑readable JSON files or SQL queries. Once a draft is
            generated in the DRT, you can easily export it and integrate it into
            your existing workflows, saving time and reducing manual formatting
            work.
          </p>
        </FeatureSection>

        <section className="agreements-page__partners">
          <p className="agreements-page__partners-subheading">Our Partners</p>
          <div className="agreements-page__partners-grid">
            <div className="agreements-page__partner-box">
              Agri-Food Data Canada
            </div>
            <div className="agreements-page__partner-box">Université Laval</div>
            <div className="agreements-page__partner-box">
              Simon Fraser University
            </div>
            <div className="agreements-page__partner-box">CS-DCC</div>
          </div>
        </section>
      </main>
    </div>
  );
}
