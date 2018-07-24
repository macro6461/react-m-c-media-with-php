import React, { Component } from 'react'
import '../App.css';
import About from './About.js'
import Photography from './Photography.js'
import VideoProduction from './VideoProduction.js'
// import DropMenu from './DropMenu.js'
import SoftwareEngineering from './SoftwareEngineering.js'
import Contact from './Contact.js'
// import { connect } from 'react-redux'
// import { changeDropdown } from '../actions/actions'

import {
  withRouter,
  Link,
  Route,
} from 'react-router-dom';
// import {browserLocation} from 'browser-location'

var navBar;
var navTop;
// var dropMenu;
// var setTimeoutVar;

class Nav extends Component {

  state ={
      styles: {
        bottom: 0,
        left: 0,
      },
        hovered: false
    }

    componentDidMount(){

      var changeStyle = this.changeStyle
      if (window.innerWidth >= 1020){
        setTimeout(function(){
          navBar = document.getElementById("nav-bar")
          navTop = navBar.getBoundingClientRect().top
          changeStyle()
        }, 1000)
        window.addEventListener("scroll", this.stickyNav)
      }
    }

    changeStyle = () =>{
      var drop = document.getElementById("media")
      if (drop){
        var bottom = drop.getBoundingClientRect().bottom
        var left = drop.getBoundingClientRect().left
          this.setState({
            styles: {
              bottom: bottom,
              left: left
            }
          })
      }
    }

    stickyNav = () => {
      setTimeout(function(){
        var ypos = window.pageYOffset
          if (ypos >= navTop){
            navBar.classList.remove("normal")
            navBar.classList.add("sticky")
            navBar.parentElement.nextElementSibling.style.marginTop = "5.5%"
            // if (document.getElementById("drop-menu")){
            //   var drop = document.getElementById("drop-menu")
            //   drop.style.position = "fixed"
            //   drop.style.right = "25%"
            //
            //   drop.style.top = `${navBar.getBoundingClientRect().bottom}px`
            // }
          } else {
            if (navBar){
              navBar.classList.remove("sticky")
              navBar.classList.add("normal")
              navBar.parentElement.nextElementSibling.style.marginTop = "auto"
              // if (document.getElementById("drop-menu")){
              //   var drop = document.getElementById("drop-menu")
              //   drop.style.position = "absolute"
              //   drop.style.right = "25%"
              //   drop.style.top = "100%"
              // }
            }

        }
      }, 100)
      this.changeStyle()
    }

  mouseEnter = () => {
    var dropMenu = document.getElementById("drop-menu")
      dropMenu.classList.value = ""
      dropMenu.classList.add("show")
    this.stickyNav()
  }

  checkMouseLeave = (e) => {
    debugger
      var drop = document.getElementById("drop-menu")
      if (e.pageX < drop.getBoundingClientRect().left) {
        this.removeDropClass()
      } else if (e.pageY < drop.getBoundingClientRect().top){
        this.removeDropClass()
      } else if (e.pageX > drop.getBoundingClientRect().right){
        this.removeDropClass()
      } else if (e.pageY > drop.getBoundingClientRect().bottom){
        this.removeDropClass()
      }
    }

  // mouseLeave = () => {
  //   this.removeDropClass()
  //   // var changeState = this.changeState
  //   // var hovered = this.state.hovered
  //   setTimeout(function(){
  //     document.getElementById("drop-menu").classList.remove("reverse")
  //   }, 1000)
  // }

  changeState = () => {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  removeDropClass = () =>{
    setTimeout(function(){
      if (document.getElementById("drop-menu")){
        document.getElementById("drop-menu").classList = ""
        document.getElementById("drop-menu").classList.add("reverse")
      }
    }, 300)

  }

  render() {

    return (
      <div>
      <div className="navDiv">
      <div id="nav-bar">
        <ul className="navbar-ul">

        <Link className="link" to="/" style={{marginLeft: 8 + '%'}} ><li className="nav-link">About</li></Link>
          <Link className="link" to="/software-engineering"><li className="nav-link">Software Engineering</li></Link>
          <div id="media" className="link" to="#" onMouseEnter={this.mouseEnter} onMouseLeave={this.checkMouseLeave} style={{position: 'relative'}}><li className="nav-link">Multimedia</li>
            <ul id="drop-menu">
               <Link className="drop-link" to="/photography"><li>Photography</li></Link>
               <Link className="drop-link" to="/video-production"><li>Video Production</li></Link>
            </ul>
        </div>
          <Link className="link" to="/contact" ><li className="nav-link">Contact</li></Link>
        </ul>

        </div>

        </div>
          <Route exact path="/" component={About} />
          <Route exact path="/software-engineering" component={SoftwareEngineering} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/photography" component={Photography} />
          <Route exact path="/video-production" component={VideoProduction} />

        </div>

    );
  }
}


export default withRouter(Nav)
