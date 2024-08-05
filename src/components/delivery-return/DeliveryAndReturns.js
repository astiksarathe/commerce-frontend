import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer } from "antd";

import { deliveryInfoOpenHandler } from "../../features/drawer";

const DeliveryAndReturns = () => {
  const { deliveryInfoOpen } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  return (
    <Drawer
      className="rounded-tl-3xl rounded-tr-3xl"
      closable={false}
      placement="bottom"
      height={430}
      onClose={() => {
        dispatch(deliveryInfoOpenHandler(false));
      }}
      open={deliveryInfoOpen}
      footer={[]}
    >
      <div className="container m-auto space-y-3">
        <h2 className="text-sm tracking-wide font-medium">Delivery Information</h2>
        <h5 className="text-base tracking-wide font-medium mb-3 leading-relaxed">
          Delivery Charges ( Pan India )&nbsp;
          <span className="text-green-600">FREE</span>
        </h5>
        <div>
          <h5 className="text-base tracking-wide font-medium mb-3 leading-relaxed">
            Estimated Delivery Time
          </h5>
        </div>
        <div className="space-y-1">
          <h2 className="text-sm tracking-wide font-medium">Prepaid Orders:</h2>{" "}
          <div className="space-y-2">
            <p className="text-sm">
              Same Region (Madhya Pradesh, Gujarat, and Maharashtra)&nbsp;
              <span className="text-green-600">2 – 3 days</span>
            </p>
            <p>
              Rest of India <span className="text-green-600">5 – 7 days</span>
            </p>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-sm tracking-wide font-medium">Cash on Delivery (COD) Orders:</h2>{" "}
          <p className="text-sm">
            <span className="text-green-600">5-7 working days </span>
            after order confirmation
          </p>
        </div>
        <div>
          <p className="text-sm">
            <span className="font-semibold tracking-wide">Note:</span> These shipping details apply
            to standard shipping only. Please be aware that monsoon conditions may affect the
            estimated delivery dates
          </p>
        </div>
        <div className="space-y-1">
          <h5 className="text-base tracking-wide font-medium mb-3 leading-relaxed">Return</h5>
          <p className="text-sm">
            We will accept returns of products within&nbsp;
            <span className="text-green-600">5 days&nbsp;</span>
            <span>of the date of delivery.</span>
          </p>
        </div>
      </div>
    </Drawer>
  );
};
export default DeliveryAndReturns;
