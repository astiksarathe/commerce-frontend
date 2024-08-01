import React from "react";
import { Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { checkoutFormHandler } from "../../../../../features/checkout";
const Payment = () => {
  const dispatch = useDispatch();
  const {
    checkoutForm: { paymentStatus, subscribeToUpdate },
  } = useSelector((state) => state.checkout);
  const paymentSelectHandler = (selectedMode) => {
    dispatch(
      checkoutFormHandler({ name: "paymentMode", value: selectedMode, key: "paymentStatus" })
    );
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
            onClick={() => paymentSelectHandler(1)}
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
        <Button type="primary" size="large">
          {paymentStatus.paymentMode === 3 ? <span>Complete Order</span> : <span>Pay now</span>}
        </Button>
      </div>
    </div>
  );
};

export default Payment;
