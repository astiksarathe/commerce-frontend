import React from "react";
import Button from "../../components/ui/button";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const EmptyWishlist = () => {
  const navigate = useNavigate();
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
      <div className="w-44">
        <Button onClick={() => navigate("/shop")}>RETURN TO SHOP</Button>
      </div>
    </div>
  );
};

export default EmptyWishlist;
