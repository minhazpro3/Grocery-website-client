import Image from "next/image";
import React from "react";
import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative  w-[100%] h-[300px] md:h-[550px] ">
        <Image src={banner} alt="banner img" fill />
      </div>
      <div className="container mx-auto px-8 md:px-0 relative ">
        <div className="absolute top-1">
          <h5>Decorate your home</h5>
          <h2>Good Healthy</h2>
          <h5>Food is good choice every day for us.</h5>
          <h5>And make sure you get enough nutrients every day.</h5>
          <button>Shop Now</button>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
