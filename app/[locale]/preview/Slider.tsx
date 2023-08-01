import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full h-[400px]">
      <Slider {...settings}>
        <div className="h-[400px]">
          <img
            src="/assets/heroimg.jpg"
            alt="Photo 1"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-[400px]">
          <img
            src="/assets/heroimg.jpg"
            alt="Photo 2"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-[400px]">
          <img
            src="/assets/heroimg.jpg"
            alt="Photo 3"
            className="object-cover h-full w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
