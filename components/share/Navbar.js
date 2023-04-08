import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {" "}
      <nav className="bg-green-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggle}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center md:justify-between sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://i.ibb.co/9TdntMK/1532749.png"
                  alt="Grocery logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://i.ibb.co/9TdntMK/1532749.png"
                  alt="Grocery logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    className="text-gray-100 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-gray-100 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                    href="/shop"
                  >
                    Shop
                  </Link>
                  <Link
                    className="text-gray-100 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                    href="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className="text-gray-100 hover:bg-green-800 bg-green-700 px-3 py-2 rounded-full text-sm font-medium"
                    href="/shop"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} sm:hidden bg-green-500`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              className="text-gray-100 hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-100 hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Shop
            </Link>
            <Link
              href="/cart"
              className="text-gray-100 hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
