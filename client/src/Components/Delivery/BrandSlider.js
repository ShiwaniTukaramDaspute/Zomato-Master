import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandCard = (props) => {
  return (
    <>
    <div className="w-full h-30 px-2">
    <img
      className="w-full h-full rounded-xl"
      src={props.src}
      alt="Brand Image"
     />
    </div>
    </>
  );
};

const BrandCardSlider = () => {
  const BrandImage = [
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
    slidesToShow: 4,
    slidesToScroll: 4,
    InitialSlide: 0
  }

  return (
    <>
    <Slider {...settings}>
    {BrandImage.map((image) => (
      <BrandCard src={image} />
    ))}
    </Slider>
    </>
  )
}

export default BrandCardSlider;
