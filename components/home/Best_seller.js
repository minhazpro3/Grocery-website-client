import Image from "next/image";
import React from "react";

const Best_seller = () => {
  const products = [
    {
      id: 1,
      link: "https://i.ibb.co/f4ZNNPJ/download-1.jpg",
      title: "Pasta by pizza",
      price: 23,
    },
    {
      id: 2,
      link: "https://i.ibb.co/VpWqkX2/download-2.jpg",
      title: " chicken",
      price: 34,
    },
    {
      id: 3,
      link: "https://i.ibb.co/ZVbZKHY/download-3.jpg",
      title: "Roll chicken",
      price: 45,
    },
    {
      id: 4,
      link: "https://i.ibb.co/2hGsMQY/download-4.jpg",
      title: "Pocora chicken",
      price: 54,
    },
    {
      id: 5,
      link: "https://i.ibb.co/wBnLcN0/download-5.jpg",
      title: "Buffet",
      price: 123,
    },
    {
      id: 6,
      link: "https://i.ibb.co/TgqkNBk/download.jpg",
      title: "Pizza king",
      price: 64,
    },
    {
      id: 7,
      link: "https://i.ibb.co/W28Wfjn/download.jpg",
      title: "Burger so meat",
      price: 544,
    },
    {
      id: 8,
      link: "https://i.ibb.co/276fSVq/images-3.jpg",
      title: "Meat Indo",
      price: 123,
    },
  ];
  return (
    <div className="container mx-auto px-8 md:px-0">
      <div className="text-center ">
        <h2 className="text-3xl md:6xl md:font-bold my-2">Our Best Seller</h2>
        <div className="flex justify-center gap-2 my-3">
          <button className="border-2 border-red-600 hover:border-white px-3 py-2 hover:text-white hover:bg-red-600 font-medium text-xs focus:bg-red-800">
            NEW ARRIVALS
          </button>
          <button className="border-2 border-red-600 hover:border-white px-3 py-2 hover:text-white hover:bg-red-600 font-medium text-xs focus:bg-red-800">
            BEST SELLERS
          </button>
          <button className="border-2 border-red-600 hover:border-white px-3 py-2 hover:text-white hover:bg-red-600 font-medium text-xs focus:bg-red-800">
            TOP RATES
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 my-4  gap-4 md:gap-4">
        {products.map((product) => (
          <div
            className="w-full h-[340px] shadow-md shadow-gray-700 "
            key={product.id}
          >
            <div>
              <div className="relative w-[100%] h-[150px] ">
                <Image src={product.link} alt="product" fill />
              </div>
            </div>
            <div className="mx-3">
              <h3 className="text-2xl">{product.title}</h3>
              <p className="text-base text-green-600 font-medium">
                $120.00 <del className="text-red-600">$150.00</del>
              </p>
              <p className="text-xs">
                Food is any substance consumed by an organism for nutritional
                support. Food is usually of plant, nutrients, such as
                carbohydrates, fats, proteins, vitamins, or minerals.
              </p>
              <button className="bg-pink-500 w-full my-2 text-sm hover:bg-pink-700 text-white font-bold py-[4px] px-4 rounded-full">
                Place order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best_seller;
