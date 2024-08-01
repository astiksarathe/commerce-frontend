import React from "react";
import ShippingAddress from "../../shippingAddress/ShippingAddress";
const SecondStep = ({ stepHandler }) => {
  return (
    <div className="checkout_card">
      <ShippingAddress stepHandler={stepHandler} />
    </div>
  );
};

export default SecondStep;
