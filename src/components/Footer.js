import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/rosie-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
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
