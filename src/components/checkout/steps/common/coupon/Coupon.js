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
      <div className="coupen_code">
        <Form.Item name="discountCode" validateTrigger="onBlur">
          <Input size="large" placeholder="Enter Discount Code" />
        </Form.Item>
        <Button size="large" type="primary">
          Apply
        </Button>
      </div>
    </Form>
  );
};

export default Coupon;
