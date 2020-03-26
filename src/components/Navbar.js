import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/masksnow.svg'

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
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="The Masks Now Coalition">
              <img src={logo} alt="The Masks Now Coalition" />
            </Link>
            {/* Hamburger menu */}
            <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target="navMenu" onClick={() => this.toggleHamburger()}>
            </div> {/* Navbar-burger */}
          </div> {/* Navbar-brand */}
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
      </nav>
      <div className="level">
        <a href="">
          <button className="level-item">
            Volunteer Here
          </button>
        </a>
        <a href="">
          <button className="level-item">
            Request Supplies
          </button>
        </a>
      </div> {/* level */}
    )
  }
}

export default Navbar
