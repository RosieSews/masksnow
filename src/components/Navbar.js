import React from "react";
import { Link } from "gatsby";
import headerBackground from "../img/header-bg.png";
import logoImg from "../img/header-rosie.png";
import logoImgMobile from "../img/header-mobile.png";
import maskNowImg from "../img/header-masksnow.png";

const HamburgerLine = () => {
  return <span />
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState((prevState) => {
      let active = !prevState.active;
      return {
        active,
        navBarActiveClass: active ? 'is-active' : '',
      }
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div
            className="header"
            style={{
              backgroundImage: "url(" + headerBackground + ")",
              backgroundSize: "contain",
              backgroundRepeat: "repeat-x"
            }}
          >
            <img src={logoImgMobile} alt="blah" className="header-logo-banner" />
            <img src={logoImg} className="header-logo" alt="We can do it!" />
            <div className="header-container">
              <div className="header-top">
                {/* Hamburger menu */}
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <HamburgerLine />
                  <HamburgerLine />
                  <HamburgerLine />
                </div>{" "}
                {/* Navbar-burger */}
                <div
                    id="navMenu"
                    className={`navbar-menu ${this.state.navBarActiveClass}`}
                >
                  <div className="navbar-start has-text-centered">
                    <Link className="navbar-item" to="/about-us">
                      About Us
                    </Link>
                    <Link className="navbar-item" to="/faq">
                      FAQs
                    </Link>
                    <Link className="navbar-item" to="/psa">
                      PSAs
                    </Link>
                    <Link className="navbar-item" to="/request-supplies">
                      Request Supplies
                    </Link>
                    <Link className="navbar-item" to="/patterns">
                      Patterns
                    </Link>
                    <Link className="navbar-item" to="/volunteer">
                      Volunteer
                    </Link>
                    <Link className="navbar-item" to="/contact">
                      Contact Us
                    </Link>
                  </div>{" "}
                  {/* Navbar-start */}
                </div>{" "}

                {/* navMenu */}
              </div>{" "}
              {/* Container */}
              <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
                <img
                  src={maskNowImg}
                  alt="masks now banner"
                  class="header-banner"
                  style={{ maxHeight: "228px", width: "100%" }}
                />
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
  }
};

export default Navbar;
