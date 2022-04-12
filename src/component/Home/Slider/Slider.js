import React from "react";

// ==== Dependencies ====
import Slider from "react-slick";

// ==== Styles ====

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'



// ==== Import ====

import img1 from '../../../assets/img/chimie_fine.jpg';
import img2 from '../../../assets/img/electronique.jpeg';
import img3 from '../../../assets/img/photovoltaique.jpeg';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autplayspeed: 4000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  
  return (
    <Slider {...settings} className='homeSlider'>
      <div className="sliderImg">
        <img src={img1} alt="product 1"/>
      </div>
      <div className="sliderImg">
        <img src={img2} alt="product 2"/>
      </div>
      <div className="sliderImg">
        <img src={img3} alt="product 3"/>
      </div>
    </Slider>
  );
}