import React from "react";

import "./header.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { exitDrawerHandler } from "../../../../../features/checkoutExit/CheckoutExitSlice";

const Header = () => {
  const dispatch = useDispatch();
  const onExit = () => {
    dispatch(exitDrawerHandler(true));
  };
  return (
    <header className="checkout_header">
      <button className="checkout_back_btn" name="back button" onClick={onExit}>
        <ArrowLeftOutlined />
      </button>
      <div className="checkout_logo_wrapper">
        <div className="checkout_header_logo"></div>
      </div>
      <div className="checkout_header_announcement">Get Additional 5% off on Prepaid Orders</div>
    </header>
  );
};

export default Header;
