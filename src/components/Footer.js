import React from 'react';
import { Link } from 'gatsby';

import {
  FacebookLinkIcon,
  InstagramLinkIcon,
  TwitterLinkIcon,
} from '../components/StyledElements';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <FacebookLinkIcon />
          <InstagramLinkIcon />
          <TwitterLinkIcon />
        </div>
        <Link to={'/faq'}>FAQ's</Link>
        {' | '}
        <Link to={'/contact'}>Contact</Link>
        {' | '}
        <Link to={'/about-us'}>About Us</Link>
        <p className="external-links">
          External Resources:{' '}
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
