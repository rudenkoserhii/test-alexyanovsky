// import "components/Footer/footer.scss";
import { phones, emails, socials } from "enums";
import { ReactComponent as MailIcon } from "assets/icons/mail.svg";
import { ReactComponent as TelegramIcon } from "assets/icons/telegram.svg";

export const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="footer__first-part">
      <ul className="footer__phones list">
        {phones.map(({ country, number }) => (
          <li key={number} className="footer__phone">
            <div className="footer__phone-box">
              <p className="footer__phone-country">{country}</p>
              <a
                href="tel:+38 089 420 02 28"
                className="footer__phone-number link"
              >
                {number}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <ul className="footer__extra-contacts list">
        <li className="footer__extra-contact">
          <div className="footer__extra-contact--email">
            <MailIcon className="footer__mail-icon" />
            <a
              href={`mailto:${emails.footer}`}
              className="extra-contact-link link"
            >
              {emails.footer}
            </a>
          </div>
        </li>
        <li className="footer__extra-contact">
          <a
            href={socials.find(({ name }) => name === "telegram")?.link}
            className="footer__extra-contact--telegram link"
          >
            <TelegramIcon className="footer__telgram-icon" />
            <div className="footer__extra-contact-link footer__extra-contact-link--telegram">
              {socials.find(({ name }) => name === "telegram")?.name}
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="footer__second-part">
      <a href="./" className="footer__contract link">
        Дистанционный договор
      </a>
      <a href="./" className="footer__contracts link">
        Архив дистанционных договоров до 2022 года
      </a>
      <p className="footer__privacy">
        © 2022 ALEX YANOVSKY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
      </p>
    </div>
  </footer>
);
