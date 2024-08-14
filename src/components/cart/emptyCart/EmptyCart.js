import { useNavigate } from "react-router-dom";

import Button from "../../ui/button";
import { useDispatch } from "react-redux";

import { cartDrawerHandler } from "../../../features/cart";

const { ShoppingCartOutlined } = require("@ant-design/icons");

const EmptyCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const returnToShop = (e) => {
    e.preventDefault();
    dispatch(cartDrawerHandler(false));
    navigate("/shop");
  };

  return (
    <div className="min-h-[32rem] flex flex-col gap-y-4 items-center justify-center">
      <ShoppingCartOutlined
        className="font-normal"
        style={{
          fontSize: "188px",
          color: "rgba(142,142,142,.2)",
        }}
      />
      <h1>Your cart is currently empty.</h1>
      <div className="text-center  text-zinc-400 leading-6">
        Before proceeding to checkout, you must add some products to your
        shopping cart.
        <br />
        You will find many interesting products on our "Shop" page.
      </div>
      <div className="w-40">
        <Button onClick={returnToShop}>Return to Shop</Button>
      </div>
    </div>
  );
};

export default EmptyCart;
