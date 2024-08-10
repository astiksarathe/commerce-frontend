import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Drawer, Space } from "antd";
import { MinusOutlined } from "@ant-design/icons";

import {
  addToCart,
  cartDrawerHandler,
  removeFromCart,
} from "../../../features/cart";

import QtyInput from "../../qtyInput";

import { formatCurrency } from "../../../utils/common";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCartDrawerOpen, cartList, cartValue } = useSelector(
    (state) => state.cart
  );

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
        <div className="mt-4 mb-12 gap-1">
          <div className="flex justify-between text-zinc-900 text-base leading-4">
            <div>Subtotal</div>
            <div>{formatCurrency(cartValue)}</div>
          </div>
          <div className="text-zinc-600 text-sm leading-5 mt-1 mb-4">
            Shipping and taxes calculated at checkout.
          </div>
          <Button
            className="bg-zinc-950 text-white hover:bg-zinc-900"
            size="large"
            block
          >
            Check out
          </Button>
          <Button type="link" block onClick={() => navigate("/cart")}>
            View Cart
          </Button>
        </div>
      }
    >
      <ul>
        {cartList.map((product) => (
          <li className="flex mb-4" key={product.productId}>
            <div className="size-24 overflow-hidden flex-shrink-0 rounded">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium leading-6 text-black">
                <h3>
                  <Link
                    to={`/${product.url}`}
                    className="no-underline hover:text-zinc-500"
                  >
                    {product.title}
                  </Link>
                </h3>
              </div>
              <div className="text-sm text-zinc-600">
                Variant : {product.variant}
              </div>
              <div className="mt-2">{formatCurrency(product.sellingPrice)}</div>
              <div className="flex flex-1 justify-between items-end text-sm leading-5 pt-2">
                <div className="text-gray-500">
                  <QtyInput
                    value={product.quantity}
                    quantityHandler={(quantity) => {
                      if (quantity === 0) {
                        removeCart(product);
                      } else {
                        productQuantityHandler(product, quantity);
                      }
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="bg-transparent text-indigo-600 cursor-pointer font-medium hover:text-indigo-500"
                  onClick={() => removeCart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default CartDrawer;
