import React from "react";
import { useSelector } from "react-redux";

import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./order-summary.scss";
const OrderSummaryDrawer = ({ open, close, isOpen }) => {
  const {
    checkoutForm: { products, subtotal, shipping },
  } = useSelector((state) => state.checkout);

  const getTotalShipping = () => {
    let totalAmount = 0;

    if (shipping.shippingCharges) {
      totalAmount += shipping.shippingCharges;
    }
    if (subtotal) {
      totalAmount += subtotal;
    }

    return totalAmount;
  };

  return (
    <Drawer
      title={
        <div className="order_summary_title">
          <span>
            Order Summary ({products.length} {products.length > 1 ? "Items" : "Item"})
          </span>
          <button type="button" onClick={close}>
            <CloseOutlined />
          </button>
        </div>
      }
      placement="bottom"
      closable={false}
      onClose={close}
      open={isOpen}
      getContainer={false}
      className="order_summary_drawer"
    >
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div className="order_products_wrapper checkout_card" key={product.SKU}>
              <div className="order_product_wrapper">
                <div className="order_product_img">
                  <img src={product.thumbnilImg} alt={"product"} />
                </div>
                <div className="order_product_details">
                  <p className="order_product_title">{product.productTitle}</p>
                  <div className="order_product_quantity">
                    <span>Quantity:</span>
                    <span>{product.quantity}</span>
                  </div>
                  <div className="order_product_price">
                    <span>Price:</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="order_totals_wrapper">
        <div className="order_subtotal">
          <p className="order_totals_heading">Subtotal</p>
          <p className="order_totals_value">₹ {subtotal}</p>
        </div>
        <div className="order_discount">
          <p className="order_totals_heading">Coupon Discount</p>
          <p className="order_totals_value">₹ 0.00</p>
        </div>
        <div className="order_shipping">
          <p className="order_totals_heading">Shipping</p>
          <p className="order_totals_value">
            {shipping.shippingCharges === 0 ? <span>FREE</span> : `+ ₹ ${shipping.shippingCharges}`}
          </p>
        </div>
        <div className="order_topay">
          <p className="order_topay_heading">Total amount</p>
          <p className="order_topay_value">{getTotalShipping()}</p>
        </div>
      </div>
    </Drawer>
  );
};

export default OrderSummaryDrawer;
