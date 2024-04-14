/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">
          <FontAwesomeIcon icon={faCopyright} />
          Food App 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
