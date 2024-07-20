import React from "react";
import { Modal } from "antd";
import "./checkout.scss";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import { checkoutModelHandler } from "../../features/checkout";
import ShippingMethods from "./ShippingMethods";

const Checkout = () => {
  const { isCheckoutModelOpen } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(checkoutModelHandler(false));
  };

  const handleCancel = () => {
    dispatch(checkoutModelHandler(false));
  };

  return (
    <Modal
      style={{ top: 0 }}
      maskClosable={false}
      open={isCheckoutModelOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
      width={800}
      className="checkout_modal"
    >
      <main className="checkout_wrapper">
        <div className="checkout_left-section">
          <CheckoutForm />
          <ShippingMethods />
          <Payment />
        </div>
        <div className="checkout_right-section">
          <OrderSummary />
        </div>
      </main>
    </Modal>
  );
};

export default Checkout;
