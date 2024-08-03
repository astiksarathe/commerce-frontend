import React from "react";
import { Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { checkoutFormHandler } from "../../../../../features/checkout";
import { orderConfirmModalHandler } from "../../../../../features/orderConfirmModal/OrderConfirmModalSlice";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
const Payment = () => {
  const dispatch = useDispatch();
  const {
    checkoutForm: { personalDetails, paymentStatus, subscribeToUpdate, totalAmount },
  } = useSelector((state) => state.checkout);
  const paymentSelectHandler = (selectedMode) => {
    dispatch(
      checkoutFormHandler({ name: "paymentMode", value: selectedMode, key: "paymentStatus" })
    );
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (paymentStatus.paymentMode === 3) {
      dispatch(orderConfirmModalHandler(true));
    } else if (paymentStatus.paymentMode === 1) {
      paymentHandler(totalAmount, personalDetails, () => {});
    } else {
      paymentHandler(100, personalDetails, () => {});
    }
  };

  const paymentHandler = async (amount, personalDetails, setPaymentStatus) => {
    try {
      const payload = {
        amount: amount * 100, // Ensure the amount is in the smallest currency unit
        currency: "INR",
        receipt: nanoid(),
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}payment/create-order`,
        payload
      );
      const order = response.data;
      console.log(process.env.REACT_APP_RAZORPAY_KEY_ID);
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Ensure this key is set in your .env file
        amount: payload.amount,
        currency: "INR",
        name: "EveryDayGadget",
        description: "Test Transaction",
        image: "https://i.ibb.co/5Y3m33n/test.png",
        order_id: order.id,
        handler: async function (response) {
          try {
            const validateResponse = await axios.post(
              `${process.env.REACT_APP_API_URL}payment/validate`,
              response
            );
            const jsonResponse = validateResponse.data;

            if (jsonResponse.success) {
              setPaymentStatus("Payment successful!");
              // Redirect to a confirmation page or update the UI accordingly
            } else {
              setPaymentStatus("Payment validation failed. Please try again.");
              // Handle validation failure case
            }

            console.log("jsonResponse", jsonResponse);
          } catch (error) {
            setPaymentStatus("Error validating payment. Please try again.");
            console.error("Error validating payment:", error);
          }
        },
        prefill: {
          name: personalDetails.fullName,
          email: personalDetails.email,
          contact: personalDetails.phoneNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        setPaymentStatus("Payment failed. Please try again.");
        console.error("Payment failed:", response);
      });

      rzp1.open();
    } catch (error) {
      setPaymentStatus("Error creating order. Please try again.");
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="payment_container">
      <h1 className="payment_heading">Payment Methods</h1>
      <p className="payment_subheading">All transactions are secure and encrypted.</p>
      <div className="payment_options">
        <div
          className={`payment_option_container ${
            paymentStatus.paymentMode === 1 ? "selected" : ""
          }`}
        >
          <button
            className={`payment_option_wrapper ${paymentStatus.paymentMode === 1 && "selected"}`}
            onClick={() => {
              paymentSelectHandler(1);
            }}
          >
            <h3 className="payment_type">
              <img src="/assets/upiIcon.svg" alt="full payment" style={{ width: "22px" }} />
              {""} UPI/Credit Card/Debit Card
              <span className="saving_message">
                Save upto <strong>10%</strong>
              </span>
            </h3>
          </button>
          {paymentStatus.paymentMode === 1 && (
            <p className="payment_note">
              After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards,
              Wallets, NetBanking) to complete your purchase securely.
            </p>
          )}
        </div>
        <div
          className={`payment_option_container ${
            paymentStatus.paymentMode === 2 ? "selected" : ""
          }`}
        >
          <button
            className={`payment_option_wrapper ${paymentStatus.paymentMode === 2 && "selected"}`}
            onClick={() => paymentSelectHandler(2)}
          >
            <h3 className="payment_type">
              <img src="/assets/bnplIcon.svg" alt="parital pay" style={{ width: "22px" }} />
              {""} Pay with EMI
              <span className="saving_message">{/* Save upto <strong>5%</strong> */}</span>
            </h3>
          </button>
          {paymentStatus.paymentMode === 2 && (
            <>
              <p className="payment_note">
                Installment Payment: Pay ₹100 now and the remaining amount upon delivery (Cash on
                Delivery).
              </p>
              <p className="payment_note">
                After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards,
                Wallets, NetBanking) to complete your purchase securely.
              </p>
            </>
          )}
        </div>
        <div
          className={`payment_option_container ${
            paymentStatus.paymentMode === 3 ? "selected" : ""
          }`}
        >
          <button
            className={`payment_option_wrapper ${paymentStatus.paymentMode === 3 && "selected"}`}
            onClick={() => paymentSelectHandler(3)}
          >
            <h3 className="payment_type">
              <img src="/assets/codIcon.svg" alt="cash on delivery" style={{ width: "22px" }} />
              {""} Cash on Delivery
            </h3>
          </button>
          {paymentStatus.paymentMode === 3 && (
            <p className="payment_note">Pay with cash upon delivery.</p>
          )}
        </div>
      </div>

      <div className="checkout_footer">
        <Checkbox
          name="subscribeToUpdate"
          checked={subscribeToUpdate}
          onChange={(event) => {
            dispatch(
              checkoutFormHandler({
                name: "subscribeToUpdate",
                value: event.target.checked,
              })
            );
          }}
        >
          Notify me for order updates & offers
        </Checkbox>
        <Button type="primary" size="large" onClick={onClickHandler}>
          {paymentStatus.paymentMode === 3 ? <span>Complete Order</span> : <span>Pay now</span>}
        </Button>
      </div>
    </div>
  );
};

export default Payment;
