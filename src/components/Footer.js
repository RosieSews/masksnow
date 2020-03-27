import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/rosie-logo.png'
import facebook from '../img/Facebook.png'
import instagram from '../img/Instagram.png'
import twitter from '../img/Twitter.png'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <a href="https://www.facebook.com/groups/masksnoworg">
            <img src={facebook} className="social-media-icon" alt="facebook"></img>
          </a>
          <a href="https://www.instagram.com/masksnoworg/">
            <img src={instagram} className="social-media-icon" alt="instagram"></img>
          </a>
          <a href="https://twitter.com/masksnoworg">
            <img src={twitter} className="social-media-icon" alt="twitter"></img>
          </a>
        </div>
          <Link to={'/faq'}>FAQ's</Link>{' | '}
          <Link to={'/contact'}>Contact</Link>{' | '}
          <Link to={'/about-us'}>About Us</Link>
        <p className="external-links">External Resources:{' '}
          <a href="https://www.endcoronavirus.org/">
            endcoronavirus.org
          </a>
        </p>


          <br />
        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </footer>
    )
  }
}

export default Footer
