import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Checkbox, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

import { exitDrawerHandler } from "../../../../../features/checkoutExit";
import { checkoutModelHandler } from "../../../../../features/checkout";
import { updateInitiatedOrder } from "../../../../../features/order";

import Button from "../../../../ui/button";
const ExitCheckout = () => {
  const [exitForm, setExitForm] = useState({
    givenReason: [],
    otherReason: "",
  });

  const { isExitDrawerOpen } = useSelector((state) => state.checkoutExit);

  const dispatch = useDispatch();

  const options = [
    { label: "Found a better deal elsewhere", value: 1 },
    { label: "Faces technical issues with checkout process", value: 2 },
    { label: "Expected a faster delivery", value: 3 },
    { label: "Required help selecting the right product", value: 4 },
    { label: "Changed my mind", value: 5 },
    { label: "Others", value: 6 },
  ];
  const onChangeHandler = (selectedOption) => {
    setExitForm((pre) => ({ ...pre, givenReason: selectedOption }));
  };
  const onExitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateInitiatedOrder({
        orderId: localStorage.getItem("orderId"),
        step: 5,
        abondenedCheckoutReason:
          exitForm.givenReason.join(" ") + " " + exitForm.otherReason,
      })
    );
    localStorage.removeItem("orderId");
    onClose();
    dispatch(checkoutModelHandler(false));
  };

  const onClose = () => {
    dispatch(exitDrawerHandler(false));
  };

  return (
    <Drawer
      title={
        <div className="text-base font-semibold flex items-center justify-between mb-2 text-zinc-800">
          <span>Sorry to see you go</span>
          <button className="bg-transparent" type="button" onClick={onClose}>
            <CloseOutlined />
          </button>
        </div>
      }
      className="drawer"
      placement="bottom"
      height={480}
      closable={false}
      onClose={onClose}
      open={isExitDrawerOpen}
      getContainer={false}
    >
      <div className="flex flex-col gap-2">
        <div>
          <label className="exit_form_label" htmlFor="givenReason">
            What stopped you from completing your purchase?
          </label>
          <Checkbox.Group
            className="flex flex-col gap-1 py-2 px-0"
            value={exitForm.givenReason}
            name="givenReason"
            options={options}
            defaultValue={["Apple"]}
            onChange={onChangeHandler}
          />
        </div>
        <TextArea
          value={exitForm.otherReason}
          name="otherReason"
          size="large"
          placeholder="Others (Please specify)"
          autoSize={{ minRows: 5, maxRows: 5 }}
          onChange={(e) => {
            setExitForm(e.target.value);
          }}
        ></TextArea>
        <Button onClick={onExitHandler}>Skip and exit</Button>
      </div>
    </Drawer>
  );
};

export default ExitCheckout;
