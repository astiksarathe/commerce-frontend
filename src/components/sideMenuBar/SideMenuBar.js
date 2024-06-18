import React from "react";
import { Input, Drawer, Space, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeSideMenuBar } from "../../features/sideMenuBar/sideMenuBarSlice";
import "./sideMenuBar.scss";
import { openAuthDrawer } from "../../features/authDrawer";

const { Search } = Input;

const SideMenuBar = () => {
  const dispatch = useDispatch();
  const { isSideBarOpen } = useSelector((state) => state.sideMenuBar);
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
    {
      key: "BRAND",
      label: (
        <div
          onClick={() => {
            dispatch(openAuthDrawer());
          }}
        >
          LOGIN / REGISTER
        </div>
      ),
    },
  ];

  return (
    <Drawer
      className="side_menu_bar"
      placement={"right"}
      width={280}
      onClose={() => {
        dispatch(closeSideMenuBar());
      }}
      open={isSideBarOpen}
      extra={
        <Space.Compact size="large">
          <Search
            placeholder="Search for products"
            allowClear
            onSearch={() => {}}
            style={{
              width: "100%",
            }}
          />
        </Space.Compact>
      }
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
      />
    </Drawer>
  );
};

export default SideMenuBar;
