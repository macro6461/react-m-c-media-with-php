import React, { Component } from 'react';
import Nav from './components/Nav.js'
import MobileNavBar from './components/MobileNavBar.js'
import Footer from './components/Footer.js'
import './App.css';
// import About from './components/About.js'
// import Photography from './components/Photography.js'
// import VideoProduction from './components/VideoProduction.js'
// import DropMenu from './components/DropMenu.js'
// import SoftwareEngineering from './components/SoftwareEngineering.js'
// import Contact from './components/Contact.js'
import { connect } from 'react-redux'

import {
  withRouter,
  // Link,
  // Route,
} from 'react-router-dom';
import {detectScreenChange} from './actions/actions'
import $ from 'jquery'
// import MobileFooter from './components/MobileFooter.js'
import MobileNavMenu from './components/MobileNavMenu.js'
import { detectHamburgerClicked } from './actions/actions'


// import { waitForImgLoad } from './actions/actions'

class App extends Component {

  componentDidMount = () => {
    window.onbeforeunload = function(){ window.scrollTo(0,0); }
    window.addEventListener("load", this.checkResize)
    window.addEventListener("resize", this.checkResize)
    if (window.innerWidth >= 1020){
      setTimeout(function(){
        document.getElementById("resume-download").style.display = "block"
      }, 3000)
    }
  }

  detectHamburgerClick = () =>{

  }

  checkResize = () => {
    this.props.detectScreenChange("")
  }

  render() {

    return (
      <div className="App">
      <img className="BannerImg" src={require('./images/BWParkBanner.jpg')} alt="BannerImg"/>

          <div><Nav /><Footer /></div>
          <a id="resume-download" href={require('./docs/Matthew_Croak_Tech_Resume.pdf')} download>Resume<br/><img id="resume-icon" src={require('./images/resume-icon.png')} alt="resume-icon"/> </a>
          <div><MobileNavBar /></div>


          <MobileNavMenu/>



      </div>
    );
  }
}


const mapStateToProps = (state) => {

  return {

    demos: state.demosReducer.demos
  }
}


export default withRouter(connect(mapStateToProps, {detectScreenChange, detectHamburgerClicked})(App))
