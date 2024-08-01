import React, { useEffect } from "react";
import { EmptyCart } from "../../components/cart";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerHandler } from "../../features/cart";
import { CartProductList, CartSummary } from "../../components/cart";
import "./cart.scss";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(cartDrawerHandler(false));
  }, [dispatch]);
  return (
    <div className="container">
      {cartList.length === 0 && <EmptyCart />}
      {cartList.length !== 0 && (
        <div className="cart-main-container">
          <CartProductList carts={cartList} />
          <CartSummary carts={cartList} />
        </div>
      )}
    </div>
  );
};

export default Cart;
