import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import {
  checkoutModelHandler,
  moveToCheckout,
} from "../../../features/checkout";

import { formatCurrency } from "../../../utils/common";

const CartSummary = () => {
  const dispatch = useDispatch();
  const { cartValue, cartList } = useSelector((state) => state.cart);

  const checkoutHandler = () => {
    dispatch(moveToCheckout(cartList));
    dispatch(checkoutModelHandler(true));
  };
  return (
    <section className="mt-16 rounded-md bg-zinc-50/100 px-4 py-6 sm:p-6 lg:mt-0 lg:col-span-5 lg:p-8">
      <h2
        className="text-lg leading-7 font-medium text-zinc-900"
        id="order-summary-heading"
      >
        Order summary
      </h2>
      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm leading-5 text-zinc-500">Subtotal</dt>
          <dd className="text-sm leading-5 font-medium text-zinc-900">
            {formatCurrency(cartValue)}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
          <dt className="text-sm leading-5 text-zinc-500 flex items-center">
            Coupon Discount <QuestionCircleFilled className="ml-1" />
          </dt>
          <dd className="text-sm leading-5 font-medium text-zinc-900">
            -{formatCurrency()}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
          <dt className="text-sm leading-5 text-zinc-500 flex items-center">
            Shipping <QuestionCircleFilled className="ml-1" />
          </dt>
          <dd className="text-sm leading-5 font-medium text-zinc-900">
            Yet to be added
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
          <dt className="text-base leading-6 font-medium text-zinc-900">
            Total
          </dt>
          <dd className="text-base leading-6 font-medium text-zinc-900">
            {formatCurrency(cartValue)}
          </dd>
        </div>
      </dl>
      <div className="mt-6">
        <Button
          className="h-12 bg-zinc-900 text-white w-full"
          type="primary"
          onClick={checkoutHandler}
        >
          Checkout
        </Button>
      </div>
    </section>
  );
};

export default CartSummary;
