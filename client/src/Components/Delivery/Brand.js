import React from "react";
import Slider from "react-slick";

//Components
import {NextArrow, PrevArrow} from "./CarousalArrow";


const Brand = (props) => {

const logos = [
   "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252640.png?output-format=webp",
  "https://b.zmtcdn.com/data/brand_creatives/logos/868e99c35e35fc2bae1dccc465ed4c82_1625159864.png?output-format=webp",
  "https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505693.png?output-format=webp",
  "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png?output-format=webp",
  "https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505693.png?output-format=webp",
  "https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505693.png?output-format=webp",
  "https://b.zmtcdn.com/data/brand_creatives/logos/644e95f791e52bdfd21b01363f194270_1629450056.png?output-format=webp",
  "https://b.zmtcdn.com/data/brand_creatives/logos/15b49350ecb1bae1e8d23555cc2d491d_1633445370.png?output-format=webp"
];

  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  }


  return (
    <>
     <div className="w-full h-30 px-2 my-2">
     <h1 className="text-3xl font-semibold pb-5">
        Top brands for you
      </h1>
     <Slider {...settings}>

      {logos.map((logo) => (
        <div className="">
          <div className="lg:w-44 md:w-44 lg:h-44 md:h-44 w-24 h-24 bg-white rounded-xl shadow">
            <img
               src={logo}
               alt="Brand"
               className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      ))}

     </Slider>
     </div>
    </>
  );
};


export default Brand;
