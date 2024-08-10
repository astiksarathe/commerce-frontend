import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CheckCircleOutlined } from "@ant-design/icons";

import { getOrderById } from "../../features/order";

import { formatCurrency } from "../../utils/common";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orderDetails } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId, dispatch]);

  return (
    <div className="container mx-auto my-6 grid grid-cols-1 p-2 gap-3 md:grid-cols-2">
      <section aria-labelledby="order-summary">
        <header>
          <h1
            id="order-summary"
            className="mb-3 font-medium tracking-wide text-zinc-900 text-xl"
          >
            EverydayGadget
          </h1>
          <div className="flex gap-4 my-6">
            <CheckCircleOutlined style={{ fontSize: "48px", color: "green" }} />
            <div>
              <p className="text-zinc-600">Order ID: {orderId}</p>
              <p className="mb-3 font-medium tracking-wider text-zinc-900 text-xl">
                Thank you, Astik!
              </p>
            </div>
          </div>
        </header>

        <div className="border border-zinc-100 p-5 rounded">
          <h1 className="mb-3 font-medium tracking-wide text-zinc-900 text-base">
            Order details
          </h1>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <article>
              <h2 className="mb-3 font-medium tracking-wide text-zinc-900 text-base">
                Contact Information
              </h2>
              <p className="text-sm text-zinc-800">astiksarathe820@gmail.com</p>
            </article>

            <article>
              <h2 className="mb-3 font-medium tracking-wide text-zinc-900 text-base">
                Payment Method
              </h2>
              <dl>
                <dt className="text-sm text-zinc-800">
                  Cash on Delivery (COD):
                </dt>
                <dd className="text-sm text-zinc-800">8032.01</dd>
              </dl>
            </article>

            <article>
              <h2 className="mb-3 font-medium tracking-wide text-zinc-900 text-base">
                Shipping Address
              </h2>
              <address>
                <p className="text-sm text-zinc-800">Astik Sarathe</p>
                <p className="text-sm text-zinc-800">Complete Address</p>
                <p className="text-sm text-zinc-800">Pincode, City, State</p>
                <p className="text-sm text-zinc-800">Country</p>
                <p className="text-sm text-zinc-800">Phone Number</p>
              </address>
            </article>

            <article>
              <h2 className="mb-3 font-medium tracking-wide text-zinc-900 text-base">
                Billing Address
              </h2>
              <address>
                <p className="text-sm text-zinc-800">Astik Sarathe</p>
                <p className="text-sm text-zinc-800">Complete Address</p>
                <p className="text-sm text-zinc-800">Pincode, City, State</p>
                <p className="text-sm text-zinc-800">Country</p>
                <p className="text-sm text-zinc-800">Phone Number</p>
              </address>
            </article>

            <article>
              <h2 className="mb-3 font-medium tracking-wide text-zinc-900 text-base">
                Shipping Method
              </h2>
              <dl>
                <dt className="text-sm text-zinc-800">Shipping Method Name</dt>
                <dd className="text-sm text-zinc-800">Charges</dd>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="order-details"
        className="border border-zinc-100 p-5 rounded"
      >
        <header>
          <h2
            id="order-details"
            className="font-medium tracking-wide text-zinc-900 text-xl"
          >
            Order Details
          </h2>
        </header>

        <article>
          {orderDetails?.products
            ? orderDetails.products.map((product) => {
                return (
                  <div
                    className="my-2 p-4 bg-white min-h-4 rounded-lg shadow-card box-border"
                    key={product.SKU}
                  >
                    <div className="flex py-2">
                      <div className="relative w-16 h-16 mr-4">
                        <img
                          src={product.thumbnilImg}
                          alt={product.productTitle}
                          className="w-full h-full object-cover rounded-md text-sm"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <p className="text-sm font-medium text-zinc-900 truncate">
                          {product.productTitle}
                        </p>
                        <div className="flex text-sm text-zinc-600">
                          <span className="mr-2">
                            Quantity: {product.quantity}
                          </span>
                        </div>
                        <div className="text-sm text-zinc-600">
                          <span className="mr-2">Price:</span>
                          <span>{formatCurrency(product.price)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </article>

        <article className="mt-4 pt-4 border-t">
          <div className="flex justify-between py-1">
            <p className="text-sm tracking-wide text-zinc-900">Subtotal</p>
            <p className="text-sm text-zinc-800">Subtotal price</p>
          </div>
          <div className="flex justify-between py-1">
            <p className="text-sm tracking-wide text-zinc-900">Discount</p>
            <p className="text-sm text-zinc-800">Discount price</p>
          </div>
          <div className="flex justify-between py-1">
            <p className="text-sm tracking-wide text-zinc-900">Shipping</p>
            <p className="text-sm text-zinc-800">Shipping charges</p>
          </div>
        </article>

        <article className="mt-4 pt-4 border-t">
          <div className="flex justify-between">
            <strong className="text-base font-medium tracking-wide text-zinc-900">
              Total
            </strong>
            <p className="text-lg text-zinc-800">Total amount</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default OrderConfirmation;
