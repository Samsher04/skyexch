import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import bnr from "../../assets/images/banner.jpg"


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  
  

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide">
          <img
            src={bnr}
            alt="Slide 1"
            className="slide-image"
          />
        </div>

        {/* Slide 2 */}
        <div className="slide">
          <img
            src={bnr}
            alt="Slide 2"
            className="slide-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
