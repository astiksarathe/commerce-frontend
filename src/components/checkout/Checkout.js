import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "antd";
import { SyncOutlined } from "@ant-design/icons";

import Coupon from "./steps/common/coupon/Coupon";
import Footer from "./steps/common/footer/Footer";
import Header from "./steps/common/header/Header";
import OrderSummary from "./steps/common/orderSummary/OrderSummary";
import ExitCheckout from "./steps/common/exitCheckout/ExitCheckout";

import FirstStep from "./steps/firstStep";
import SecondStep from "./steps/secondStep";
import ThirdStep from "./steps/thirdStep";
import ConfirmOrder from "./steps/thirdStep/confirmOrder/ConfirmOrder";

import ShippingDrawer from "./shippingAddress/ShippingDrawer";

import { initiateOrder } from "../../features/order";

import "./checkout.scss";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const {
    isCheckoutModelOpen,
    checkoutForm: { products },
  } = useSelector((state) => state.checkout);

  const { isLoading, preOrder } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isCheckoutModelOpen) {
      dispatch(initiateOrder(products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isCheckoutModelOpen]);

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

  useEffect(() => {
    if (!isCheckoutModelOpen) {
      setStep(1);
    }
  }, [isCheckoutModelOpen]);

  if (!isCheckoutModelOpen) {
    return null;
  }

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
      {isLoading && preOrder === null ? (
        <main className="bg-white h-screen flex justify-center items-center">
          <div>
            <div className="text-center">
              <SyncOutlined spin style={{ fontSize: "32px" }} />
            </div>
            <div className="my-2 tracking-wider">Intiating Checkout</div>
          </div>
        </main>
      ) : (
        <main className="checkout_wrapper">
          <Header />
          <div
            className="checkout_card_container"
            style={{ marginTop: "1rem" }}
          >
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
      )}
    </Modal>
  );
};

export default Checkout;
