import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer } from "antd";

import { closeShippingDrawer } from "../../../features/shipping";
import Address from "./Address";

const ShippingDrawer = () => {
  const { isOpen, isEditMode } = useSelector((state) => state.shipping);

  const dispatch = useDispatch();

  return (
    <Drawer
      title={<h1>{isEditMode ? "Edit" : "Add"} Address</h1>}
      placement="bottom"
      closable={false}
      onClose={() => dispatch(closeShippingDrawer())}
      open={isOpen}
      getContainer={false}
    >
      <Address
        formName={isEditMode ? "EditFormDrawer" : "AddFormDrawer"}
        btnName={isEditMode ? "Save and Select" : "Add address"}
      />
    </Drawer>
  );
};

export default ShippingDrawer;
