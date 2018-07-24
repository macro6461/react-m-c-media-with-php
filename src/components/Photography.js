import React, { Component } from 'react';
import '../App.css';
import {
  // BrowserRouter as Router,
  // Link,
  // Route,
  // Switch,
  withRouter,
} from 'react-router-dom';
// import $ from 'jquery';
// import { Carousel } from 'react-responsive-carousel';
// import { Item } from 'react-responsive-carousel';

var slideIndex = 1;

var myTimer;

class Photography extends Component {

  componentDidMount = () => {
    clearInterval(myTimer);
    this.showSlides(slideIndex);
    myTimer = setInterval(() => {this.plusSlides(1);}, 4000);
  }

  componentWillUnmount = () => {
    clearInterval(myTimer);
  }



// Next/previous controls
 plusSlides = (n) => {
  clearInterval(myTimer);
  this.showSlides(slideIndex += n);
  if (n === -1){
    myTimer = setInterval(() => {this.plusSlides(n + 2);}, 4000);
  } else {
    myTimer = setInterval(() => {this.plusSlides(n + 1);}, 4000);
  }
}

//Controls the current slide and resets interval if needed
currentSlide = (n) => {
  clearInterval(myTimer);
  this.showSlides(slideIndex = n);
  if (n === -1){
    myTimer = setInterval(() => {this.plusSlides(n + 2);}, 4000);
  } else {
    myTimer = setInterval(() => {this.plusSlides(n + 1);}, 4000);
  }
}

showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


  render() {

    return (
          <div>

            <h1>Photography</h1>

              <h3>The Galapagos Islands, December 2016</h3>

                  <div className="slideshow-container">


                    <div className="mySlides fade">

                      <img  src={require('../images/web-crab-compressed.jpg')} style={{width: 100 + '%'}} alt="sally lightfoot crab"/>
                      <div className="text">Sally Lightfoot Crab</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-fighting-nazcas.jpg')} style={{width: 100 + '%'}} alt="fighting nazca boobies"/>
                      <div className="text">A scuffle between two Nazca Boobies</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-otovalo-waterfall.jpg')} style={{width: 100 + '%'}} alt="otovalo waterfall"/>
                      <div className="text">A waterfall discovered on a hike in Otovalo</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-pelican.jpg')} style={{width: 100 + '%'}} alt="pelican"/>
                      <div className="text">Pelican</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-nazca.jpg')} style={{width: 100 + '%'}} alt="nazca booby"/>
                      <div className="text">A Nazca Booby ignores a fly on it's eye</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-sealion.jpg')} style={{width: 100 + '%'}} alt="sealion pup"/>
                      <div className="text">Sealion Pup</div>
                    </div>


                    <a className="prev" onClick={() => {this.plusSlides(-1)}}>&#10094;</a>
                    <a className="next" onClick={() => {this.plusSlides(1)}}>&#10095;</a>
                  </div>
                  <br/>


                  <div style={{textAlign: 'center'}}>
                    <span className="dot" onClick={() => {this.currenSlide(1)}}></span>
                    <span className="dot" onClick={() => {this.currenSlide(2)}}></span>
                    <span className="dot" onClick={() => {this.currenSlide(3)}}></span>
                    <span className="dot" onClick={() => {this.currenSlide(4)}}></span>
                    <span className="dot" onClick={() => {this.currenSlide(5)}}></span>
                    <span className="dot" onClick={() => {this.currenSlide(6)}}></span>
                  </div>

          </div>

    );
  }
}

export default withRouter(Photography)
