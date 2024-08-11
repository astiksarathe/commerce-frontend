import React from "react";
import Address from "./Address";
import { useDispatch, useSelector } from "react-redux";
import { getPinCodeDetails } from "../../../features/pincode/pincoodeSlice";
import { addShippingDetails } from "../../../features/checkout";
import { updateInitiatedOrder } from "../../../features/order";

const ShippingAddress = ({ stepHandler }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.order);

  const pincodeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length === 6) dispatch(getPinCodeDetails(value));
  };
  const onSubmit = (form) => {
    dispatch(
      updateInitiatedOrder({
        step: 2,
        orderId: localStorage.getItem("orderId"),
        ...form,
      })
    );
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
        isLoading={isLoading}
      />
    </div>
  );
};

export default ShippingAddress;
