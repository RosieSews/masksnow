import React from 'react'
import { Link } from 'gatsby'
import headerBackground from "../img/header-bg.png"
import logoImg from "../img/header-rosie.png";
import logoImgMobile from "../img/header-mobile.png";
import maskNowImg from "../img/header-masksnow.png"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="header" style={{backgroundImage: "url(" + headerBackground + ")", backgroundSize: "contain", backgroundRepeat: "repeat-x"}}>
          <img src={logoImgMobile} alt="blah" className="header-logo-banner"></img>
          <img src={logoImg}  className="header-logo" alt="We can do it!"></img>
          <div className="header-container">
            <div className="header-top">
              {/* Hamburger menu */}
              <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target="navMenu" onClick={() => this.toggleHamburger()}>
              </div> {/* Navbar-burger */}
              <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
                <div className="navbar-start has-text-centered">
                  <Link className="navbar-item" to="/request-supplies">
                    Request Supplies
                  </Link>
                  <Link className="navbar-item" to="/patterns">
                    Patterns
                  </Link>
                  <Link className="navbar-item" to="/groups-directory">
                    Groups Directory
                  </Link>
                  <Link className="navbar-item" to="/volunteer">
                    Volunteer
                  </Link>
                </div> {/* Navbar-start */}
              </div> {/* navMenu */}
            </div> {/* Container */}
            <div style={{ display: "flex",alignItems: "center", flex: "1" }}>
              <img src={maskNowImg} alt="Blah" class="header-banner" style={{maxHeight: "228px", width: "100%"}}></img>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
