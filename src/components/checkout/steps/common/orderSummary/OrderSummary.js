import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RightOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import OrderSummaryDrawer from "./OrderSummaryDrawer";

import { formatCurrency } from "../../../../../utils/common";

const OrderSummary = () => {
  const [summaryDrawer, setSummaryDrawer] = useState(false);
  const {
    checkoutForm: { totalAmount, products },
  } = useSelector((state) => state.checkout);

  const openSummaryDrawer = () => setSummaryDrawer(true);

  const closeSummaryDrawer = () => setSummaryDrawer(false);

  return (
    <>
      <div
        className="bg-transparent flex justify-between items-center"
        onClick={openSummaryDrawer}
        role="button"
        tabIndex={0}
        aria-label="Open Order Summary"
      >
        <div className="flex items-center">
          <ShoppingCartOutlined
            style={{ fontSize: "20px", marginRight: "5px", fontWeight: 700 }}
          />
          <p className="text-base font-medium text-zinc-700">
            <span>Order Summary</span>
            <span className="text-sm font-normal mx-2">
              ({products.length} {products.length > 1 ? "Items" : "Item"})
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-base font-medium text-zinc-700">
            {formatCurrency(totalAmount)}
          </p>
          <RightOutlined className="ml-2" />
        </div>
      </div>
      <OrderSummaryDrawer
        isOpen={summaryDrawer}
        open={openSummaryDrawer}
        close={closeSummaryDrawer}
      />
    </>
  );
};

export default OrderSummary;
