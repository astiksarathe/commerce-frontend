import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "antd";

import { openShippingDrawer, setShippingEditMode } from "../../../features/shipping";
import { addressRenderer } from "../../../utils/common";
import DeleteModel from "./deleteModel/DeleteModel";

const ShowAddress = () => {
  const [deleteModel, setDeleteModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const address = [
    {
      address1: "House no 12, word no 2",
      landmark: undefined,
      city: "obaidullaganj",
      state: "Madhya Pradesg",
      pincode: "464993",
      country: "India",
    },
    {
      address1: "House no 12, word no 2",
      landmark: undefined,
      city: "obaidullaganj",
      state: "Madhya Pradesg",
      pincode: "464993",
      country: "India",
    },
    {
      address1: "House no 12, word no 2",
      landmark: undefined,
      city: "obaidullaganj",
      state: "Madhya Pradesg",
      pincode: "464993",
      country: "India",
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <button
          className="btn_as_div"
          onClick={(e) => {
            dispatch(setShippingEditMode({ isEditMode: true }));
            dispatch(openShippingDrawer());
          }}
        >
          Edit
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button className="btn_as_div" onClick={() => setDeleteModel(true)}>
          Delete
        </button>
      ),
    },
  ];
  const deleteSavedAddress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setDeleteModel(false);
    }, 1000);
  };
  const addressCard = (address, ind) => (
    <div className="checkout_card delivery_address_wrapper address_list" key={ind}>
      <p className="deliver_to">
        <span>{address.name}</span>
        <Dropdown menu={{ items }} placement="bottomRight">
          <img src="/assets/icons/threeDot.svg" alt="edit and delete menu" />
        </Dropdown>
      </p>
      <p className="deliver_address">{addressRenderer(address)}</p>
      <p className="customer_phone_number">
        <span className="label">Phone - </span>
        <span className="value">{address.phoneNumber}</span>
      </p>
    </div>
  );
  return (
    <>
      <div className="show_addresses">
        <div className="show_addresses_title">Saved Address</div>
        <p>
          Including address related to <strong>{"8839630740"}</strong> where EverydayGadget has
          previously delivered orders
        </p>
        <button
          className="btn_as_div new_address_btn"
          onClick={() => {
            dispatch(setShippingEditMode({ isEditMode: false }));
            dispatch(openShippingDrawer());
          }}
        >
          Add new address
        </button>
        <div className="address_list">{address.length > 0 && <>{address.map(addressCard)}</>}</div>
      </div>
      <DeleteModel
        open={deleteModel}
        onCancel={() => setDeleteModel(false)}
        laoding={isLoading}
        onConfirm={deleteSavedAddress}
      />
    </>
  );
};

export default ShowAddress;
