import React from "react";
import { Form, Input } from "antd";
import Button from "../../../../../components/ui/button";
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
        <div className="col-span-1">
          <Button className="mt-0 rounded">Apply</Button>
        </div>
      </div>
    </Form>
  );
};

export default Coupon;
