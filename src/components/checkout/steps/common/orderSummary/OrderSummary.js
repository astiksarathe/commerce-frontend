import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RightOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import OrderSummaryDrawer from "./OrderSummaryDrawer";
import { formatCurrency } from "../../../../../utils/common";

import "./order-summary.scss";

const OrderSummary = () => {
  const [summaryDrawer, setSummaryDrawer] = useState(false);
  const {
    checkoutForm: { totalAmount },
  } = useSelector((state) => state.checkout);

  const openSummaryDrawer = () => setSummaryDrawer(true);

  const closeSummaryDrawer = () => setSummaryDrawer(false);

  return (
    <>
      <button className="bg-transparent order_summary_min_wrapper" onClick={openSummaryDrawer}>
        <p className="order_summary_heading">
          <ShoppingCartOutlined style={{ fontSize: "20px", marginRight: "5px", fontWeight: 700 }} />{" "}
          <span>Order Summary</span>
          <span className="order_summary_item_count">(1 item)</span>
        </p>
        <div>
          <p className="order_totals_amount"> {formatCurrency(totalAmount)}</p>
          <button className="bg-transparent" onClick={openSummaryDrawer}>
            <RightOutlined />
          </button>
        </div>
      </button>

      <OrderSummaryDrawer
        isOpen={summaryDrawer}
        open={openSummaryDrawer}
        close={closeSummaryDrawer}
      />
    </>
  );
};

export default OrderSummary;
