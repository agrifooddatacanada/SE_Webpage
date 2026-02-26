import { SolutionHero } from "../components/sections/SolutionHero";
import { imgPath } from "../utils/images";
import "../styles/solution-page-layout.css";
import "./AgreementsPage.css";

const DRT_DEMO_URL = "https://climatesmartagcollab.github.io/drt-ad/";

export function AgreementsPage() {
  return (
    <div className="solution-page agreements-page">
      <SolutionHero
        title="Semantic Engine"
        subtitle="Agreements"
        heading="Helping share your work"
        description="Describe in custom terms how you want to make your work available."
        logoSrc="/images/drt-logo.png"
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
          href={DRT_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="solution-page__cta solution-page__cta--agreements"
        >
          Try it out
        </a>
        <img
          src={imgPath('/images/agreement_drt.png')}
          alt="DRT screenshot"
          className="agreements-page__screenshot"
        />
      </main>
    </div>
  );
}
