import { Button } from "antd";
import "./cartDrawer.scss";
const { ShoppingCartOutlined } = require("@ant-design/icons");

const EmptyCart = () => (
  <div className="cart-empty">
    <ShoppingCartOutlined className="cart-empty-icon" />
    <h1>Your cart is currently empty.</h1>
    <div className="cart-empty-message">
      Before proceeding to checkout, you must add some products to your shopping cart.
      <br />
      You will find many interesting products on our "Shop" page.
    </div>
    <Button className="btn-black" style={{ padding: "12px 28px", height: "auto" }}>
      Return to Shop
    </Button>
  </div>
);

export default EmptyCart;
