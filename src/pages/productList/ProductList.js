import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Checkbox,
  Collapse,
  Dropdown,
  InputNumber,
  Slider,
  Space,
  theme,
} from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import ProductCard, { ProductSkeleton } from "../../components/product-card";

import { getProduct } from "../../features/product";

import {
  CollectionList,
  filterList,
  sortingOptions,
  getSortingOptions,
  prodPerPagOpt,
  prodViewOpt,
  emptyArr20,
} from "../../utils/variable";

const ProductList = () => {
  const [sortedOptions, setSortedOptions] = useState("Default");
  const [productPerPage, setProductPerPage] = useState("24 per page");
  const [productView, setProductView] = useState(prodViewOpt.VIEW_GRID);

  const dispatch = useDispatch();

  const { productList, isLoading } = useSelector((state) => state.product);

  const { token } = theme.useToken();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const panelStyle = {
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const renderListItems = (items) => {
    return items.map(({ title }) => (
      <li className="h-8 pl-2" key={title}>
        <button className="bg-transparent tracking-wider text-zinc-500 hover:text-zinc-900">
          {title}
        </button>
      </li>
    ));
  };

  const renderFilterItems = (item) => {
    switch (item) {
      case "Price":
        return (
          <li>
            <Slider range={{ draggableTrack: true }} />
            <div className="flex justify-between items-center gap-1">
              <InputNumber className="rounded-none" />
              <span className="text-zinc-500">-</span>
              <InputNumber className="rounded-none" />
            </div>
          </li>
        );
      case "Availability":
        return ["In stock (49)", "Out of stock (1)"].map((label, index) => (
          <li className="h-8 pl-2" key={index}>
            <Checkbox className="bg-transparent tracking-wider text-zinc-500 hover:text-zinc-900">
              {label}
            </Checkbox>
          </li>
        ));
      default:
        return null;
    }
  };

  const generatePanelItems = (list, renderItems) =>
    list.map((item, ind) => ({
      key: ind,
      label: (
        <span className="text-zinc-500 hover:text-zinc-900">
          {item.title || item}
        </span>
      ),
      children: <ul>{renderItems(item.children || item)}</ul>,
      style: panelStyle,
    }));

  const filters = generatePanelItems(filterList, renderFilterItems);
  const collections = generatePanelItems(CollectionList, renderListItems);

  const handleDropdownClick = (setter, options, key) => {
    setter(() => {
      const selectedOption = options.find((opt) => opt.key.toString() === key);
      return selectedOption?.label || "Default";
    });
  };

  const renderViewButton = (view, label, icon) => (
    <button
      aria-label={label}
      className={view === productView ? "text-black" : "text-zinc-500"}
      onClick={() => setProductView(view)}
    >
      {icon}
    </button>
  );

  const renderProduct = () => {
    if (isLoading) {
      return emptyArr20.map((_, ind) => (
        <React.Fragment key={ind}>
          <ProductSkeleton />
        </React.Fragment>
      ));
    }
    return productList.map((product) => (
      <React.Fragment key={product._id}>
        <ProductCard product={product} />
      </React.Fragment>
    ));
  };

  return (
    <div className="container mx-auto py-5">
      <div className="flex gap-8">
        <aside className="hidden flex-none lg:block lg:w-64 xl:w-72 bg-zinc-50">
          <div className="p-5 sm:px-6 border-b">
            <h2 className="text-lg font-semibold tracking-wider">
              Collections
            </h2>
            <Collapse
              className="collapse-custom mt-4"
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              style={{ background: token.colorBgContainer }}
              items={collections}
            />
          </div>
          <div className="p-5 sm:px-6">
            <h2 className="text-lg font-semibold tracking-wider">Filters</h2>
            <Collapse
              className="collapse-custom mt-4"
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              style={{ background: token.colorBgContainer }}
              items={filters}
            />
          </div>
        </aside>

        <main className="flex-grow bg-zinc-50">
          <div className="px-2 pt-3 sm:px-7 sm:pt-5 border-b">
            <h1 className="text-2xl font-bold mb-4">Sales</h1>
            <div className="flex items-center justify-between h-12 sm:h-14">
              <div className="flex items-center lg:hidden text-zinc-500">
                <svg
                  focusable="false"
                  className="w-4 h-4 mr-3 text-zinc-500"
                  viewBox="0 0 18 18"
                  role="img"
                  fill={"#71717a"}
                >
                  <path
                    d="M17.0288086 4.01391602L11 9v7.0072021l-4 2.008545V9L1.01306152 4.01391602V1H17.0288086z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="square"
                  ></path>
                </svg>
                <span>Filter</span>
              </div>
              <div className="hidden lg:flex text-sm">
                <div className="mr-20 text-zinc-500">
                  Showing 1 - 24 of 50 products
                </div>
                <div className="flex items-center">
                  <span className="text-zinc-500">Display:</span>
                  <Dropdown
                    placement="bottomRight"
                    menu={{
                      items: prodPerPagOpt,
                      onClick: ({ key }) =>
                        handleDropdownClick(
                          setProductPerPage,
                          prodPerPagOpt,
                          key
                        ),
                    }}
                  >
                    <Space>
                      <span className="hidden sm:block text-zinc-500 text-sm ml-2">
                        {productPerPage}
                      </span>
                      <img
                        className="size-3"
                        src="/assets/icons/down-arrow.svg"
                        alt="Open Sorting Options"
                      />
                    </Space>
                  </Dropdown>
                </div>
              </div>
              <div className="flex items-center xl:mr-11 xl:ml-auto 2xl:mr-20">
                <span className="text-zinc-500">Sort by:</span>
                <Dropdown
                  placement="bottomRight"
                  menu={{
                    items: getSortingOptions(sortedOptions),
                    onClick: ({ key }) =>
                      handleDropdownClick(
                        setSortedOptions,
                        sortingOptions,
                        key
                      ),
                  }}
                >
                  <Space>
                    <span className="hidden sm:block text-zinc-500 text-sm ml-2">
                      {sortedOptions}
                    </span>
                    <img
                      className="size-3"
                      src="/assets/icons/down-arrow.svg"
                      alt="Open Sorting Options"
                    />
                  </Space>
                </Dropdown>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:block mr-5 text-zinc-500 text-sm">
                  View
                </div>
                {renderViewButton(
                  prodViewOpt.VIEW_GRID,
                  "Grid View",
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 18 18"
                    role="img"
                    fill={
                      productView === prodViewOpt.VIEW_GRID
                        ? "#18181b"
                        : "#71717a"
                    }
                  >
                    <path d="M1 .030067h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1h-2c-.5522847 0-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1z"></path>
                  </svg>
                )}
                {renderViewButton(
                  prodViewOpt.VIEW_LIST,
                  "List View",
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 18 18"
                    role="img"
                    fill={
                      productView === prodViewOpt.VIEW_LIST
                        ? "#18181b"
                        : "#71717a"
                    }
                  >
                    <path d="M8 1.030067h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-7-15h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="relative flex flex-wrap overflow-hidden w-full  border-zinc-200 z-10">
            {renderProduct()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
