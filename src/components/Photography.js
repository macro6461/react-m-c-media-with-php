import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import $ from 'jquery';
import { Carousel } from 'react-responsive-carousel';
import { Item } from 'react-responsive-carousel';

var slideIndex = 1;

var myTimer;

class Photography extends Component {

  componentDidMount = () => {
    this.showSlides(slideIndex);
    myTimer = setInterval(() => {this.plusSlides(1);}, 4000);
  }



// Next/previous controls
 plusSlides = (n) => {
  clearInterval(myTimer);
  this.showSlides(slideIndex += n);
  if (n = -1){
    myTimer = setInterval(() => {this.plusSlides(n + 2);}, 4000);
  } else {
    myTimer = setInterval(() => {this.plusSlides(n + 1);}, 4000);
  }
}

// Thumbnail image controls
currentSlide = (n) => {
  clearInterval(myTimer);
  this.showSlides(slideIndex = n);
  if (n = -1){
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

                      <img  src={require('../images/web-crab-compressed.jpg')} style={{width: 100 + '%'}}/>
                      <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-fighting-nazcas.jpg')} style={{width: 100 + '%'}}/>
                      <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-otovalo-waterfall.jpg')} style={{width: 100 + '%'}}/>
                      <div className="text">Caption Three</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-pelican.jpg')} style={{width: 100 + '%'}}/>
                      <div className="text">Caption Three</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-nazca.jpg')} style={{width: 100 + '%'}}/>
                      <div className="text">Caption Three</div>
                    </div>

                    <div className="mySlides fade">

                      <img  src={require('../images/web-sealion.jpg')} style={{width: 100 + '%'}}/>
                      <div className="text">Caption Three</div>
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
