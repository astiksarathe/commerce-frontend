import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const ConfirmOrder = () => {
  const onClose = () => {};
  return (
    <div className="confirm_order_container">
      <div className="confirm_order_title_wrapper">
        <span className="confirm_order_title">Confirm your order</span>
        <button className="confirm_order_close_btn" type="button" onClick={onClose}>
          <CloseOutlined />
        </button>
      </div>
      <div className="confirm_order_total_wrapper">
        <div className="confirm_order_total">
          <span>Total amount:</span>
          <span>Rs 9898</span>
        </div>
        <div className="confirm_order_COD">Incl. Rs731.9 COD charges</div>
      </div>
      <div className="confirm_order_btn_wrapper">
        <Button type="primary" block size="large">
          Confirm & place order
        </Button>
        <Button type="" block size="large">
          Pay now (save upto 10%)
        </Button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
