import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center w-full px-0 pt-8 pb-4" key={1}>
      <div className="text-gray-600">
        <Link className="text-xs text-gray-600">T&C</Link>{" "}
        <span className="mx-1">|</span>
        <Link className="text-xs text-gray-600">Privacy Policy</Link>{" "}
        <span className="mx-1">|</span>
        <Link className="text-xs text-gray-600">Refund Policy</Link>{" "}
        <span className="mx-1">|</span>
        <Link className="text-xs text-gray-600">Shipping Policy</Link>
      </div>
      <div className="text-xs text-gray-600">Powered By EverydayGadget</div>
    </footer>
  );
};

export default Footer;
