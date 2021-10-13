import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { RiFootprintLine } from "react-icons/ri";
import { MdDeliveryDining, MdOutlineDining } from "react-icons/md";
import { GiWineBottle } from "react-icons/gi";

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



  const TabletTab = () => {

  const [allTypes, setAllTypes] = useState([
    {
      id: "Deliveryy",
      icon: <MdDeliveryDining />,
      name: "Delivery",
      isActive: false
    },
    {
      id: "DiningOut",
      icon: <MdOutlineDining />,
      name: "Dining Out",
      isActive: false
    },
    {
      id: "NightLife",
      icon: <GiWineBottle />,
      name: "Night Life",
      isActive: false
    }

  ]);
    const {type} = useParams();

    return (
        <>
          <div className="hidden lg:hidden md:flex items-center justify-between gap-7 px-0">
            {allTypes.map((items) => (
              <Link to={`/${items.id}`}>
                <div
                  className={
                    type === items.id
                      ? "flex flex-row relative items-center text-xl text-zomato-400"
                      : "flex flex-row items-center text-xl"
                  }
                >
                  <div
                    className={
                      type === items.id &&
                      "absolute -bottom-10 w-full h-2 border-t-2 border-zomato-400"
                    }
                  />
                  <div className="text-4xl border p-2 bg-gray-50 border-gray-300 rounded-full">{items.icon}</div>
                  <h5 className="w-auto">{items.name}</h5>
                </div>

              </Link>
            ))}
          </div>
            <hr className="mt-8" />

        </>
      );
    };




  const DesktopTab = () => {

  const [allTypes, setAllTypes] = useState([
    {
      id: "Delivery",
      icon: <MdDeliveryDining />,
      name: "Delivery",
      isActive: false
    },
    {
      id: "Dining",
      icon: <MdOutlineDining />,
      name: "Dining Out",
      isActive: false
    },
    {
      id: "Night",
      icon: <GiWineBottle />,
      name: "Night Life",
      isActive: false
    }

  ]);
    const {type} = useParams();

    return (
        <>
          <div className="hidden md:flex lg:flex items-center gap-7 px-40 mt-14">
            {allTypes.map((items) => (
              <Link to={`/${items.id}`}>
                <div
                  className={
                    type === items.id
                      ? "flex flex-row relative items-center text-xl text-zomato-400 "
                      : "flex flex-row items-center text-xl "
                  }
                >
                  <div
                    className={
                      type === items.id &&
                      "absolute -bottom-10 w-full h-2 border-t-2 border-zomato-400"
                    }
                  />
                  <div className="text-4xl border p-2 bg-gray-50 border-gray-300 rounded-full">{items.icon}</div>
                  <h5 className="w-auto h-7 pl-3">{items.name}</h5>
                </div>

              </Link>
            ))}
          </div>
            <hr className="mt-8" />

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
