import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { orderConfirmModalHandler } from "../../../../../features/orderConfirmModal";
import { formatCurrency } from "../../../../../utils/common";
import { createOrder } from "../../../../../features/order";

import Button from "../../../../ui/button";

const ConfirmOrder = () => {
  const { isOrderConfirmModalOpen } = useSelector(
    (state) => state.orderConfirm
  );
  const { checkoutForm } = useSelector((state) => state.checkout);
  const { isLoading } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(orderConfirmModalHandler(false));
  };

  const createOrderHandler = () => {
    dispatch(
      createOrder({
        ...checkoutForm,
        shippingAddress: {
          ...checkoutForm.shippingAddress,
          ...checkoutForm.personalDetails,
        },
      })
    );
  };
  return (
    <Drawer
      title={
        <div className="flex items-center justify-between mb-2 font-semibold text-base text-zinc-900">
          <span>Confirm your order</span>
          <button className="bg-transparent" type="button" onClick={onClose}>
            <CloseOutlined />
          </button>
        </div>
      }
      className="drawer"
      placement="bottom"
      height={250}
      closable={false}
      onClose={onClose}
      open={isOrderConfirmModalOpen}
      getContainer={false}
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-zinc-900 text-sm font-medium leading-7 -tracking-wider my-1">
            <span className="pr-1">Total amount:</span>
            <span className="pr-1">
              {formatCurrency(checkoutForm.totalAmount)}
            </span>
          </div>
          <div
            className="flex items-center w-max text-red-500 rounded px-3 py-1 font-medium text-sm"
            style={{
              background:
                "linear-gradient(96deg, #FFF8EF 1.5%, #FFD1C3 97.15%)",
            }}
          >
            Incl. {formatCurrency(0)} COD charges
          </div>
        </div>
        <div className="mt-2">
          <Button type="link" loading={isLoading} onClick={createOrderHandler}>
            Confirm & place order
          </Button>
          <Button>Pay now ( save upto 10% )</Button>
        </div>
      </div>
    </Drawer>
  );
};

export default ConfirmOrder;
