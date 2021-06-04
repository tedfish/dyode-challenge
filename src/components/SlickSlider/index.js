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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={Slide1} alt="Slide1" />
        </div>
        <div>
        <img src={Slide2} alt="Slide2" />
        </div>
        <div>
        <img src={Slide3} alt="Slide3" />
        </div>
      </Slider>
    );
  }
}