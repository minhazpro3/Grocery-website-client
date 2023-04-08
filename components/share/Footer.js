import Image from "next/image";
import React from "react";
import logo from "../../public/download.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="my-6 md:my-8">
      <div className="md:grid md:grid-cols-4 gap-6 container mx-auto md:px-0 px-8">
        <div>
          <div className="relative w-20 h-16">
            <Image src={logo} alt="" fill />
          </div>
          <p className="text-base my-2">
            Sophisticated simplicity for the independent mind.
          </p>
          <div className="flex justify-start gap-3">
            <FaFacebookF className="text-xl hover:cursor-pointer hover:-mt-1  hover:text-gray-600 " />
            <FaInstagram className="text-xl hover:cursor-pointer hover:-mt-1  hover:text-gray-600 " />
            <FaTwitter className="text-xl hover:cursor-pointer hover:-mt-1  hover:text-gray-600 " />
            <FaYoutube className="text-xl hover:cursor-pointer hover:-mt-1  hover:text-gray-600 " />
          </div>
        </div>
        <div>
          <h3 className="text-2xl underline my-2">Help & Infomation</h3>
          <div className="grid grid-flow-row">
            <Link href="#">
              {" "}
              <a>About us</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Privacy policy</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Terms & conditions</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Product return</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Wholesale policy</a>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-2xl underline my-2">About Us</h3>
          <div className="grid grid-flow-row">
            <Link href="#">
              {" "}
              <a>Pagination</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Terms & conditions</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Accessories</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Contract</a>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-2xl underline my-2">Categories</h3>

          <div className="grid grid-flow-row">
            <Link href="#">
              {" "}
              <a>Help center</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Address store</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Privacy policy</a>
            </Link>
            <Link href="#">
              {" "}
              <a>Receivers & Amplifiers</a>
            </Link>
            <Link href="#">
              {" "}
              <a>HanicStore</a>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
