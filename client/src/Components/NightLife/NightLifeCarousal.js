import React from "react";
import Slider from "react-slick";

//Componenets
import PictureCarousalCard from "../PictureCarousal";
//import {NextArrow, PrevArrow} from "../CarousalArrow";

const NightLifeCarousal = () => {

  const settings = {
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    InitialSlide: 0,
/*
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  */
  };

  return (
    <>

      <div className="w-full">

      <Slider {...settings}>
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
      </Slider>

      </div>
    </>
 );
};

export default NightLifeCarousal;
