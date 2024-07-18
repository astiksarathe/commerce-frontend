import React, { useState } from "react";
import { Button, Input, Modal, Form, Checkbox } from "antd";
import "./checkout.scss";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

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
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={[]}
        className="checkout-modal"
      >
        <main className="checkout-container">
          <div className="checkout-form">
            <CheckoutForm />
          </div>
          <OrderSummary />
        </main>
      </Modal>
    </>
  );
};

export default Checkout;
