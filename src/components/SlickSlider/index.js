import React from 'react'
import Slider from "react-slick";
import './slick.css';
import Slide1 from './slide1.png';
import Slide2 from './slide2.png';
import Slide3 from './slide3.png';
export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="sliderHero" style={{ backgroundImage: "url(" + Slide1 + ")" }}>
            <div className="inner">
              <h2>Shop New Arrivals</h2>
              <p>Our coolest new items are waiting for you!</p>
              <div class="cta">
                <a href="/shop" class="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sliderHero" style={{ backgroundImage: "url(" + Slide2 + ")" }}>
            <div className="inner white">
              <h2>Our Fave Tees</h2>
              <p>Shop all of our favorites.</p>
              <div class="cta">
                <a href="/shop" class="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sliderHero" style={{ backgroundImage: "url(" + Slide3 + ")" }}>
            <div className="inner white">
              <h2>Men's Tees</h2>
              <p>Find the perfect shirt</p>
              <div class="cta">
                <a href="/shop" class="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}