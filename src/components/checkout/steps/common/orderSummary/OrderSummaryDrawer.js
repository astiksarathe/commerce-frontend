import React from "react";
import { useSelector } from "react-redux";

import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { formatCurrency } from "../../../../../utils/common";

const OrderSummaryDrawer = ({ close, isOpen }) => {
  const {
    checkoutForm: { products, subtotal, shipping },
  } = useSelector((state) => state.checkout);

  const getTotalShipping = () => {
    let totalAmount = 0;

    if (shipping.shippingCharges) {
      totalAmount += shipping.shippingCharges;
    }
    if (subtotal) {
      totalAmount += subtotal;
    }

    return totalAmount;
  };

  return (
    <Drawer
      title={
        <div className="text-base font-semibold flex items-center justify-between mb-2 text-zinc-800">
          <span>
            Order Summary ({products.length}{" "}
            {products.length > 1 ? "Items" : "Item"})
          </span>
          <button type="button" className="bg-transparent" onClick={close}>
            <CloseOutlined />
          </button>
        </div>
      }
      placement="bottom"
      closable={false}
      onClose={close}
      open={isOpen}
      getContainer={false}
      className="drawers"
    >
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div
              className="my-2 p-4 bg-white min-h-4 rounded-lg shadow-card box-border"
              key={product.SKU}
            >
              <div className="flex py-2">
                <div className="relative w-16 h-16 mr-4">
                  <img
                    src={product.thumbnilImg}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-md text-sm"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-sm font-medium text-zinc-900 truncate">
                    {product.title}
                  </p>
                  <div className="flex text-sm text-zinc-600">
                    <span className="mr-2">Quantity: {product.quantity}</span>
                  </div>
                  <div className="text-sm text-zinc-600">
                    <span className="mr-2">Price:</span>
                    <span>{formatCurrency(product.price.sellingPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="font-medium text-base px-1">
        <div className="flex items-center justify-between">
          <p className="leading-none my-1 text-sm text-zinc-800 font-normal">
            Subtotal
          </p>
          <p className="eading-none my-1 text-sm text-zinc-800 font-normal">
            {formatCurrency(subtotal)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="leading-none my-1 text-sm text-zinc-800 font-normal">
            Coupon Discount
          </p>
          <p className="eading-none my-1 text-sm font-normal text-green-700">
            {formatCurrency(0)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="leading-none my-1 text-sm text-zinc-800 font-normal">
            Shipping
          </p>
          <p className="eading-none my-1 text-sm text-zinc-800 font-normal">
            {shipping.shippingCharges === 0 ? (
              <span>FREE</span>
            ) : (
              `+ ${formatCurrency(shipping.shippingCharges)}`
            )}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t">
          <p className="eading-none my-1 text-sm text-zinc-800 font-normal">
            Total amount
          </p>
          <p className="eading-none my-1 text-base text-zinc-800 font-semibold">
            {formatCurrency(getTotalShipping())}
          </p>
        </div>
      </div>
    </Drawer>
  );
};

export default OrderSummaryDrawer;
