import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { RiFootprintLine } from "react-icons/ri";
import { MdDeliveryDining, MdOutlineDining } from "react-icons/md";
import { GiWineBottle } from "react-icons/gi";
import classnames from "classnames";

const MobileTab = () => {

const [allTypes, setAllTypes] = useState([
  {
    id: "delivery",
    icon: <BsHandbag />,
    name: "Delivery",
    isActive: false
  },
  {
    id: "night",
    icon: <GiWineBottle />,
    name: "Night Life",
    isActive: false
  },
  {
    id: "dining",
    icon: <RiFootprintLine />,
    name: "Dining Out",
    isActive: false
  }
]);
  const {type} = useParams();

  return (
      <>
        <div className="lg:hidden md:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
          {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                    : "flex flex-col items-center text-xl "
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };


  const DesktopTab = () => {

    const [allTypes, setAllTypes] = useState([
      {
        id: "delivery",
        imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        name: "Delivery",
        imageActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        activeColor: "yellow"
      },
      {
        id: "dining",
        imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        name: "Dining Out",
        imageActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        activeColor: "blue"
      },
      {
        id: "night",
        imageDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        name: "Night Life",
        imageActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        activeColor: "purple"
      }

    ]);

const { type } = useParams();

    return (
        <>
          <div className= "hidden md:flex lg:flex gap-14 container px-6 mx-auto my-8">


              {allTypes.map((items) => (
                <Link to={`/${items.id}`}>
                <div className={classnames("flex items-center gap-3 pb-5 transition duration-700 ease-in-out", {"border-b-2 border-zomato-400" : type === items.id})}>
                  <div className={`w-16 h-16 bg-${type === items.id ? items.activeColor : "gray"}-100 p-4 rounded-full `}>
                    <img
                      src={type === items.id ? items.imageActive : items.imageDefault}
                      alt="delivery"
                      className="w-full h-full"
                     />
                   </div>
                   <h3 className={type === items.id ? "text-xl text-zomato-400" : "text-xl text-gray-700"}>{items.name}</h3>
                 </div>
                 </Link>
              ))}
        </div>
        </>
      );
    };





const FoodTab = () => {
  return (
  <>
  <div>
    <MobileTab />
    <DesktopTab />
  </div>
  </>
  );
};

export default FoodTab;
