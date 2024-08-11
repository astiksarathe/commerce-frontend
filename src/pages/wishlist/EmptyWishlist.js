import React from "react";

import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const EmptyWishlist = () => {
  return (
    <div className="min-h-[32rem] flex flex-col gap-y-4 items-center justify-center">
      <HeartOutlined
        style={{
          fontSize: "188px",
          color: "rgba(142,142,142,.2)",
          fontWeight: 400,
        }}
      />
      <h1>WISHLIST IS EMPTY.</h1>
      <div className="text-center text-zinc-400 leading-6 text-sm">
        You don't have any products in the wishlist yet. <br />
        You will find a lot of interesting products on our "Shop" page.
      </div>
      <Button
        className="bg-black text-white"
        style={{ padding: "12px 28px", height: "auto" }}
      >
        RETURN TO SHOP
      </Button>
    </div>
  );
};

export default EmptyWishlist;
