import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";

import { orderConfirmModalHandler } from "../../../../../features/orderConfirmModal";

import "./confirm-order.scss";

const ConfirmOrder = () => {
  const { isOrderConfirmModalOpen } = useSelector((state) => state.orderConfirm);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(orderConfirmModalHandler(false));
  };
  return (
    <Drawer
      title={
        <div className="order_summary_title">
          <span>Confirm your order</span>
          <button className="confirm_order_close_btn" type="button" onClick={onClose}>
            <CloseOutlined />
          </button>
        </div>
      }
      className="order_confirm_drawer"
      placement="bottom"
      height={250}
      closable={false}
      onClose={onClose}
      open={isOrderConfirmModalOpen}
      getContainer={false}
    >
      <div className="confirm_order_container">
        <div className="confirm_order_total_wrapper">
          <div className="confirm_order_total">
            <span>Total amount:</span>
            <span>₹ 9898</span>
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
    </Drawer>
  );
};

export default ConfirmOrder;
