import React from "react";
import { Button, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ShareButtons from "../../../components/shareButtons";
import ReadMoreToggle from "../../../components/readMoreToggle/ReadMoreToggle";
import Review from "../../../components/review";
import ProductImageCarousel from "../ProductImageCarousel";
import { addToWishlist, removeFromWishlist } from "../../../features/wishlist";
import { askQuestionOpenHandler, deliveryInfoOpenHandler } from "../../../features/drawer";
import {
  calculateEstimatedDeliveryDate,
  capitalizeFirstLetters,
  getMetaDataofReview,
} from "../../../utils/common";

import DOMPurify from "dompurify";

import "./productDetailsMobile.scss";
import { buyNowButtonHandler, checkoutModelHandler } from "../../../features/checkout";
import { addToCart } from "../../../features/cart";

const ProductDetailsMobile = ({ productDetails }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const createMarkup = (content) => {
    if (!content) return { __html: "" };
    return { __html: DOMPurify.sanitize(content) };
  };

  const getSpecification = (specification) => {
    if (specification === undefined) return <></>;
    return specification.map(({ _id, key, value }) => {
      return (
        <div key={_id} className="space-x-2">
          <span>{key} : </span> <span>{value}</span>
        </div>
      );
    });
  };
  const getVairnats = ({ variants, options }) => {
    if (!variants || !options) return <></>;
    const variantType = options[0] || "color";
    const variantOptions = variants.map((variant) => {
      if (!variant.option1.trim()) return <React.Fragment key={variant._id}></React.Fragment>;
      return (
        <div key={variant._id}>
          <button
            className="px-4 py-1 rounded border border-blue-500 tracking-wide shadow-sm text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={() => {
              console.log(variant.SKU);
            }}
          >
            {variant.option1}
          </button>
        </div>
      );
    });

    return (
      <>
        <h1 className="uppercase tracking-wide text-sm my-3">{variantType} :</h1>
        <div className="flex flex-wrap gap-4 mb-3">{variantOptions}</div>
      </>
    );
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="">
      <div className="w-screen overflow-x-hidden">
        <ProductImageCarousel />
      </div>
      <div className="p-2">
        <div className="mv_product_main_info seperation">
          <h1 className="pr-16 text-pretty font-medium leading-6 tracking-wide text-xl">
            {capitalizeFirstLetters(productDetails.title)}
          </h1>
          <div className="mt-2 space-x-1">
            <Rate className="text-sm" disabled allowHalf value={productDetails.aggregateRating} />
            <span className="text-sm text-gray-500">
              ( {productDetails.totalReviews} customer reviews )
            </span>
          </div>
          <p className="mv_product_pricing">
            <del aria-hidden="true">
              <bdi className="mv_product_pricing-mrp">
                <span className="mv_product_pricing-currencySymbol">₹</span>
                {""}
                {productDetails?.price?.MRP}
              </bdi>
            </del>
            <ins aria-hidden="true">
              <bdi className="mv_product_pricing-sellingprice">
                <span className="mv_product_pricing-currencySymbol">₹</span> {""}
                {productDetails?.price?.sellingPrice}
              </bdi>
            </ins>
            <small className="mv_product_pricing-suffix">incl. GST</small>
          </p>
          <div className="mt-4">
            <h3 className="sr-only">availablility</h3>
            <div className="flex gap-3 items-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
              </span>
              <p className="text-green-700">In Stock</p>
            </div>
          </div>
        </div>
        <div className="mv_incart_sold_wrapper seperation">
          <div className="mv_incart_sold">
            <div className="mv_incart_wrapper">
              <span>
                <img className="flash_effect" src="/assets/icons/fire.svg" alt="cart record" />
              </span>
              <span>Hurry! Over {productDetails.cartStatus} people have this in their carts</span>
            </div>
            <div className="mv_sold_wrapper">
              <span>
                <img className="flash_effect" src="/assets/icons/fire.svg" alt="total sold count" />
              </span>
              <span>
                {productDetails.sellCount} sold in last {productDetails.sellTimeInHour} hours
              </span>
            </div>
          </div>
        </div>
        <div className="mv_variant_wrapper seperation">
          <div className="text-gray-500 my-4 leading-6 tracking-wide text-sm">
            <div dangerouslySetInnerHTML={createMarkup(productDetails?.shortDescription)}></div>
          </div>
        </div>
        <div className="mv_variant_wrapper seperation">
          <div>{getVairnats(productDetails)}</div>
        </div>
        <div className="mv_wishlist_wrapper seperation">
          {wishlist ? (
            <button
              className="mv_wishlist_btn"
              onClick={() => {
                dispatch(addToWishlist(""));
              }}
            >
              <span>
                <img src="/assets/icons/heart.svg" alt="Add to wishlist" />
              </span>
              <span className="text-sm">Add to Wishlist</span>
            </button>
          ) : (
            <button
              className="mv_wishlist_btn"
              onClick={() => {
                dispatch(removeFromWishlist(""));
              }}
            >
              <span>
                <img
                  className="btn-wishlist"
                  src="/assets/icons/filled-heart.svg"
                  alt="Added to wishlist"
                />
              </span>
              <span className="text-sm">Added to Wishlist</span>
            </button>
          )}
        </div>
        <div className="seperation mv_delivery_question_wrapper">
          <button
            type="button"
            className="mv_delivery_wrapper"
            onClick={() => dispatch(deliveryInfoOpenHandler(true))}
          >
            <span className="mv_delivery_icon">
              <img src="/assets/icons/share.svg" alt="Delivery and return details" />
            </span>
            <strong className="font-medium tracking-wide text-sm">Delivery & Return</strong>
            <span className="mv_delivery_right-icon"></span>
          </button>
          <button
            type="button"
            className="mv_question_wrapper"
            onClick={() =>
              dispatch(
                askQuestionOpenHandler({
                  open: true,
                  title: productDetails.title,
                })
              )
            }
          >
            <span className="mv_question_icon">
              <img src="/assets/icons/question.svg" alt="Ask a question" />
            </span>
            <strong className="font-medium tracking-wide text-sm">Ask a Question</strong>
            <span className="mv_question_right-icon"></span>
          </button>
        </div>
        <div className="mv_estimated_delivery_wrapper seperation space-y-1">
          <div>
            <span className="mv_estimated_delivery_icon">
              <img src="/assets/icons/truck.svg" alt="Estimated Delivery" />
            </span>
            <strong className="font-medium tracking-wide text-sm">Estimated Delivery:</strong>
          </div>
          <span className="mv_estimated_delivery_date text-sm">
            {calculateEstimatedDeliveryDate()}
          </span>
        </div>
        <div className="mv_views_wrapper seperation">
          <span className="mv_views_icon">
            <img src="/assets/icons/smiley.svg" alt="smiley" />
          </span>
          <div className="text-sm">
            <strong className="font-medium tracking-wide">
              {productDetails.viewStatus} people{" "}
            </strong>
            <span className="mv_views_desc">are viewing this right now</span>
          </div>
        </div>
        <div className="mv_share_wrapper seperation">
          <span className="mv_share_icon">
            <img src="/assets/icons/share2.svg" alt="share" />
          </span>
          <span className="mv_share_title font-medium text-sm">Share:</span>
          <span className="mv_share_links">
            <ShareButtons />
          </span>
        </div>
        <div className="mv_safe_payment_wrapper seperation safe-checkout">
          <fieldset className="mt-6 mb-5 border border-gray-200 p-2.5 px-9 text-center rounded-md">
            <legend>Guaranteed Safe Checkout</legend>
            <img src="/assets/razorpay_secure.jpg" alt="Razorpay Secure Payment Option" />
          </fieldset>
        </div>
        <div className="mv_description_wrapper seperation">
          <ReadMoreToggle>
            <>
              <h1 className="text-xl tracking-wide font-medium">Description</h1>
              <div className="text-gray-500 my-4 leading-6 tracking-wide text-sm">
                <div dangerouslySetInnerHTML={createMarkup(productDetails?.description)}></div>
                <div className="pb-9">{getSpecification(productDetails.specification)}</div>
              </div>
            </>
          </ReadMoreToggle>
        </div>

        <div className="seperation mv_review_wrapper">
          <ReadMoreToggle>
            <Review
              metaData={getMetaDataofReview(productDetails)}
              productId={productDetails._id}
              title={productDetails.title}
            />
          </ReadMoreToggle>
        </div>
        <div className="mv_product_meta_wrapper seperation">
          <p className="text-sm space-x-2">
            <strong className="font-semibold tracking-wide">SKU :</strong>{" "}
            <span>{productDetails.SKU}</span>
          </p>
          <p className="text-sm space-x-2">
            <strong className="font-semibold tracking-wide">Categories:</strong>{" "}
            {productDetails?.tags?.length > 0 ? productDetails.tags.join(",  ") : ""}
          </p>
        </div>
      </div>

      <div className="w-screen grid h-14 bg-white grid-cols-2 fixed bottom-0 z-40 items-end">
        <Button
          size="large"
          className="uppercase tracking-wide font-medium text-sm rounded-none h-12 bg-orange-400 border-none text-white shadow-md"
          onClick={() => {
            addToCartHandler({ ...productDetails, quantity: 1 });
          }}
        >
          Add to Cart
        </Button>
        <Button
          size="large"
          className="uppercase tracking-wide font-medium text-sm rounded-none h-12 bg-blue-500 border-none text-white shadow-md"
          onClick={() => {
            dispatch(buyNowButtonHandler({ quantity: 1, productDetails }));
            dispatch(checkoutModelHandler(true));
          }}
        >
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailsMobile;
