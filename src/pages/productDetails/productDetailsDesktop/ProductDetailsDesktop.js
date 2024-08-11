import React from "react";
import { Link } from "react-router-dom";

import {
  HeartOutlined,
  RightOutlined,
  RollbackOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Rate } from "antd";

import Review from "../../../components/review";
import QtyInput from "../../../components/qtyInput";
import ShareButtons from "../../../components/shareButtons";

import {
  calculateEstimatedDeliveryDate,
  capitalizeFirstLetters,
  formatCurrency,
  generateRandomNumber,
  getMetaDataofReview,
} from "../../../utils/common";

import ProductImageCarousel from "../ProductImageCarousel";

const ProductDetailsDesktop = ({
  productDetails,
  getVariants,
  getSpecification,
  getCustomizedFields,
  createMarkup,
  addToCartHandler,
  quantityHandler,
  quantity,
  buyNowHandler,
}) => {
  const currentUrl = window.location.href;

  return (
    <>
      <Breadcrumb title={productDetails.title} />
      <div className="container m-auto my-4">
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="sm:p-4">
              <ProductImageCarousel />
            </div>
            <div className="sm:p-4">
              <h1 className="text-3xl tracking-wide">
                {capitalizeFirstLetters(productDetails.title)}
              </h1>
              <p className="text-sm text-gray-500 leading-8">
                SKU: {productDetails.SKU}
              </p>
              <div>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex gap-3">
                  <p className="sr-only">
                    3.9<span> out of 5 stars</span>
                  </p>
                  <div>
                    <Rate
                      className="text-lg"
                      disabled
                      allowHalf
                      defaultValue={2.5}
                    />
                  </div>
                  <div className="text-base">
                    <Link to="#" className="text-gray-500">
                      ( 5 customer reviews )
                    </Link>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <h2 className="sr-only">Product information</h2>
                <div className="flex gap-4 leading-13 flex-wrap">
                  <p className="text-2xl text-gray-500 font-semibold line-through">
                    <span className="sr-only">It's MRP</span>
                    <span aria-hidden="true">
                      {formatCurrency(productDetails?.price?.MRP)}
                    </span>
                  </p>
                  <p className="text-3xl font-semibold">
                    <span className="sr-only">Selling price</span>
                    <span aria-hidden="true">
                      {formatCurrency(productDetails?.price?.sellingPrice)}
                    </span>
                  </p>
                  <p className="text-sm font-semibold">Incl. GST</p>
                </div>
              </div>
              <div className=" p-1 sr-only">
                <p>
                  <img
                    className="animate-ping"
                    src="/assets/flames-icon.svg"
                    alt="flames"
                  />{" "}
                  Hurry! Over 14 people have this in their carts
                </p>
                <p>
                  <img
                    className="animate-ping"
                    src="/assets/flames-icon.svg"
                    alt="flames"
                  />
                  2 sold in last 12 hours
                </p>
              </div>
              <div className="my-3">
                <h3 className="sr-only">availablility</h3>
                <div className="flex gap-3 items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
                  </span>
                  <p className="text-green-700">In Stock</p>
                </div>
              </div>
              <div className="text-gray-500 my-4 leading-6 tracking-wide text-sm">
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    productDetails?.shortDescription
                  )}
                ></div>
              </div>
              <div className="my-3">
                <h1 className="uppercase tracking-wide text-sm my-3">
                  Customize Your Product
                </h1>
                <div>{getCustomizedFields(productDetails)}</div>
              </div>
              <div className="my-3">{getVariants(productDetails)}</div>
              <div className="my-3">
                <h4 className="text-sm text-gray-500 leading-8">Quantity:</h4>
                <QtyInput value={quantity} quantityHandler={quantityHandler} />
              </div>
              <div className="grid grid-cols-2 gap-4 my-3">
                <Button
                  size="large"
                  className="h-11  font-medium tracking-wide"
                  onClick={addToCartHandler}
                >
                  <ShoppingCartOutlined className="text-lg leading-3" />{" "}
                  <span>Add to Cart</span>
                </Button>

                <Button
                  className="flex h-11 font-medium tracking-wide"
                  type="primary"
                  size="large"
                  onClick={buyNowHandler}
                >
                  BUY NOW{""}
                  <img src="/assets/upi_options.svg" alt="payment options" />
                  <RightOutlined />
                </Button>
              </div>
              <button className="py-2 space-x-2">
                <HeartOutlined className="hover:animate-ping text-lg" />
                <span>Add to Wishlist</span>
              </button>
              <div className="space-y-3">
                <div>
                  <strong className="space-x-2 font-medium">
                    <span>
                      <TruckOutlined className="text-lg" />
                    </span>
                    <span>Estimated Delivery</span>
                  </strong>
                  <span>: {calculateEstimatedDeliveryDate()}</span>
                </div>
                <div>
                  <strong className="space-x-2 font-medium">
                    <span>
                      <SmileOutlined className="text-lg" />
                    </span>
                    <span>{generateRandomNumber(100)} people</span>
                  </strong>
                  <span> are viewing this right now</span>
                </div>
                <div className="flex gap-5 items-center">
                  <strong className="space-x-2 font-medium">
                    <span>
                      <ShareAltOutlined className="text-lg" />
                    </span>
                    <span>Share</span>
                  </strong>
                  <ShareButtons url={currentUrl} title={productDetails.title} />
                </div>
              </div>
              <div className="razorpay-secured safe-checkout">
                <fieldset className="mt-6 mb-5 border border-gray-200 p-2.5 px-9 text-center rounded-md">
                  <legend>Guaranteed Safe Checkout</legend>
                  <img
                    src="/assets/razorpay_secure.jpg"
                    alt="Razorpay Secure Payment Option"
                  />
                </fieldset>
              </div>
            </div>
          </div>
          <div title="descriptopn" className="p-4">
            <h1 className="text-2xl tracking-wide">Description : </h1>
            <div className="text-gray-500 my-4 leading-6 tracking-wide text-base lg:pl-36">
              <div
                dangerouslySetInnerHTML={createMarkup(
                  productDetails?.description
                )}
              ></div>
              <div>{getSpecification(productDetails)}</div>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl tracking-wide">Shipping and Return : </h1>
            <div className="lg:pl-36">
              <div className="grid sm:grid-cols-2 gap-3 pt-8">
                <div>
                  <h4 className="text-lg font-semibold">
                    <TruckOutlined className="animate-bounce text-xl" />
                    <span className="ml-2">
                      {" "}
                      Free Shipping on Orders Over INR 1000
                    </span>
                  </h4>
                  <ul className="mt-4 pl-8 list-disc">
                    <li className="leading-6 mb-2">
                      For orders below INR 1000, shipping charges will be
                      calculated at checkout.
                    </li>
                    <li className="leading-6 mb-2">
                      Delivery within 5-7 business days.
                    </li>
                    <li className="leading-6 mb-2">
                      Express delivery services are also available.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    <RollbackOutlined className="animate-bounce text-xl" />
                    <span className="ml-2">Return and Exchange</span>
                  </h4>
                  <ul className="mt-4 pl-8 list-disc">
                    <li className="leading-6 mb-2">
                      We offer a return or exchange in case of damage or if an
                      incorrect product is delivered.
                    </li>
                    <li className="leading-6 mb-2">
                      Easy and complimentary, within 3 days.
                    </li>
                    <li className="leading-6 mb-2">
                      See our return and exchange policy for conditions and
                      procedures.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Review
              metaData={getMetaDataofReview(productDetails)}
              productId={productDetails._id}
              title={productDetails.title}
            />
          </div>
        </div>
        {/* <div >
                <h3 className="sr-only">Options</h3>
                <div >
                  <p>Size Free</p>
                </div>
              </div> */}
      </div>
    </>
  );
};

export default ProductDetailsDesktop;
