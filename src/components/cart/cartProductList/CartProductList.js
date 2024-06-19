import React from "react";
import "./cartProductList.scss";
import { Link } from "react-router-dom";
import QtyInput from "../../qtyInput";
const CartProductList = () => {
  return (
    <section className="cart__productlist-container">
      <ul>
        <li className="cart__productlist-item">
          <div className="cart__productlist-image">
            <img src={"/assets/dummy.jpeg"} alt="" />
          </div>
          <div className="cart__product-details">
            <div className="cart__product-row1">
              <div>
                <div className="cart__product-title">
                  <h3>
                    <Link to={""}>3D Crystal Moon Ball</Link>
                  </h3>
                </div>
                <div className="cart__product-variants">
                  <p className="cart__product-variant">Moon</p>
                  <p className="cart__product-variant">6mm</p>
                </div>
                <p className="cart__product-price">Rs 499</p>
              </div>
              <div className="cart__product-quantity">
                <QtyInput value={10} />
              </div>
            </div>
            <p className="cart__product-stock">In stock</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CartProductList;
