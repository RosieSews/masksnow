import React from 'react';
import { Link } from 'gatsby';

import {
  FacebookLinkIcon,
  InstagramLinkIcon,
  TwitterLinkIcon,
} from '../components/StyledElements';

import testIds from '../../shared/testIds';

const {
  common: { footer },
} = testIds;

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <FacebookLinkIcon data-testid={footer.social.facebook} />
          <InstagramLinkIcon data-testid={footer.social.instagram} />
          <TwitterLinkIcon data-testid={footer.social.twitter} />
        </div>
        <Link to={'/faq'} data-testid={footer.links.faqs}>
          FAQ's
        </Link>
        {' | '}
        <Link to={'/contact'} data-testid={footer.links.contact}>
          Contact
        </Link>
        {' | '}
        <Link to={'/about-us'} data-testid={footer.links.aboutUs}>
          About Us
        </Link>
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
