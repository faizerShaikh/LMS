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

export const CustomCarousel = ({
  children,
  dots,
  slidesToShow,
  autoplay,
}: {
  children: React.ReactNode;
  dots?: boolean;
  slidesToShow?: number;
  autoplay?: boolean;
}) => {
  const settings = {
    dots: dots || false,
    infinite: true,
    slidesToShow: slidesToShow || 3,
    slidesToScroll: 1,
    autoplay: autoplay || true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  console.log("settingssettingssettings", settings);
  return (
    <div className="slider-container">
      <Slider
        {...settings}
        className="flex justify-center items-center desktop:gap-5 laptop:gap-5 gap-0 z-10"
      >
        {children}
      </Slider>
    </div>
  );
};
