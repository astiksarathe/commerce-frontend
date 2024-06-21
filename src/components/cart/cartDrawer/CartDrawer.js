import { MinusOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartDrawerHandler, removeFromCart } from "../../../features/cart";
import { useNavigate } from "react-router-dom";

import "./cartDrawer.scss";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCartDrawerOpen, cartList } = useSelector((state) => state.cart);
  const removeCart = (product) => {
    dispatch(removeFromCart({ ...product }));
  };
  return (
    <Drawer
      className="login_drawer"
      title="SHOPPING CART"
      placement="right"
      width={380}
      onClose={() => dispatch(cartDrawerHandler(false))}
      open={isCartDrawerOpen}
      extra={
        <Space>
          <Button
            type="text"
            style={{ color: "white", fontSize: 14 }}
            onClick={() => dispatch(cartDrawerHandler(false))}
          >
            CLOSE
            <MinusOutlined style={{ color: "white", fontSize: 14 }} />
          </Button>
        </Space>
      }
      footer={
        <div className="cart__drawer-footer">
          <div class="cart__drawer-subtotal">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p class="cart__drawer-shipping">Shipping and taxes calculated at checkout.</p>
          <Button className="btn-black" type="primary" block>
            Check out
          </Button>
          <Button type="link" block onClick={() => navigate("/cart")}>
            View Cart
          </Button>
        </div>
      }
    >
      <ul className="cart">
        {cartList.map((product) => (
          <li className="cart-item">
            <div className="cart-item__image-container">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                className="cart-item__image"
              />
            </div>
            <div className="cart-item__details">
              <div className="cart-item__title-container">
                <h3>
                  <Link to="/" className="cart-item__title">
                    Throwback Hip Bag
                  </Link>
                </h3>
                <p className="cart-item__price">{}</p>
              </div>
              <p className="cart-item__color">Salmon</p>
              <div className="cart-item__actions">
                <p className="cart-item__quantity">Qty {}</p>
                <div>
                  <button
                    type="button"
                    className="cart-item__remove-button"
                    onClick={() => removeCart(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default CartDrawer;
