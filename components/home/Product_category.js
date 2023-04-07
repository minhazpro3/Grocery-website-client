import React from "react";

const Product_category = () => {
  const prev = () => {
    document.getElementById("slideContent").scrollLeft -= 500;
  };

  const next = () => {
    document.getElementById("slideContent").scrollLeft += 500;
  };
  return (
    <div className="container  mx-auto px-8 md:px-0 my-5">
      {" "}
      <div className=" flex justify-end gap-3">
        <button onClick={prev} className="btn btn-circle">
          ❮
        </button>
        <button onClick={next} className="btn btn-circle">
          ❯
        </button>
      </div>
      <div
        id="slideContent"
        className=" carousel flex items-center gap-4 overflow-x-auto scrollbar-hide  scroll-smooth  my-4"
      >
        {/* card 1 */}
        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/B2ZcYmb/purepng-1.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Camera</h2>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/q04gYDg/gaming-and-vr-removebg-preview.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gaming & VR</h2>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/VjBr0M1/phones-and-tablets-removebg-preview.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cell phones & tablets</h2>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/VjBr0M1/phones-and-tablets-removebg-preview.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cell phones & tablets</h2>
            </div>
          </div>
        </div>
        {/* card 5 */}

        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/KNjDHVm/Headphones-Transparent-PNG-1.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Music & Audio</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/KNjDHVm/Headphones-Transparent-PNG-1.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Music & Audio</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/KNjDHVm/Headphones-Transparent-PNG-1.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Music & Audio</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-72 h-80 bg-[#F0F0F0] ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/KNjDHVm/Headphones-Transparent-PNG-1.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Music & Audio</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_category;
