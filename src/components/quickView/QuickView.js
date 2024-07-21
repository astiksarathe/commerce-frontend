import React, { useState } from "react";
import { Modal, Rate } from "antd";
import { quickViewModelHandler } from "../../features/product";
import { useDispatch, useSelector } from "react-redux";
import Variant from "../variant/Variant";
import { options, variant } from "./data";
import { Link } from "react-router-dom";
import "./quickView.scss";
import QtyInput from "../qtyInput/QtyInput";
import { addToCart } from "../../features/cart";
const QuickView = () => {
  const { isQuickViewModelOpen, quickViewProduct } = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(quickViewModelHandler(false));
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...quickViewProduct, quantity: quantity }));
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
            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12 text-transform: capitalize;">
              {quickViewProduct.title}
            </h2>

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
                    <Rate disabled value={quickViewProduct.aggregateRating} />
                  </div>
                  <p className="sr-only">3.9 out of 5 stars</p>
                  <Link
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {quickViewProduct.totalReviews} reviews
                  </Link>
                </div>
              </div>
              <div className="description"></div>
              <Link href="#">View details</Link>
            </section>

            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>

              <form>
                {quickViewProduct.options?.length > 0 && (
                  <Variant options={options} variants={variant} />
                )}
                <QtyInput value={quantity} quantityHandler={(value) => setQuantity(value)} />
                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={addToCartHandler}
                >
                  Add to Cart
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
