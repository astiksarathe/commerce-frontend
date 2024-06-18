import React, { useEffect } from "react";
// import { EmptyCart } from "../../components/cart";
import { useDispatch } from "react-redux";
import { cartDrawerHandler } from "../../features/cart";
import { CartProductList, CartSummary } from "../../components/cart";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartDrawerHandler(false));
  }, []);
  return (
    <div>
      <CartProductList />
      <CartSummary />
    </div>
  );
};

export default Cart;
