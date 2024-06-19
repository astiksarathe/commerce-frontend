import React from "react";
import "./cartSummary.scss";
import { Button } from "antd";
const CartSummary = () => {
  return (
    <section className="cart-summary">
      <h2 id="summary-heading" className="">
        Order summary
      </h2>
      <dl className="cart-dl">
        <div className="cart-price-detail">
          <dt className="cart-price-term">subtotal</dt>
          <dd className="cart-price-desc">Rs 400</dd>
        </div>
        <div className="cart-price-detail">
          <dt className="cart-price-term">subtotal</dt>
          <dd className="cart-price-desc">Rs 400</dd>
        </div>
        <div className="cart-price-detail">
          <dt className="cart-price-term">subtotal</dt>
          <dd className="cart-price-desc">Rs 400</dd>
        </div>
        <div className="cart-price-detail">
          <dt className="cart-order-total">subtotal</dt>
          <dd className="cart-order-total">Rs 400</dd>
        </div>
      </dl>
      <div className="cart-checkout-btn">
        <Button className="btn-black" type="primary" block>
          {" "}
          Checkout{" "}
        </Button>
      </div>
    </section>
  );
};

export default CartSummary;
