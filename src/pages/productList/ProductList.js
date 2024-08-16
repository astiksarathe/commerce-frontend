import React, { useState } from "react";

import { CaretRightOutlined } from "@ant-design/icons";

import {
  Checkbox,
  Collapse,
  Dropdown,
  InputNumber,
  Slider,
  Space,
  theme,
} from "antd";

import {
  CollectionList,
  filterList,
  sortingOptions,
  getSortingOptions,
  prodPerPagOpt,
} from "../../utils/variable";

const ProductList = () => {
  const [sortedOptions, setSortedOptions] = useState("Default");

  const [productPerPage, setProductPerPage] = useState(25);

  const [productView, setProductView] = useState("Grid");

  const { token } = theme.useToken();

  const panelStyle = {
    background: token.colorFillAlter,

    borderRadius: token.borderRadiusLG,

    border: "none",
  };

  const getList = (item, ind) => {
    const title = (
      <span className="text-zinc-500 hover:text-zinc-900">{item.title}</span>
    );

    const list = item.children.map(({ title }) => {
      return (
        <li className="h-8 pl-2" key={title}>
          <button className="bg-transparent tracking-wider text-zinc-500 hover:text-zinc-900">
            {title}
          </button>
        </li>
      );
    });

    return {
      key: ind,

      label: title,

      children: <ul>{list}</ul>,

      style: panelStyle,
    };
  };

  const getFilter = (item, ind) => {
    const title = (
      <span className="text-zinc-500 hover:text-zinc-900">{item}</span>
    );

    let list = "";

    if (item === "Price") {
      list = (
        <li>
          <Slider range={{ draggableTrack: true }} />

          <div className="flex justify-between items-center">
            <InputNumber className="rounded-none" />

            <span className="text-zinc-500">-</span>

            <InputNumber className="rounded-none" />
          </div>
        </li>
      );
    }

    if (item === "Availability") {
      list = (
        <>
          <li className="h-8 pl-2">
            <Checkbox className="bg-transparent tracking-wider text-zinc-500 hover:text-zinc-900">
              In stock (49)
            </Checkbox>
          </li>

          <li className="h-8 pl-2">
            <Checkbox className="bg-transparent tracking-wider text-zinc-500 hover:text-zinc-900">
              Out of stock (1)
            </Checkbox>
          </li>
        </>
      );
    }

    return {
      key: ind,

      label: title,

      children: <ul>{list}</ul>,

      style: panelStyle,
    };
  };

  const filters = filterList.map(getFilter);

  const collections = CollectionList.map(getList);

  <Checkbox>Check all</Checkbox>;

  return (
    <div className="container mx-auto py-5">
      <div className="flex gap-8">
        <aside className="hidden lg:block lg:w-64 xl:w-72 bg-zinc-50">
          <div className="p-5 sm:px-6 border-b">
            <h2 className="text-lg font-semibold tracking-wider">
              Collections
            </h2>

            <div className="mt-4">
              <Collapse
                className="collapse-custom"
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{ background: token.colorBgContainer }}
                items={collections}
              />
            </div>
          </div>

          <div className="p-5 sm:px-6">
            <h2 className="text-lg font-semibold tracking-wider">Filters</h2>

            <div className="mt-4">
              <Collapse
                className="collapse-custom"
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{ background: token.colorBgContainer }}
                items={filters}
              />
            </div>
          </div>
        </aside>

        <main className="flex-grow bg-zinc-50">
          <div className="py-5 px-7 border-b">
            <h1 className="text-2xl font-bold mb-4">Sales</h1>

            <div className="grid grid-cols-2 items-center mb-4">
              <div className="flex space-x-4 text-sm">
                <span>Showing 1 - 24 of 50 products</span>

                <span>
                  Display:{" "}
                  <Dropdown
                    placement="bottomRight"
                    menu={{
                      items: prodPerPagOpt,

                      onClick: ({ key }) => {
                        setSortedOptions(() => {
                          const selectedOption = sortingOptions.find(
                            (option) => option.key === key
                          );

                          return selectedOption.label;
                        });
                      },
                    }}
                  >
                    <Space>
                      {sortedOptions}

                      <img
                        className="size-3"
                        src="/assets/icons/down-arrow.svg"
                        alt="Open Sorting Options"
                      />
                    </Space>
                  </Dropdown>
                </span>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <span>
                  Sort by:{" "}
                  <Dropdown
                    placement="bottomRight"
                    menu={{
                      items: getSortingOptions(sortedOptions),

                      onClick: ({ key }) => {
                        setSortedOptions(() => {
                          const selectedOption = sortingOptions.find(
                            (option) => option.key === key
                          );

                          return selectedOption.label;
                        });
                      },
                    }}
                  >
                    <Space>
                      {sortedOptions}

                      <img
                        className="size-3"
                        src="/assets/icons/down-arrow.svg"
                        alt="Open Sorting Options"
                      />
                    </Space>
                  </Dropdown>
                </span>

                <div className="flex items-center space-x-2">
                  <span>View</span>

                  <button aria-label="Grid View">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      role="img"
                    >
                      <path d="M1 .030067h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1h-2c-.5522847 0-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1z"></path>
                    </svg>
                  </button>

                  <button aria-label="List View">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      role="img"
                    >
                      <path d="M8 1.030067h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-7-15h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
