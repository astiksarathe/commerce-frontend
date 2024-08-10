import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EmptyCart } from "../../components/cart";
import { CartProductList, CartSummary } from "../../components/cart";

import { cartDrawerHandler } from "../../features/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(cartDrawerHandler(false));
  }, [dispatch]);

  return (
    <div className="container mx-auto p-2 sm:p-0">
      {cartList.length === 0 && <EmptyCart />}
      {cartList.length !== 0 && (
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <CartProductList carts={cartList} />
          <CartSummary carts={cartList} />
        </div>
      )}
    </div>
  );
};

export default Cart;
