import { Link } from "react-router-dom";
import "./PartnerCard.css";

export interface PartnerCardProps {
  text: React.ReactNode;
  listItems?: string[];
  buttonText: string;
  buttonHref: string;
}

export function PartnerCard({ text, listItems, buttonText, buttonHref }: PartnerCardProps) {
  return (
    <section className="partner-card">
      <div className="partner-card__inner">
        <p className="partner-card__text">{text}</p>
        <ul className="partner-card__list">
          {listItems && listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link to={buttonHref} className="partner-card__button">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
