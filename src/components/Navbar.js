import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import headerBackground from '../img/header-bg.png';
import maskNowImg from '../img/header-masksnow.png';
import {
  NavLink,
  NavCTA,
  ExternalNavLink,
} from '../components/StyledElements/NavItem';
import {
  MoreDotsMenu,
  DropDownMenu,
} from '../components/StyledElements/MoreDots';

import testIds from '../../shared/testIds';
const {
  common: { navbar },
} = testIds;

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

  const topNavBar = (
    <div className="navbar-start has-text-centered">
      <NavLink
        to="/volunteer"
        data-testid={navbar.volunteer}
        activeClassName={'active'}
      >
        Volunteer
      </NavLink>

      <DropDownMenu title={'Resources'} data-testid={navbar.resources.title}>
        <NavLink
          to="/patterns"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.resources.dropdown.patterns}
        >
          Patterns
        </NavLink>
        <ExternalNavLink
          href="https://thermowebmasksnow.com/"
          wide={true}
          target={'_blank'}
          rel="noopener"
          data-testid={navbar.resources.dropdown.buyInterfacing}
        >
          Buy Interfacing
        </ExternalNavLink>
        <NavLink
          to="/resources"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.resources.dropdown.guides}
        >
          Guides
        </NavLink>
        <NavLink
          to="/groups-directory"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.resources.dropdown.localChapters}
        >
          Local Chapters
        </NavLink>
        <ExternalNavLink
          href="https://rosiesews.freshdesk.com/support/home"
          wide={true}
          target={'_blank'}
          rel="noopener"
          data-testid={navbar.resources.dropdown.knowledgebase}
        >
          Knowledgebase
        </ExternalNavLink>
      </DropDownMenu>
      <DropDownMenu title={'About'} data-testid={navbar.about.title}>
        <NavLink
          to="/about-us"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.about.dropdown.aboutMNC}
        >
          About MNC
        </NavLink>
        <NavLink
          to="/partners"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.about.dropdown.partners}
        >
          Partners
        </NavLink>
        <NavLink
          to="/faq"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.about.dropdown.faqs}
        >
          FAQs
        </NavLink>
      </DropDownMenu>

      <DropDownMenu title={'Press'} data-testid={navbar.press.title}>
        <NavLink
          to="/psa"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.press.dropdown.psas}
        >
          PSAs
        </NavLink>
        <NavLink
          to="/in-the-news"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.press.dropdown.mediaHits}
        >
          Media Hits
        </NavLink>
        <NavLink
          to="/press-releases"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.press.dropdown.pressReleases}
        >
          Press Releases
        </NavLink>
        <ExternalNavLink
          href="https://medium.com/themasksnowcoalition"
          wide={true}
          target={'_blank'}
          rel="noopener"
          data-testid={navbar.press.dropdown.blog}
        >
          Blog
        </ExternalNavLink>
      </DropDownMenu>
      <NavCTA
        to="/donate"
        activeClassName={'active'}
        data-testid={navbar.donate}
      >
        Donate
      </NavCTA>
      <MoreDotsMenu data-testid={navbar.moreDots.title}>
        <NavLink
          to="/contact"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.moreDots.dropdown.contact}
        >
          Contact
        </NavLink>
        <NavLink
          to="/fundraising-goals"
          activeClassName={'active'}
          wide={true}
          data-testid={navbar.moreDots.dropdown.helpUs}
        >
          Help Us{' '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
        </NavLink>
      </MoreDotsMenu>
    </div>
  );
  return (
    <div>
      <div className={`mobile-navbar navbar-menu ${navBarActiveClass}`}>
        {topNavBar}
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
                data-testid={navbar.hamburger}
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
                {topNavBar} {/* Navbar-start */}
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
