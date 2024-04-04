import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
function NextArrow({ onClick }: any) {
  return (
    <div
      className="hover:bg-gray-50 cursor-pointer rounded-full p-3 flex justify-center items-center"
      onClick={onClick}
    >
      <ChevronRight size={32} />
    </div>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <div
      className="hover:bg-gray-50 cursor-pointer rounded-full p-3 flex justify-center items-center"
      onClick={onClick}
    >
      <ChevronLeft size={32} />
    </div>
  );
}

export const CustomCarousel = ({ children }: { children: React.ReactNode }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider
        {...settings}
        className="flex justify-center items-center gap-5 z-10"
      >
        {children}
      </Slider>
    </div>
  );
};
