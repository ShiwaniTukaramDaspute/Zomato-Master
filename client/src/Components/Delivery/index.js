import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//Componenets
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState ([
    {
      _id: "123456",
      photos:[
        "https://b.zmtcdn.com/data/pictures/9/18670849/2a701be84356440a2b499c85834c12ce.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      ],
      name: "Ganga Sweets",
      cuisine: ["Mithai", "Street Food", "Beverages"],
      averageCost: 100,
      isPro: true,
      isOFF: "80",
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-2",
      photos:[
        "https://b.zmtcdn.com/data/pictures/chains/1/65381/c2c01dabe8d4c96c5b2bbdba6330d90f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      ],
      name: "Murugan Idli Shop",
      cuisine: ["South Indian"],
      averageCost: 100,
      isPro: true,
      isOFF: "80",
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-3",
      photos:[
        "https://b.zmtcdn.com/data/pictures/3/18928883/1600efc4d980712ca50c53a0172c7046.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      ],
      name: "Juice Junction",
      cuisine: ["Juice", "SandWich", "Beverages"],
      averageCost: 100,
      isPro: true,
      isOFF: "80",
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-4",
      photos:[
        "https://b.zmtcdn.com/data/dish_photos/c95/46fab6d09fd310ecca09512ad4e3ac95.jpg?output-format=webp"
      ],
      name: "Punjab Grill",
      cuisine: ["Mughlai", "North Indian", "Kebab", "Beverages"],
      averageCost: 100,
      isPro: true,
      isOFF: "80",
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-5",
      photos:[
        "https://b.zmtcdn.com/data/pictures/chains/7/68607/8918641c2f8ba3b5a43b04429c13b2d7_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      ],
      name: "SS Hyderabad Biryani",
      cuisine: ["South Indian", "Chinese", "Biryani", "North Indian"],
      averageCost: 100,
      isPro: true,
      isOFF: "80",
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-6",
      photos:[
        "https://b.zmtcdn.com/data/pictures/chains/9/65279/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg"
      ],
      name: "KFC",
      cuisine: ["Fast Food", "Burger", "Desserts", "Beverages"],
      averageCost: 100,
      isPro: true,
      isOFF: "80",
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
  ]);
/*
  const reduxState = useSelector (
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect (() => {
    setRestaurantList (reduxState.restaurants)
  }, [reduxState.restaurants]);
*/
  return (
    <>
    <DeliveryCarousal />
    <Brand />
    <h1 className="pl-4 py-4 text-3xl font-semibold">Delivery Restaurants in Chennai</h1>
    <div className="flex justify-between flex-wrap">
      {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
    </div>
    </>
  );
};

export default Delivery;
