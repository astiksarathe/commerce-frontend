import React, { useState } from "react";
import { Drawer } from "antd";

import ShowAddress from "../../shippingAddress/ShowAddress";
import ShippingMethods from "./shippingMethod/ShippingMethods";
import Payment from "./payment/Payment";

import { addressRenderer } from "../../../../utils/common";
import { useSelector } from "react-redux";

const ThirdStep = () => {
  const [openModel, setOpenModel] = useState(false);
  const {
    checkoutForm: { personalDetails, shippingAddress },
  } = useSelector((state) => state.checkout);

  return (
    <div>
      <div className="checkout_card delivery_address_wrapper">
        <p className="deliver_to">
          <span>Deliver to</span>
          <button className="change_deliver_to_btn" onClick={() => setOpenModel(true)}>
            Change
          </button>
        </p>
        <p className="deliver_address">{addressRenderer(shippingAddress)}</p>
        <p className="customer_phone_number">
          <span className="label">Phone - </span>
          <span className="value">
            {personalDetails?.phoneNumber ? personalDetails.phoneNumber : ""}
          </span>
        </p>
      </div>

      <div className="checkout_card">
        <ShippingMethods />
      </div>
      <div className="checkout_card">
        <Payment />
      </div>

      <Drawer
        closeIcon={true}
        placement="bottom"
        closable={false}
        onClose={() => setOpenModel(false)}
        open={openModel}
        getContainer={false}
      >
        <ShowAddress />
      </Drawer>
    </div>
  );
};

export default ThirdStep;
