/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="w-screen p-3 shadow-2xl shadow-gray-400 fixed bottom-0 z-30 bg-white border-t border-gray-100 md:hidden">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="text-sm tracking-wide">
            <img src="/assets/icons/home.svg" alt="home" className="m-auto size-5" />
            <span> Home </span>
          </Link>
        </li>
        <li>
          <Link to="#" className="text-sm tracking-wide">
            <img src="/assets/icons/category.svg" alt="home" className="m-auto size-5" />
            <span> Categories </span>
          </Link>
        </li>
        <li>
          <Link to="#" className="text-sm tracking-wide">
            <img src="/assets/icons/account.svg" alt="home" className="m-auto size-5" />
            <span> Account </span>
          </Link>
        </li>
        <li>
          <Link to="#" className="text-sm tracking-wide">
            <img src="/assets/icons/heart.svg" alt="home" className="m-auto size-5" />
            <span> Wishlist </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
