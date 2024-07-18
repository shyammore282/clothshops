import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // useselector for reading the data from the store
  const cartProduct = useSelector((state) => state.cart);
  // state for the navbar
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className="w-full flex mx-auto items-center justify-between flex-wrap sticky top-0">
        <nav className="w-full flex items-center justify-between bg-gray-400 h-14 rounded-xl">
          {/*-----nav bar for dekstop---- */}
          <div className=" flex items-center px-8 ">
            <FontAwesomeIcon
              onClick={() => setNav(!nav)}
              className=" text-xl lg:text-3xl text-center"
              icon={faBars}
            />
            <h1 className=" text-[18px] lg:text-2xl text-center font-bold px-2">
              fakeshop
            </h1>
          </div>
          <ul className=" md:flex hidden">
            <Link to="/">
              <li className=" text-xl px-1 font-medium lg:font-semibold text-white">
                Dashboard
              </li>
            </Link>

            <Link to="/about">
              <li className=" text-xl px-1 font-medium lg:font-semibold text-white">
                AboutUs
              </li>
            </Link>

            <Link to="/contact">
              <li className=" text-xl px-1 font-semibold text-white">
                ContactUs
              </li>
            </Link>
          </ul>
          <div className=" flex items-center rounded-2xl sm:bg-white lg:w-[300px] ">
            <FontAwesomeIcon className=" texr-xl px-3 " icon={faSearch} />
            <input
              className=" hidden md:block bg-transparent px-1 outline-none py-1"
              type="text"
              placeholder="search here"
            />
          </div>

          <Link
            className="hidden lg:flex items-center bg-black px-3 py-1 rounded-xl mr-2"
            to="/cart"
          >
            <FontAwesomeIcon
              className=" text-xl text-white px-1"
              icon={faCartShopping}
            />
            <p className=" text-2xl text-white px-1">
              Cart
              <span className="px-1">{cartProduct.length}</span>
            </p>
          </Link>

          {/*---mobile device---- */}
          {/*-----drawe menue--- */}
          {nav ? (
            <div className=" bg-black/80 w-full h-screen z-10 fixed top-0 left-0"></div>
          ) : (
            ""
          )}

          {/*-----drawe menue--- */}
          <div
            className={
              nav
                ? "bg-white w-[180px] md:w-[300px] h-screen z-10 fixed top-0 left-0 duration-300"
                : "bg-white left-[-320px]  h-screen z-10 fixed top-0  duration-300"
            }
          >
            <RxCross2
              onClick={() => setNav(!nav)}
              className=" absolute top-4 right-4"
              size={25}
            />
            <h1 className=" text-xl font-bold mt-4 mx-5">fakeshop</h1>

            <ul className=" mt-3">
              <Link to="/product">
                <li className=" text-xl px-4 py-1">Product</li>
              </Link>
              <Link to="/cart">
                <li className=" text-xl px-4 py-1">My Order</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
