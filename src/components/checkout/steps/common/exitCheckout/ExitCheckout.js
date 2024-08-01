import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Checkbox, Drawer } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CloseOutlined } from "@ant-design/icons";

import { exitDrawerHandler } from "../../../../../features/checkoutExit";

import "./exit-checkout.scss";
const ExitCheckout = () => {
  const [exitForm, setExitForm] = useState({ givenReason: [], otherReason: "" });
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
  };

  const onClose = () => {
    dispatch(exitDrawerHandler(false));
  };

  return (
    <Drawer
      className="checkout_exit_drawer"
      placement="bottom"
      height={480}
      closable={false}
      onClose={onClose}
      open={isExitDrawerOpen}
      getContainer={false}
    >
      <div className="exit_form_title">
        <span>Sorry to see you go</span>
        <button type="button" onClick={onClose}>
          <CloseOutlined />
        </button>
      </div>
      <div className="exit_form_container">
        <div>
          <label className="exit_form_label" htmlFor="givenReason">
            What stopped you from completing your purchase?
          </label>
          <Checkbox.Group
            className="exist_reason_options"
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
        <Button type="primary" size="large" block onClick={onExitHandler}>
          Skip and exit
        </Button>
      </div>
    </Drawer>
  );
};

export default ExitCheckout;
