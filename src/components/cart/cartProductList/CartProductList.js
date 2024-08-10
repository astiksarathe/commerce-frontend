import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CloseOutlined } from "@ant-design/icons";

import { addToCart, removeFromCart } from "../../../features/cart";

import { formatCurrency } from "../../../utils/common";

import QtyInput from "../../qtyInput";

import "./cartProductList.scss";

const CartProductList = (props) => {
  const dispatch = useDispatch();

  const cartQunatityHandler = (value, product) => {
    dispatch(addToCart({ ...product, quantity: value }));
  };

  const removeCart = (product) => {
    dispatch(removeFromCart({ ...product }));
  };

  return (
    <section className="cart__productlist-container">
      <ul>
        {props.carts.map((product) => (
          <li className="cart__productlist-item" key={product.url}>
            <div className="cart__productlist-image">
              <img src={"/assets/dummy.jpeg"} alt="" />
            </div>
            <div className="cart__product-details">
              <div className="cart__product-row1">
                <div>
                  <div className="cart__product-title">
                    <h3>
                      <Link to={`/product/${product.url}`}>
                        {product.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="cart__product-variants">
                    <p className="cart__product-variant">
                      {product.variantName}
                    </p>
                  </div>
                  <p className="cart__product-price">
                    {formatCurrency(product.price.sellingPrice)}
                  </p>
                </div>
                <div className="cart__product-quantity">
                  <QtyInput
                    value={product.quantity}
                    quantityHandler={(updatedValue) =>
                      cartQunatityHandler(updatedValue, product)
                    }
                  />
                  <div className="cart-close-icon">
                    <CloseOutlined onClick={() => removeCart(product)} />
                  </div>
                </div>
              </div>
              <p className="cart__product-stock">In stock</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CartProductList;
