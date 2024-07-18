import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./checkout.scss";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [checked, setChecked] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        style={{ top: 0 }}
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={800}
        className="checkout_modal"
      >
        <main className="checkout_wrapper">
          <div className="checkout_left-section">
            <CheckoutForm />
            <Payment />
          </div>
          <div className="checkout_right-section">
            <OrderSummary />
          </div>
        </main>
      </Modal>
    </>
  );
};

export default Checkout;
