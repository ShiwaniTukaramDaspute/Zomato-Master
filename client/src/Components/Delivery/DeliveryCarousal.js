import React from "react";
import Slider from "react-slick";

//Component
import DeliveryFoodCategory from "./DeliveryFoodCategory";
//import Brand from "./Brand";
import {NextArrow, PrevArrow} from "./CarousalArrow";


const DeliveryCarousal = () => {

  const categories = [{
    image: "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
    title: "Chicken",
  },
  {
    image: "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
    title: "Biryani",
  },
  {
    image: "https://b.zmtcdn.com/data/o2_assets/a80a9609c9d454d1643127b9781957631632716575.png",
    title: "Podimas",
  },
  {
    image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    title: "Pizza",
  },
  {
    image: "https://b.zmtcdn.com/data/o2_assets/19ce59acccda91b9ed7a407c970028721634401116.png",
    title: "Parotta",
  },
  {
    image: "https://b.zmtcdn.com/data/dish_images/53b0142d35999f3a1c266cacceb052971634401537.png",
    title: "Burger",
  },
  {
    image: "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    title: "Cake",
  },
  {
    image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    title: "Thali",
  },
  {
    image: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    title: "Fried Rice",
  },
];

const settings = {
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  InitialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

  return (
    <>
    <h1 className="text-3xl font-semibold my-3 mb-4">Eat what makes you happy!</h1>
    <div className="lg:hidden flex flex-wrap justify-evenly gap-3 lg:gap-0">
       {
         categories.map((food) => (
           <DeliveryFoodCategory {...food} />
         ))
       }
    </div>
    <div className="hidden lg:block">
      <Slider {...settings}>
      {categories.map((food) => (
        <DeliveryFoodCategory {...food} />
      ))}
      </Slider>
    </div>



    <div className="py-5">
      <img
        src="https://b.zmtcdn.com/web/assets/8d13109e07c5d49d54427f044d7b7d281620042855.png?output-format=webp"
        alt="Unlock exclusive offers"
        className="w-full h-full"
       />
    </div>





    </>
  );
};

export default DeliveryCarousal;
