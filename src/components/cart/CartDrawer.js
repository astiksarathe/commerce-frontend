import { MinusOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { cartDrawerHandler } from "../../features/cart";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { isCartDrawerOpen } = useSelector((state) => state.cart);
  return (
    <Drawer
      className="login_drawer"
      title="SHOPPING CART"
      placement={"right"}
      width={340}
      onClose={() => dispatch(cartDrawerHandler(false))}
      open={isCartDrawerOpen}
      extra={
        <Space>
          <Button
            type="text"
            style={{ color: "white", fontSize: 14 }}
            onClose={() => dispatch(cartDrawerHandler(false))}
          >
            CLOSE
            <MinusOutlined style={{ color: "white", fontSize: 14 }} />
          </Button>
        </Space>
      }
    ></Drawer>
  );
};

export default CartDrawer;
