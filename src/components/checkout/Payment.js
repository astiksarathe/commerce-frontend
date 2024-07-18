import React, { useState } from "react";
import { Button, Checkbox, Input, Radio, Space } from "antd";
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [checked, setCheckted] = useState(true);
  return (
    <div className="payment_container">
      <h1 className="payment_heading">Payment Methods</h1>
      <p className="payment_subheading">All transactions are secure and encrypted.</p>
      <div className="payment_options">
        <div className={`payment_option_container ${paymentMethod === 1 ? "selected" : ""}`}>
          <div
            className={`payment_option_wrapper ${paymentMethod === 1 && "selected"}`}
            onClick={() => setPaymentMethod(1)}
          >
            <h3 className="payment_type">
              <img src="/assets/upiIcon.svg" alt="full payment" style={{ width: "22px" }} />
              UPI/Credit Card/Debit Card
              <span className="saving_message">
                Save upto <strong>10%</strong>
              </span>
            </h3>
          </div>
          {paymentMethod === 1 && (
            <>
              <p className="payment_note">
                After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards,
                Wallets, NetBanking) to complete your purchase securely.
              </p>
            </>
          )}
        </div>
        <div className={`payment_option_container ${paymentMethod === 2 ? "selected" : ""}`}>
          <div
            className={`payment_option_wrapper ${paymentMethod === 2 && "selected"}`}
            onClick={() => setPaymentMethod(2)}
          >
            <h3 className="payment_type">
              <img src="/assets/bnplIcon.svg" alt="parital pay" style={{ width: "22px" }} />
              Pay with EMI
              <span className="saving_message">{/* Save upto <strong>5%</strong> */}</span>
            </h3>
          </div>
          {paymentMethod === 2 && (
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
        <div className={`payment_option_container ${paymentMethod === 3 ? "selected" : ""}`}>
          <div
            className={`payment_option_wrapper ${paymentMethod === 3 && "selected"}`}
            onClick={() => setPaymentMethod(3)}
          >
            <h3 className="payment_type">
              <img src="/assets/codIcon.svg" alt="cash on delivery" style={{ width: "22px" }} />
              Cash on Delivery
            </h3>
          </div>
          {paymentMethod === 3 && <p className="payment_note">Pay with cash upon delivery.</p>}
        </div>
      </div>

      <div className="checkout_footer">
        <Checkbox checked={checked} onChange={() => {}}>
          Notify me for order updates & offers
        </Checkbox>
        <Button type="primary" size="large">
          {paymentMethod === 3 ? <span>Complete Order</span> : <span>Pay now</span>}
        </Button>
      </div>
    </div>
  );
};

export default Payment;
