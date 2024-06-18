import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge, Menu } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dropdown, Space } from "antd";
import { openSideMenuBar } from "../../features/sideMenuBar/sideMenuBarSlice";
import { openAuthDrawer } from "../../features/authDrawer/authDrawerSlice";
import SideMenuBar from "../sideMenuBar";
import AuthDrawer from "../authDrawer";
import "./header.scss";
import { cartDrawerHandler } from "../../features/cart";
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const dispatch = useDispatch();
  const items = [
    {
      label: "WHAT'S NEW",
      key: "WHATS_NEW",
    },
    {
      key: "alipay",
      label: "BEST SELLET",
    },
    {
      label: "SHOP",
      key: "SHOP",
      children: [
        {
          type: "group",
          label: "Item 1",
        },
        {
          type: "group",
          label: "Item 2",
        },
      ],
    },
    {
      label: "COLLECTION",
      key: "COLLECTION",
      children: [
        {
          type: "group",
          label: "Item 1",
        },
        {
          type: "group",
          label: "Item 2",
        },
      ],
    },
    {
      key: "BRAND",
      label: "BEST SELLET",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const profileMenuItem = [
    {
      label: <Link to={"/my-account/profile"}>Profile</Link>,
      key: "Profile",
    },
    {
      label: <Link to={"/my-account/orders"}>Orders</Link>,
      key: "Orders",
    },
    {
      label: (
        <div
          onClick={() => {
            dispatch(openAuthDrawer());
          }}
        >
          Log In
        </div>
      ),
      key: "Log_In",
    },
    {
      label: <Link to={"/"}>Log out</Link>,
      key: "Log_out",
    },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_wrapper">
            <div className="logo"></div>
            <div className="free_area"></div>
            <div className="right-column">
              <div className="header_icon_container desktop_view">
                <Dropdown menu={{ items: profileMenuItem }} placement="bottomRight">
                  <Space>
                    <UserOutlined style={{ fontSize: "22px" }} />
                  </Space>
                </Dropdown>
              </div>
              <div className="header_icon_container desktop_view">
                <Link to={"search"}>
                  <SearchOutlined style={{ fontSize: "22px" }} />
                </Link>
              </div>

              <div className="header_icon_container">
                <Link to="wishlist">
                  <Badge count={5} color="black">
                    <HeartOutlined style={{ fontSize: "22px" }} />
                  </Badge>
                </Link>
              </div>
              <div className="header_icon_container">
                <Link to={"#"} onClick={() => dispatch(cartDrawerHandler(true))}>
                  <Badge count={5} color="black">
                    <ShoppingOutlined style={{ fontSize: "22px" }} />
                  </Badge>
                </Link>
              </div>
              <div className="header_icon_container mobile_view">
                <MenuOutlined
                  onClick={() => {
                    dispatch(openSideMenuBar());
                  }}
                  style={{ fontSize: "22px" }}
                />
              </div>
              {/* <ShoppingCartOutlined style={{ fontSize: '22px' }}  /> */}
            </div>
          </div>
        </div>
        <div className="navigation">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            theme="dark"
            style={{
              backgroundClip: "black",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </div>
      </header>
      <SideMenuBar />
      <AuthDrawer />
    </>
  );
};

export default Header;
