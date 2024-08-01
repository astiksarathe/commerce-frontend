import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";

import { checkoutModelHandler } from "../../features/checkout";
import OrderSummary from "./steps/common/orderSummary/OrderSummary";
import Coupon from "./steps/common/coupon/Coupon";

import FirstStep from "./steps/firstStep";
import SecondStep from "./steps/secondStep";
import ThirdStep from "./steps/thirdStep";

import ShippingDrawer from "./shippingAddress/ShippingDrawer";

import Footer from "./steps/common/footer/Footer";
import Header from "./steps/common/header/Header";
import ExitCheckout from "./steps/common/exitCheckout/ExitCheckout";
import ConfirmOrder from "./steps/thirdStep/confirmOrder/ConfirmOrder";

import "./checkout.scss";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const { isCheckoutModelOpen } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(checkoutModelHandler(false));
  };
  useEffect(() => {
    if (isCheckoutModelOpen) {
      document.body.classList.add("checkout-model-open");
    } else {
      document.body.classList.remove("checkout-model-open");
    }
    return () => {
      document.body.classList.remove("checkout-model-open");
    };
  }, [isCheckoutModelOpen]);

  const stepHandler = (currentStage) => {
    if (currentStage < 1 || currentStage > 3) return;
    setStep(currentStage);
  };
  return (
    <Modal
      closeIcon={false}
      style={{ top: 0 }}
      open={isCheckoutModelOpen}
      width={500}
      footer={[]}
      className="checkout_modal"
    >
      <main className="checkout_wrapper">
        <Header />
        <div className="checkout_card_container">
          <OrderSummary />
        </div>
        <div className="checkout_card_container">
          <Coupon />
        </div>
        {step === 1 && <FirstStep stepHandler={stepHandler} />}
        {step === 2 && <SecondStep stepHandler={stepHandler} />}
        {step === 3 && <ThirdStep stepHandler={stepHandler} />}

        <Footer key={1} />

        <ShippingDrawer />
        <ExitCheckout />
        <ConfirmOrder />
      </main>
    </Modal>
  );
};

export default Checkout;
