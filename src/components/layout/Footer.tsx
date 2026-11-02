import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { imgPath } from '../../utils/images';
import './Footer.css';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__divider" aria-hidden />
      <div className="footer__inner">
        <div className="footer__credits">
          <div className="footer__block">
            <p className="footer__label">{t('footer.poweredBy')}</p>
            <a
              href="https://agrifooddatacanada.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__logo-link"
            >
              <img
                src={imgPath('/images/FOFR1002_ADC_Logo_Colour_Full (4).png')}
                alt="Agri-Food Data Canada at the University of Guelph"
                className="footer__logo-img footer__logo-img--adc"
              />
            </a>
          </div>

          <div className="footer__block">
            <p className="footer__label">{t('footer.supportedBy')}</p>
            <div className="footer__logos">
              <a
                href="https://www.cfref-apogee.gc.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__logo-link"
              >
                <img
                  src={imgPath('/images/canada-first-research-excellence-fund.png')}
                  alt="Canada First Research Excellence Fund"
                  className="footer__logo-img footer__logo-img--cfref"
                />
              </a>
              <a
                href="https://www.genomecanada.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__logo-link"
              >
                <img
                  src={imgPath('/images/genome-canada.jpg')}
                  alt="Genome Canada"
                  className="footer__logo-img footer__logo-img--genome"
                />
              </a>
              <a
                href="https://www.ontario.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__logo-link"
              >
                <img
                  src={imgPath('/images/ontario-logo--desktop.svg')}
                  alt="Government of Ontario"
                  className="footer__logo-img footer__logo-img--ontario"
                />
              </a>
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="footer__brand"
          aria-label="Semantic Engine"
        >
          <img
            src={imgPath('/images/SemanticEngineLogo-800 (2).png')}
            alt="Semantic Engine"
            className="footer__logo-img footer__logo-img--se"
          />
        </Link>
      </div>
    </footer>
  );
}
