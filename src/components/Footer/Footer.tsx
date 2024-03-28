import "components/Footer/footer.scss";
import { phones, emails, socials } from "enums";
import { ReactComponent as MailIcon } from "assets/icons/mail.svg";
import { ReactComponent as TelegramIcon } from "assets/icons/telegram.svg";

export const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="footer__first-part">
      <ul className="footer__phones">
        {phones.map(({ country, number }) => (
          <li key={number} className="footer__phone">
            <div className="footer__phone-box">
              <p className="footer__phone-country">{country.toUpperCase()}</p>
              <a href="tel:+38 089 420 02 28" className="footer__phone-link">
                {number}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <ul className="footer__extra-contacts">
        <li className="footer__extra-contact">
          <div className="footer__extra-contact--email">
            <MailIcon className="footer__mail-icon" />
            <a href={`mailto:${emails.footer}`} className="extra-contact-link">
              {emails.footer}
            </a>
          </div>
        </li>
        <li className="footer__extra-contact">
          <div className="footer__extra-contact--telegram">
            <TelegramIcon className="footer__telgram-icon" />
            <a
              href={socials.find(({ name }) => name === "telegram")?.link}
              className="extra-contact-link"
            >
              {socials
                .find(({ name }) => name === "telegram")
                ?.name.toUpperCase()}
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div className="footer__second-part">
      <a href="./" className="footer__contract">Дистанционный договор</a>
      <a href="./" className="footer__contracts">
        Архив дистанционных договоров до 2022 года
      </a>
      <p className="footer__privacy">
        © 2022 ALEX YANOVSKY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
      </p>
    </div>
  </footer>
);
