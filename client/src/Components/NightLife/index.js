import React from "react";

//Componenets
import NightLifeCarousal from "./NightLifeCarousal";

const NightLife = () => {
  return (
    <>
      <div className="">
        <h6 className="pl-4 text-3xl font-semibold pb-4">Collections</h6>
        <h4 className="pl-4 pb-4 text-xl">Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</h4>
        <NightLifeCarousal />
      </div>
      <div>
        <h1 className="pl-4 text-xl my-4 md:my-8 md:text-3xl md:font-semibold">Nightlife Restaurants in Chennai</h1>
      </div>
    </>
 );
};

export default NightLife;
