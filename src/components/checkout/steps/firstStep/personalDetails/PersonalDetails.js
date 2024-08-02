import React from "react";
import { useDispatch } from "react-redux";

import { Form, Input } from "antd";

import { addPersonalDetails } from "../../../../../features/checkout";
import SubmitButton from "../../../../submitButton/SubmitButton";

const PersonalDetails = ({ stepHandler }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onClickHandler = (formFields) => {
    dispatch(addPersonalDetails(formFields));
    stepHandler(2);
  };
  return (
    <div className="personal_details">
      <h1 className="checkout_heading first_heading">Get Started</h1>
      <Form
        form={form}
        onFinish={onClickHandler}
        variant="filled"
        style={{ maxWidth: 700 }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Your Name"
          name="fullName"
          validateTrigger="onBlur"
          rules={[{ required: true, message: "Your name is required!" }]}
        >
          <Input size="large" placeholder="Enter Your Name" />
        </Form.Item>

        <Form.Item
          label="Your Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Your phone number is required!" },
            { len: 10, message: "Phone number should be valid" },
          ]}
        >
          <Input
            type="number"
            prefix={
              <div className="phoneNumber-dialog-code">
                <img
                  style={{ marginRight: "5px" }}
                  src="/assets/indian_flag.svg"
                  alt="Indian Dialing Code "
                />
                <span>+91</span>
              </div>
            }
            size="large"
            placeholder="Enter Phone Number"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          validateTrigger="onBlur"
          rules={[{ type: "email", message: "Enter a valid email!" }]}
        >
          <Input size="large" placeholder="Enter Your Name" />
        </Form.Item>
        <SubmitButton form={form} size="large" htmlType="submit" block>
          Continue
        </SubmitButton>
      </Form>
    </div>
  );
};

export default PersonalDetails;
