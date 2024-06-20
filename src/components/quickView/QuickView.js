import React from "react";
import { Modal, Rate } from "antd";
import "./quickView.scss";
import { useDispatch, useSelector } from "react-redux";
import { quickViewModelHandler } from "../../features/product";
const QuickView = () => {
  const { isQuickViewModelOpen, quickViewProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log({ quickViewProduct });

  const handleCancel = () => {
    dispatch(quickViewModelHandler(false));
  };

  return (
    <Modal width={1000} open={isQuickViewModelOpen} onCancel={handleCancel} footer={[]}>
      <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
              alt="Two each of gray, white, and black shirts arranged on table."
              className="object-cover object-center"
            />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{quickViewProduct.title}</h2>

            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>

              <p className="text-2xl text-gray-900">
                {quickViewProduct.price?.currencyCode === "INC" && "RS "}
                {quickViewProduct.price?.sellingPrice}
              </p>

              <div className="mt-6">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Rate value={4} />
                  </div>
                  <p className="sr-only">3.9 out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </a>
                </div>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>

              <form>
                <fieldset aria-label="Choose a color">
                  <legend className="text-sm font-medium text-gray-900">Color</legend>

                  <div className="mt-4 flex items-center space-x-3">
                    <label
                      aria-label="White"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                    >
                      <input type="radio" name="color-choice" value="White" className="sr-only" />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"
                      ></span>
                    </label>

                    <label
                      aria-label="Gray"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                    >
                      <input type="radio" name="color-choice" value="Gray" className="sr-only" />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"
                      ></span>
                    </label>

                    <label
                      aria-label="Black"
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none"
                    >
                      <input type="radio" name="color-choice" value="Black" className="sr-only" />
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                      ></span>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="mt-10" aria-label="Choose a size">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">Size</div>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-4">
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                      <input type="radio" name="size-choice" value="XXL" className="sr-only" />
                      <span>XXL</span>
                      <span
                        className="pointer-events-none absolute -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1">
                      <input
                        type="radio"
                        name="size-choice"
                        value="XXXL"
                        disabled
                        className="sr-only"
                      />
                      <span>XXXL</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </label>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickView;
