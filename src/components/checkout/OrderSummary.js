import React from "react";
import "./checkout.scss";
import { Button, Form, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const OrderSummary = () => {
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
    <div>
      <div className="order_summary_wrapper">
        <p className="order_summary_heading">
          <ShoppingCartOutlined style={{ fontSize: "20px", marginRight: "5px", fontWeight: 700 }} />{" "}
          <span>Order Summary</span>
        </p>
        {products.length &&
          products.map((product) => {
            return (
              <div className="order_products_wrapper" key={product.SKU}>
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
            <p className="order_totals_value">Rs {subtotal}</p>
          </div>
          <div className="order_discount">
            <p className="order_totals_heading">Coupon Discount</p>
            <p className="order_totals_value">Rs 0.00</p>
          </div>
          <div className="order_shipping">
            <p className="order_totals_heading">Shipping</p>
            <p className="order_totals_value">
              {shipping.shippingCharges === 0 ? (
                <span>FREE</span>
              ) : (
                `+ Rs ${shipping.shippingCharges}`
              )}
            </p>
          </div>
          <div className="order_topay">
            <p className="order_topay_heading">Total</p>
            <p className="order_topay_value">{getTotalShipping()}</p>
          </div>
        </div>
      </div>
      <div className="coupon_code_wrapper">
        <Form
          name="trigger"
          variant="filled"
          style={{ maxWidth: 700 }}
          layout="vertical"
          autoComplete="off"
        >
          <div className="coupen_code">
            <Form.Item name="discountCode" validateTrigger="onBlur">
              <Input size="large" placeholder="Enter Discount Code" />
            </Form.Item>
            <Button size="large" type="primary">
              Apply
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default OrderSummary;
