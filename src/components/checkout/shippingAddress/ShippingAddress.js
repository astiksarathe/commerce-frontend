import React from "react";
import Address from "./Address";
import { useDispatch } from "react-redux";
import { getPinCodeDetails } from "../../../features/pincode/pincoodeSlice";
import { addShippingDetails } from "../../../features/checkout";

const ShippingAddress = ({ stepHandler }) => {
  const dispatch = useDispatch();

  const pincodeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length === 6) dispatch(getPinCodeDetails(value));
  };
  const onSubmit = (form) => {
    dispatch(addShippingDetails(form));
  };
  return (
    <div className="checkout_form">
      <h1 className="checkout_heading">Add Shipping Address</h1>
      <Address
        pincodeHandler={pincodeHandler}
        formName="shippingAddress"
        btnName={"Add address"}
        stepHandler={stepHandler}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ShippingAddress;
