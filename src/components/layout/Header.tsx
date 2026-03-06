import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { imgPath } from "../../utils/images";
import "./Header.css";

const SOLUTIONS_ITEMS = [
  { path: "/solutions/schemas", label: "Schemas" },
  { path: "/solutions/agreements", label: "Agreements" },
  { path: "/solutions/records", label: "Records" },
];

const DROPDOWN_CLOSE_DELAY_MS = 200;

export function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const openSolutions = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const closeSolutions = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      closeTimeoutRef.current = null;
    }, DROPDOWN_CLOSE_DELAY_MS);
  };

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="header">
      {/* Removable alert banner - home page only */}
      {location.pathname === "/" && (
        <div className="header__banner">
          <div className="header__banner-inner">
            <p className="header__banner-text">
              Semantic Engine schema users: access our schema writing tool
              directly at{" "}
              <a
                href="https://www.semanticengine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="header__banner-link"
              >
                schemas.semanticengine.org
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Main navigation bar */}
      <div className="header__nav-bar">
        <div className="header__inner">
          <Link to="/" className="header__partner" aria-label="Semantic Engine">
            <img
              src={imgPath("/images/SemanticEngineLogo-800 (2).png")}
              alt="Semantic Engine"
              className="header__logo-img"
            />
          </Link>

          <nav className="header__nav">
            <Link
              to="/"
              className={`header__link ${isActive("/") ? "header__link--active" : ""}`}
            >
              Home
            </Link>

            <Link
              to="/data-spaces"
              className={`header__link ${isActive("/data-spaces") ? "header__link--active" : ""}`}
            >
              Data Spaces
            </Link>

            <div
              className="header__dropdown"
              onMouseEnter={openSolutions}
              onMouseLeave={closeSolutions}
            >
              <button
                type="button"
                className={`header__link header__link--dropdown ${solutionsOpen ? "header__link--active" : ""}`}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Solutions
                <span className="header__dropdown-arrow" aria-hidden>
                  ▼
                </span>
              </button>
              {solutionsOpen && (
                <ul className="header__dropdown-menu" role="menu">
                  {SOLUTIONS_ITEMS.map((item) => (
                    <li key={item.path} role="none">
                      <Link
                        to={item.path}
                        className="header__dropdown-item"
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              to="/services"
              className={`header__link ${isActive("/services") ? "header__link--active" : ""}`}
            >
              Services
            </Link>

            <Link
              to="/about"
              className={`header__link ${isActive("/about") ? "header__link--active" : ""}`}
            >
              About
            </Link>
          </nav>

          <a
            href="https://agrifooddatacanada.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="header__partner"
            aria-label="AGRI-FOOD DATA Canada at the University of Guelph"
          >
            <img
              src={imgPath("/images/FOFR1002_ADC_Logo_Colour_Full (4).png")}
              alt="AGRI-FOOD DATA Canada at the University of Guelph"
              className="header__partner-logo"
            />
          </a>
        </div>
      </div>

      {!location.pathname.startsWith("/solutions") && (
        <div className="header__divider" aria-hidden />
      )}
    </header>
  );
}
