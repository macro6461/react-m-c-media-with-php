import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux'
// import { waitForImgLoad } from './actions/actions'


class About extends Component {
  render() {

    return (
      (this.props.img_loaded === false
        ? null
        : <div>
            <h1>About</h1>
            <div className="about">
              <img src={require('../images/profile-pic.png')}/>
              <div>
                <p>
                  I am a software engineer, a problem-solver, with a passion for travel and multimedia production. I pride myself on efficiency and effectivenes. Currently a Web Developer and the IT Director for Bohemia Realty Group, I am constantly refining and expanding my skillset. I am a self starter who can thrive in both individual and collaborative/team based working environments.
                </p>
                <p>
                  Matthew Croak Media is not so much as a brand as it is an exposition. I am an ambitious full stack developer with proficiency in executive informatiomn technology and multimedia. This site is my portfolio.
                </p>
              </div>

            </div>
            <p >Please see my <a className="media-anchor" href="https://www.linkedin.com/in/matthew-croak-18467483?trk=nav_responsive_tab_profile">LinkedIn profile</a> for a more extensive professional profile.</p>
            <p id="web-inquiry-p">☞ For full stack and multimedia inqueries, please leave a message on the <Link to="/contact">Contact</Link> page!</p>
          </div>
      )
    );
  }
}

const mapStateToProps = (state) => {

    return {
      imgLoaded: state.dropdownReducer.img_loaded,
      hovered: state.dropdownReducer.hovered
    }

}


export default withRouter(connect(mapStateToProps)(About))
