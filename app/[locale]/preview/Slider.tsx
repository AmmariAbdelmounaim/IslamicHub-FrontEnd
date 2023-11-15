"use client";
import React, { RefObject, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import DirectionButton from "../../../components/button/DirectionButton";

function SliderImage() {
  const sliderRef: RefObject<Slider> = React.useRef(null);

  const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div
        className="z-50 right-0 flex items-center justify-end cursor-pointer"
        onClick={onClick}
      >
        <DirectionButton left={false} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div
        className="z-50 left-0 flex items-center cursor-pointer"
        onClick={onClick}
      >
        <DirectionButton left />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full min-h-[800px] relative">
      <Slider
        ref={sliderRef}
        className="z-30 w-full h-[800px] overflow-hidden"
        {...settings}
      >
        <div>
          <Image
            src="/assets/heroimg.jpg"
            alt="Photo 1"
            className="w-full h-full object-cover"
            width={10000}
            height={8000}
          />
        </div>
        <div>
          <Image
            src="/assets/heroimg2.png"
            alt="Photo 1"
            className="w-full h-full object-cover"
            width={10000}
            height={8000}
          />
        </div>
      </Slider>
      <div className="h-full w-full absolute top-0 left-0 right-0 z-40 flex p-[100px] items-center justify-between">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
}

export default SliderImage;
