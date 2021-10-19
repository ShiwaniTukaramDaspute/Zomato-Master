import React from "react";
import { FaPizzaSlice, FaUser } from "react-icons/fa";
import { HiLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { RiFootprintLine } from "react-icons/ri";
import { MdDeliveryDining, MdOutlineDining } from "react-icons/md";
import { GiWineBottle, GiHamburgerMenu } from "react-icons/gi";


const MobileNav = () => {
  return (<>
<div className="p-3 bg-white shadow-md items-center justify-between flex w-full md:hidden">
  <div className="w-auto h-5 pl-3">
    <img
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="logo"
      className="w-full h-full"
    />
  </div>
 <div className="flex items-center gap-3">
   <button className="bg-zomato-400 text-white text-xs font-semibold py-2 px-2 rounded-full h-8 w-16">Use App</button>
   <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
     <FaUser />
   </span>
 </div>
</div>

<div className="md:hidden py-3 flex flex-wrap items-center justify-between px-3">
  <div className="w-30 h-full flex items-center bg-white gap-1 px-3 rounded-sm">
    <HiLocationMarker className="text-2xl text-zomato-300" />
    <input type="search" className="w-full text-sm text-gray-900" placeholder="Chennai" />
  </div>
  <div className="border p-2 border-gray-300 bg-gray-50 rounded-full">
    <FiSearch className="text-lg" />
  </div>
</div>
<hr className="text-gray-50" />

  </>
);
};




const TabletNav = () => {
  return (<>
<div className="hidden lg:hidden md:flex items-center justify-between flex w-full p-8">
  <div className="text-2xl">
    <GiHamburgerMenu />
  </div>
  <div className="w-auto h-7 pl-3">
    <img
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="logo"
      className="w-full h-full" />
   </div>
</div>
  </>
);
};




const DesktopNav = () => {
  return (<>
<div className="hidden h-12 lg:flex md:hidden items-center gap-7 flex w-full py-9 px-none">

  <div className="w-auto h-7 pl-3">
    <img
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="logo"
      className="w-full h-full"
    />
  </div>

  <div className="w-3/5 h-14 py-2 flex flex-wrap items-center border border-2 shadow-md border-0.8rem border-solid rounded-md border-light-gray-500">
    <div>
      <div className="w-60 h-full flex items-center bg-white gap-3 px-3 rounded-sm">
        <HiLocationMarker className="text-3xl text-zomato-300" />
        <input type="search" className="w-full" placeholder="Chennai" />
        <AiFillCaretDown className="text-xl" />
      </div>
    </div>

  <div className="flex items-center text-gray-200 h-10 text-xl pb-2">|</div>
    <div>
      <div className="w-full h-full text-gray-500 flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
        <FiSearch className="text-xl" />
        <input type="search" className="w-80" placeholder="Search for restaurant, cuisine or a dish" />
      </div>
    </div>
  </div>

  <div className="text-xl text-gray-500 font-light ml-20">Log in</div>
  <div className="text-xl text-gray-500 font-light">Sign up</div>
</div>




  </>);
};





const Navbar = () => {
return (
  <>
    <nav>
     <MobileNav />
    <TabletNav />
    <DesktopNav />
    </nav>
  </>
)

};

export default Navbar;
