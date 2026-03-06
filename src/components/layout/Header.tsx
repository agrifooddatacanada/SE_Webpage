import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { imgPath } from "../../utils/images";
import "./Header.css";

const DROPDOWN_CLOSE_DELAY_MS = 200;

export function Header() {
  const { t, i18n } = useTranslation();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith("fr") ? "fr" : "en";
  const solutionsItems = [
    { path: "/solutions/schemas", label: t("nav.schemas") },
    { path: "/solutions/agreements", label: t("nav.agreements") },
    { path: "/solutions/records", label: t("nav.records") },
  ];

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
              {t("header.bannerPrefix")}{" "}
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
              {t("nav.home")}
            </Link>

            <Link
              to="/data-spaces"
              className={`header__link ${isActive("/data-spaces") ? "header__link--active" : ""}`}
            >
              {t("nav.dataSpaces")}
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
                {t("nav.solutions")}
                <span className="header__dropdown-arrow" aria-hidden>
                  ▼
                </span>
              </button>
              {solutionsOpen && (
                <ul className="header__dropdown-menu" role="menu">
                  {solutionsItems.map((item) => (
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
              {t("nav.services")}
            </Link>

            <Link
              to="/about"
              className={`header__link ${isActive("/about") ? "header__link--active" : ""}`}
            >
              {t("nav.about")}
            </Link>
          </nav>

          <div className="header__language-switcher">
            <label htmlFor="header-language-select" className="header__sr-only">
              {t("language.label")}
            </label>
            <select
              id="header-language-select"
              className="header__language-select"
              aria-label={t("language.switcherAriaLabel")}
              value={currentLanguage}
              onChange={(event) => i18n.changeLanguage(event.target.value)}
            >
              <option value="en" lang="en">
                {t("language.english")}
              </option>
              <option value="fr" lang="fr">
                {t("language.french")}
              </option>
            </select>
            <span className="header__dropdown-arrow header__language-arrow" aria-hidden>
              ▼
            </span>
          </div>

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

      <div className="header__divider" aria-hidden />
    </header>
  );
}
