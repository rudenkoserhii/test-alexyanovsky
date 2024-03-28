import "components/Footer/footer.scss";

export const Footer = (): JSX.Element => (
  <footer>
    <ul className="footer__phones">
      <li className="footer__phone">
        <div className="footer__phone-box">
          <p className="footer__phone-country"></p>
          <a href="" className="footer__phone-link"></a>
        </div>
      </li>
    </ul>
    <span className="button__text">{text}</span>
  </footer>
);
