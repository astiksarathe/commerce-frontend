import React, { useState } from "react";
import { Drawer } from "antd";

import ShowAddress from "../../shippingAddress/ShowAddress";
import ShippingMethods from "./shippingMethod/ShippingMethods";
import Payment from "./payment/Payment";

import { addressRenderer } from "../../../../utils/common";

const ThirdStep = ({ stepHandler }) => {
  const [openModel, setOpenModel] = useState(false);
  const address = {
    address1: "House no 12, word no 2",
    landmark: undefined,
    city: "obaidullaganj",
    state: "Madhya Pradesg",
    pincode: "464993",
    country: "India",
  };

  return (
    <div>
      <div className="checkout_card delivery_address_wrapper">
        <p className="deliver_to">
          <span>Deliver to</span>
          <button className="change_deliver_to_btn" onClick={() => setOpenModel(true)}>
            Change
          </button>
        </p>
        <p className="deliver_address">{addressRenderer(address)}</p>
        <p className="customer_phone_number">
          <span className="label">Phone - </span>
          <span className="value">8849728938</span>
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
