import React, { useEffect } from "react";
import { EmptyCart } from "../../components/cart";
import { useDispatch } from "react-redux";
import { cartDrawerHandler } from "../../features/cart";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartDrawerHandler(false));
  }, []);
  return <EmptyCart />;
};

export default Cart;
