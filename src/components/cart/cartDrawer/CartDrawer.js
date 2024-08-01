import { MinusOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartDrawerHandler, removeFromCart } from "../../../features/cart";
import { useNavigate, Link } from "react-router-dom";
import QtyInput from "../../qtyInput";
import "./cartDrawer.scss";
import { formatCurrency } from "../../../utils/common";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCartDrawerOpen, cartList, cartValue } = useSelector((state) => state.cart);
  const removeCart = (product) => {
    dispatch(removeFromCart({ ...product }));
  };
  const productQuantityHandler = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
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
          <div className="cart__drawer-subtotal">
            <p>Subtotal</p>
            <p>{formatCurrency(cartValue)}</p>
          </div>
          <p className="cart__drawer-shipping">Shipping and taxes calculated at checkout.</p>
          <Button className="btn-black" size="large" type="primary" block>
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
          <li className="cart-item" key={product.productId}>
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
                  <Link to={`/${product.url}`} className="cart-item__title">
                    {product.title}
                  </Link>
                </h3>
              </div>
              <p className="cart-item__price">{formatCurrency(product.sellingPrice)}</p>
              <div className="cart-item__actions">
                <p className="cart-item__quantity">
                  <QtyInput
                    value={product.quantity}
                    quantityHandler={(quantity) => {
                      productQuantityHandler(product, quantity);
                    }}
                  />
                </p>
                <div>
                  <button
                    type="button"
                    className="btn_as_div cart-item__remove-button"
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
