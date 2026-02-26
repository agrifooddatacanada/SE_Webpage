import { Link } from 'react-router-dom';
import { imgPath } from '../../utils/images';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" aria-hidden />
      <div className="footer__inner">
      <Link
            to="/"
            className="footer__partner"
            aria-label="Semantic Engine"
          >
            <img
              src={imgPath('/images/SemanticEngineLogo-800 (2).png')}
              alt="Semantic Engine"
              className="footer__logo-img"
            />
          </Link>
      </div>
      
    </footer>
  );
}
