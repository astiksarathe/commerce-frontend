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
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Space } from "antd";
import { openSideMenuBar } from "../../features/sideMenuBar/sideMenuBarSlice";
import { openAuthDrawer } from "../../features/authDrawer/authDrawerSlice";
import SideMenuBar from "../sideMenuBar";
import AuthDrawer from "../authDrawer";
import "./header.scss";
import { cartDrawerHandler } from "../../features/cart";
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const { cartList } = useSelector((state) => state.cart);
  const { accessToken } = useSelector((state) => state.auth);
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
      key: "BEST_SELLER",
      label: "BEST SELLER",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const profileMenu = [
    {
      label: <Link to={"/my-account/profile"}>Profile</Link>,
      key: "Profile",
    },
    {
      label: <Link to={"/my-account/orders"}>Orders</Link>,
      key: "Orders",
    },
    {
      label: <Link to={"/"}>Log out</Link>,
      key: "Log_out",
    },
  ];

  const loginMenu = [
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
  ];
  return (
    <>
      <header className="header">
        <div className="container m-auto">
          <div className="header_wrapper">
            <div className="logo"></div>
            <div className="free_area"></div>
            <div className="right-column">
              <div className="header_icon_container desktop_view">
                <Dropdown
                  menu={{ items: accessToken ? profileMenu : loginMenu }}
                  placement="bottomRight"
                >
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
                  <Badge count={0} color="black">
                    <HeartOutlined style={{ fontSize: "22px" }} />
                  </Badge>
                </Link>
              </div>
              <div className="header_icon_container">
                <Link
                  to={"#"}
                  onClick={() => dispatch(cartDrawerHandler(true))}
                >
                  <Badge count={cartList.length} color="black">
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
