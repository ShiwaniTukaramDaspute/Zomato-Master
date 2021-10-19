import React from "react";
import {MdArrowRight} from "react-icons/md"

const PictureCarousalCard = () => {
  return(
    <>
       <div className="w-full h-72 relative px-4">
        <div className="w-full h-full relative">
          <img
              src="https://b.zmtcdn.com/data/pictures/chains/0/18633670/bf4f3f5785dd9ba62b561b67903150dd.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
              alt="food"
              className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
           />
           <div className="absolute bottom-0 w-full h-full inset-0 rounded-lg" style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"}} />
        </div>
        <div className="absolute w-full left-6 bottom-2 text-white">
            <h4 className="z-10">Frozen Delights Frozen Delights</h4>
            <h6 className="z-10 flex items-center">14 Places<MdArrowRight /></h6>
        </div>
       </div>
    </>
 );
};

export default PictureCarousalCard;
