import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import headerBackground from '../img/header-bg.png';
import maskNowImg from '../img/header-masksnow.png';

const HamburgerLine = () => {
  return <span />;
};

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      rosie: file(relativePath: { eq: "header-rosie.png" }) {
        childImageSharp {
          fixed(height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobile: file(relativePath: { eq: "header-mobile.png" }) {
        childImageSharp {
          fixed(height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const [active, setActive] = useState(false);
  const navBarActiveClass = active ? 'is-active' : '';

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(prevState => !prevState);
  };

  const navbar = (
    <div className="navbar-start has-text-centered">
      <Link className="navbar-item" to="/volunteer">
        Volunteer
      </Link>
      <Link className="navbar-item" to="/patterns">
        Patterns
      </Link>
      <Link className="navbar-item" to="/psa">
        PSAs
      </Link>
      <Link className="navbar-item" to="/faq">
        FAQs
      </Link>
      <Link className="navbar-item" to="/contact">
        Contact Us
      </Link>
      <Link className="navbar-item" to="/about-us">
        About Us
      </Link>
    </div>
  );
  return (
    <div>
      <div className={`mobile-navbar navbar-menu ${navBarActiveClass}`}>
        {navbar}
        <div class="mobile-backdrop" onClick={toggleHamburger}></div>
      </div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div
          className="header"
          style={{
            backgroundImage: 'url(' + headerBackground + ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
          }}
        >
          <Link className="header-logo-banner" to="/">
            <Img
              fixed={data.mobile.childImageSharp.fixed}
              alt="#MasksNOW logo"
              className="header-logo-banner"
            />
          </Link>
          <Link to="/">
            <Img
              fixed={data.rosie.childImageSharp.fixed}
              alt="We can do it!"
              className="header-logo"
            />
          </Link>
          <div className="header-container">
            <div className="header-top">
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${navBarActiveClass}`}
                data-target="navMenu"
                onClick={toggleHamburger}
              >
                <HamburgerLine />
                <HamburgerLine />
                <HamburgerLine />
              </div>{' '}
              {/* Navbar-burger */}
              <div id="navMenu" className={`navbar-menu`}>
                {navbar} {/* Navbar-start */}
              </div>{' '}
              {/* navMenu */}
            </div>{' '}
            {/* Container */}
            <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
              <Link to="/">
                <img
                  src={maskNowImg}
                  alt="masks now banner"
                  className="header-banner"
                  style={{ maxHeight: '228px', width: '100%' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-border">
        &nbsp;
      </div>
    </div>
  );
};

export default Navbar;
