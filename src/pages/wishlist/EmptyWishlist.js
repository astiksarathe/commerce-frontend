import { HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./wishlist.scss";

const EmptyWishlist = () => {
  return (
    <div className="wishlist_empty">
      <HeartOutlined
        style={{
          fontSize: "188px",
          color: "rgba(142,142,142,.2)",
          fontWeight: 400,
        }}
      />
      <h1>WISHLIST IS EMPTY.</h1>
      <div>
        You don't have any products in the wishlist yet. <br />
        You will find a lot of interesting products on our "Shop" page.
      </div>
      <Button className="black-button" style={{ padding: "12px 28px", height: "auto" }}>
        RETURN TO SHOP
      </Button>
    </div>
  );
};

export default EmptyWishlist;
