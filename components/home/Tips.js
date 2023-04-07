import Image from "next/image";
import React from "react";
import tips_img from "../../public/bnner-v5.png";

const Tips = () => {
  return (
    <div className="container mx-auto px-8 md:px-0 my-8 ">
      <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 py-3 md:py-6">
        <div className="bg-teal-200 px-4 py-2 md:py-8">
          <h3 className="my-4 text-3xl md:text-5xl">Health & Nutrition</h3>
          <h5 className="text-base font-medium">
            Implement other healthy habits: in addition to applying a balanced
            diet, you can combine them with regular exercise, limit alcohol and
            tobacco to effectively improve your condition. health and keep the
            body flexible and supple. Living a balanced lifestyle and following
            the right nutrition is not easy. However, each person should start
            practicing the habit of protecting the body by maintaining a
            scientific diet, paying attention to eating a variety of foods;
            Store and process food properly so as not to lose nutrients.
          </h5>
          <button className="bg-yellow-500 my-3 md:my-5 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
        <div className="my-2 md:my-0">
          <div className="relative w-[100%] h-[100%] ">
            <Image src={tips_img} alt="tips section" fill quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
