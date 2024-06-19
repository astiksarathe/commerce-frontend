import React, { useEffect } from "react";
// import { EmptyCart } from "../../components/cart";
import { useDispatch } from "react-redux";
import { cartDrawerHandler } from "../../features/cart";
import { CartProductList, CartSummary } from "../../components/cart";
import "./cart.scss";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartDrawerHandler(false));
  }, []);
  return (
    <div className="container">
      <div className="cart-main-container">
        <CartProductList />
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
