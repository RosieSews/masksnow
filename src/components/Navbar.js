import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import headerBackground from '../img/header-bg.png';
import maskNowImg from '../img/header-masksnow.png';
import { NavLink } from '../components/StyledElements/NavItem';
import DropdownNavItem from '../components/StyledElements/DropdownNavItem';

const HamburgerLine = () => {
  return <span />;
};

const HeaderBorder = styled.div`
  height: 20px;
  background-color: #16356f;
`;
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

  const onEnterKey = fn => {
    return e => {
      if (e.key === 'Enter') {
        fn();
      }
    };
  };

  const navbar = (
    <div className="navbar-start has-text-centered">
      <NavLink to="/volunteer" activeClassName={'active'}>
        Volunteer
      </NavLink>
      <DropdownNavItem
        title="Resources"
        links={[
          { text: 'Patterns', path: '/patterns' },
          { text: 'State', path: '/' }, //TBD ?
          { text: 'Knowledgebase', path: '/' }, //TBD ?
        ]}
      />
      <NavLink to="/faq" activeClassName={'active'}>
        FAQs
      </NavLink>
      <DropdownNavItem
        title="Media"
        links={[
          { text: 'PSAs', path: '/psa' },
          { text: 'In the News', path: '/' }, //TBD ?
          { text: 'Blog', path: '/' }, //TBD ?
        ]}
      />
    </div>
  );
  return (
    <div>
      <div className={`mobile-navbar navbar-menu ${navBarActiveClass}`}>
        {navbar}
        <div
          className="mobile-backdrop"
          role="button"
          tabIndex={0}
          onKeyPress={onEnterKey(toggleHamburger)}
          onClick={toggleHamburger}
        />
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
                role="button"
                tabIndex={0}
                onKeyPress={onEnterKey(toggleHamburger)}
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
      <HeaderBorder />
    </div>
  );
};

export default Navbar;
