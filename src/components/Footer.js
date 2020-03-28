import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <a
            href="https://www.facebook.com/groups/masksnoworg"
            className="social-media-icon"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/masksnoworg/"
            className="social-media-icon"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://twitter.com/masksnoworg"
            className="social-media-icon"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <Link to={"/faq"}>FAQ's</Link>
        {" | "}
        <Link to={"/contact"}>Contact</Link>
        {" | "}
        <Link to={"/about-us"}>About Us</Link>
        <p className="external-links">
          External Resources:{" "}
          <a href="https://www.endcoronavirus.org/">endcoronavirus.org</a>
        </p>

        <br />
        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </footer>
    );
  }
};

export default Footer;
