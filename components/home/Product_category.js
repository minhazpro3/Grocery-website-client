import React from "react";

const Product_category = () => {
  const products = [
    {
      id: 1,
      link: "https://i.ibb.co/f4ZNNPJ/download-1.jpg",
      title: "cooking chicken",
    },
    {
      id: 2,
      link: "https://i.ibb.co/VpWqkX2/download-2.jpg",
      title: "cooking chicken",
    },
    {
      id: 3,
      link: "https://i.ibb.co/ZVbZKHY/download-3.jpg",
      title: "cooking chicken",
    },
    {
      id: 4,
      link: "https://i.ibb.co/2hGsMQY/download-4.jpg",
      title: "cooking chicken",
    },
    {
      id: 5,
      link: "https://i.ibb.co/wBnLcN0/download-5.jpg",
      title: "cooking chicken",
    },
    {
      id: 6,
      link: "https://i.ibb.co/TgqkNBk/download.jpg",
      title: "cooking chicken",
    },
    {
      id: 7,
      link: "https://i.ibb.co/W28Wfjn/download.jpg",
      title: "cooking chicken",
    },
    {
      id: 8,
      link: "https://i.ibb.co/276fSVq/images-3.jpg",
      title: "cooking chicken",
    },
    {
      id: 9,
      link: "https://i.ibb.co/HDR27dd/images-4.jpg",
      title: "cooking chicken",
    },
    {
      id: 10,
      link: "https://i.ibb.co/5hcmpp9/images.jpg",
      title: "cooking chicken",
    },
  ];
  const prev = () => {
    document.getElementById("slideContent").scrollLeft -= 500;
  };

  const next = () => {
    document.getElementById("slideContent").scrollLeft += 500;
  };
  return (
    <div className="container  mx-auto px-8 md:px-0 my-5">
      <h4 className="text-center text-3xl  md:text-4xl font-medium underline my-2 md:my-0">
        Top Categories
      </h4>{" "}
      <div className=" flex justify-end gap-4">
        <button
          onClick={prev}
          className=" bg-gray-500 rounded-full px-[18px] py-2 text-2xl "
        >
          ❮
        </button>
        <button
          onClick={next}
          className="bg-gray-500 rounded-full px-[18px] py-2 text-2xl"
        >
          ❯
        </button>
      </div>
      <div
        id="slideContent"
        className="  flex items-center gap-4 overflow-x-auto scrollbar-hide scroll-smooth  my-4"
      >
        {/* card 1 */}
        {products.map((product) => (
          <div key={product.id}>
            <div className="card w-72 h-60 bg-[#F0F0F0] ">
              <figure className="px-10 pt-10">
                <img
                  style={{ height: "170px" }}
                  src={product.link}
                  alt="Shoes"
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_category;
