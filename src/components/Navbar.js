import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import headerBackground from "../img/header-bg.png";

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
      maskNow: file(relativePath: { eq: "header-masksnow.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active);
    active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("");
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
            backgroundImage: "url(" + headerBackground + ")",
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x"
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
              </div>{" "}
              {/* Navbar-burger */}
              <div id="navMenu" className={`navbar-menu`}>
                {navbar} {/* Navbar-start */}
              </div>{" "}
              {/* navMenu */}
            </div>{" "}
            {/* Container */}
            <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
              <Link style={{ maxHeight: "228px", width: "100%" }} to="/">
                <Img
                  alt="masks now banner"
                  className="header-banner"
                  fluid={data.maskNow.childImageSharp.fluid}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="call-to-action">
        <Link to="/volunteer">Volunteer Here</Link>
        <Link to="/request-supplies">Request Supplies</Link>
      </div>
    </div>
  );
};

export default Navbar;
