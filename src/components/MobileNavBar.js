import React, { Component } from 'react'
import '../App.css';
// import About from './About.js'
// import Photography from './Photography.js'
// import VideoProduction from './VideoProduction.js'
// import DropMenu from './DropMenu.js'
// import SoftwareEngineering from './SoftwareEngineering.js'
// import Contact from './Contact.js'
import MobileNavMenu from './MobileNavMenu.js'
import { connect } from 'react-redux'
import { changeDropdown } from '../actions/actions'
import { detectHamburgerClicked } from '../actions/actions'

import {
  withRouter,
  Link,
  Route,
} from 'react-router-dom';
import {browserLocation} from 'browser-location'

class MobileNavBar extends Component {

  // componentDidMount = () => {
  //   document.getElementsByClassName("mobile-nav-hamburger")[0].addEventListener("click", this.handleHamburgerClick)
  // }

  handleHamburgerClick = () => {

    if (document.getElementsByClassName("mobile-nav-menu")[0].style.display === "" || document.getElementsByClassName("mobile-nav-menu")[0].style.display === "none" ){
      document.getElementsByClassName("mobile-nav-menu")[0].style.display = "block"
    } else {
      document.getElementsByClassName("mobile-nav-menu")[0].style.display = "none"
    }
  }

  render() {

    return (
      <div>
      <div className="mobile-nav-div">
      <div className="mobile-nav-bar">
        <img className="mobile-nav-hamburger" src={require('../images/MCMedia-Hamburger.png')} alt="hamburger" onClick={this.handleHamburgerClick}/>
        <Link to="/" style={{marginRight: 20 + "px"}}><img className="mobile-nav-logo" src={require('../images/MCLogo.png')} alt="mc-mobile-logo"/></Link>
        <Link to="/contact"><img className="mail-mobile" src={require('../images/mobile-mail-v1.png')} alt="Footer Mail"/></Link>

      </div>
          </div>
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    hamburgerClicked: state.dropdownReducer.hamburgerClicked,
    hovered: state.dropdownReducer.hovered
  }
}


export default withRouter(connect(mapStateToProps, { changeDropdown, detectHamburgerClicked })(MobileNavBar))
