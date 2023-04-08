import Navbar from "@/components/share/Navbar";
import React from "react";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import { useForm } from "react-hook-form";
import Footer from "@/components/share/Footer";

const contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-8 md:px-0">
        <div className="bg-sky-200 my-8 pb-4 rounded-md">
          <div className="py-3">
            <h2 className="text-center text-3xl md:5xl">Get In touch</h2>
            <p className="text-center text-xl">
              {" "}
              Contact us for a quote, help to join the team
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-6 my-3">
              <ul className="flex justify-center bg-yellow-100 hover:bg-white px-6 py-4 rounded-md ">
                <MdLocationPin className="text-2xl text-indigo-600 " />
                <p className="text-base font-medium">140 State 8872 Don</p>
              </ul>
              <ul className="flex justify-center bg-yellow-100 hover:bg-white px-6 py-4 rounded-md">
                <MdCall className="text-2xl text-indigo-600 " />
                <p className="text-base font-medium">+88 14575-74525</p>
              </ul>
              <ul className="flex justify-center bg-yellow-100 hover:bg-white px-6 py-4 rounded-md ">
                <MdEmail className="text-2xl text-indigo-600  justify-center" />
                <p className="text-base font-medium">hello@yahoo.com</p>
              </ul>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                <div>
                  <label>Your name</label>
                  <br />
                  <input
                    className=" w-72 md:w-96 text-base py-1 px-2    focus:border-indigo-900 rounded-md outline-none  border-[2px]"
                    {...register("name")}
                    placeholder="name"
                  />

                  <br />
                  <label> email</label>
                  <br />
                  <input
                    className=" w-72 md:w-96 text-base py-1 px-2    focus:border-indigo-900 rounded-md outline-none  border-[2px]"
                    {...register("mail")}
                    placeholder="e-mail"
                  />
                  <br />
                  <label>phone</label>
                  <br />
                  <input
                    className=" w-72 md:w-96 text-base py-1 px-2    focus:border-indigo-900 rounded-md outline-none  border-[2px]"
                    {...register("phone")}
                    placeholder="phone"
                  />
                  <br />
                  <input
                    className=" w-72 md:w-96 my-2 text-black hover:text-white bg-yellow-200 cursor-pointer  hover:bg-green-700 text-white font-bold py-2 px-4 rounded  "
                    type="submit"
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <br />
                  <textarea
                    className=" w-72 md:w-96 h-36 text-base py-1 px-2    focus:border-indigo-900 rounded-md outline-none  border-[2px]"
                    {...register("message")}
                    placeholder="whats on you mind?"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
