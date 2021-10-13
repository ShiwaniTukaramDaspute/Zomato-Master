import React from "react";

//Component
import DeliveryFoodCategory from "./DeliveryFoodCategory";
import BrandCardSlider from "./BrandSlider";

const DeliveryCarousal = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">Eat what makes you happy!</h1>
    <div className="grid grid-cols-3 gap-1 flex justify-between gap-3">
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
    </div>
    <div className="py-5">
      <img
        src="https://b.zmtcdn.com/web/assets/8d13109e07c5d49d54427f044d7b7d281620042855.png?output-format=webp"
        alt="Unlock exclusive offers"
        className="w-full h-full"
       />
    </div>
    <div className="container pb-3">
      <h1 className="text-2xl font-bold text-gray-800">
        Top brands for you
      </h1>
      <BrandCardSlider />
    </div>
    <h1>Chennai Restaurants</h1>




    </>
  );
};

export default DeliveryCarousal;
