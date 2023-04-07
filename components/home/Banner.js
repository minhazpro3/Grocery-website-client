import Image from "next/image";
import React from "react";
import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="relative  w-[100%] h-[300px] md:h-[550px] ">
        <Image src={banner} alt="banner img" fill />
      </div>
      <div className="absolute top-12 md:top-20 left-6 md:left-16 right-6 md:right-16">
        <div className="">
          <h5 className="text-xl md:text-2xl text-white ">
            Decorate your home
          </h5>
          <h2 className="text-5xl md:text-8xl text-white my-3 md:my-5">
            Good Healthy
          </h2>
          <h5 className="text-xl md:text-2xl text-white ">
            Food is good choice every day for us.
          </h5>
          <h5 className="text-xl md:text-2xl text-white  md:my-2  ">
            And make sure you get enough nutrients every day.
          </h5>
          <div className="my-3 md:my-6">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mx-2">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
