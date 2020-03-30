import React from "react";
import { Link } from "gatsby";

import {SocialMediaIcon} from '../components/StyledElements';
import TwitterIcon from '../img/Twitter.png'
import FacebookIcon from '../img/Facebook.png'
import InstagramIcon from '../img/Instagram.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <SocialMediaIcon href="https://www.facebook.com/groups/masksnoworg" target="_blank">
            <img src={FacebookIcon} alt="Facebook" />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com/masksnoworg/" target="_blank">
            <img src={InstagramIcon} alt="Instagram" />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com/masksnoworg" target="_blank">
            <img src={TwitterIcon} alt="Twitter" />
          </SocialMediaIcon>
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
