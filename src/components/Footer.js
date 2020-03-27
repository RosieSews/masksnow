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
        <p>External Resources</p>
          <a href="https://coronavirusarmy.org/" >
            coronavirusarmy.org
          </a>
            {" | "}
          <a href="https://www.seattlemakers.org/">
            seattlemakers.org
          </a>
            {" | "}
          <a href="https://www.endcoronavirus.org/">
            endcoronavirus.org
          </a>
            {" | "}
          <a href="https://findthemasks.com/">
            findthemasks.com
          </a>
            {" | "}
          <a href="https://donatetohospitals.com/">
            donatetohospitals.com
          </a>
          <br /><br />
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
