import React from "react";
import { Button, Form, Input } from "antd";

const Coupon = () => {
  return (
    <Form
      name="discountForm"
      variant="filled"
      style={{ maxWidth: 700 }}
      layout="vertical"
      autoComplete="off"
    >
      <div className="grid grid-cols-4 gap-2">
        <Form.Item
          className="col-span-3 mb-0"
          name="discountCode"
          validateTrigger="onBlur"
        >
          <Input size="large" placeholder="Enter Discount Code" />
        </Form.Item>
        <Button className="col-span-1" size="large" type="primary">
          Apply
        </Button>
      </div>
    </Form>
  );
};

export default Coupon;
