import React from "react";
import "./checkout.scss";
import { Button, Form, Input } from "antd";
const OrderSummary = () => {
  return (
    <div>
      <div className="order_summary-container"></div>
      <div className="coupon_code-container">
        <Form
          name="trigger"
          variant="filled"
          style={{ maxWidth: 700 }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item label="Your Name" name="fullName" validateTrigger="onBlur">
            <Input
              size="large"
              placeholder="Enter Your Name"
              rules={[{ required: true, message: "Your name is required!" }]}
            />
          </Form.Item>
          <Button type="primary">Apply</Button>
        </Form>
      </div>
    </div>
  );
};

export default OrderSummary;
