import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Form, Input, Rate, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import DOMPurify from "dompurify";

import Review from "../../../components/review";
import ProductImageCarousel from "../ProductImageCarousel";
import ShareButtons from "../../../components/shareButtons";
import VariantButton from "../../../components/variant-button";
import ReadMoreToggle from "../../../components/readMoreToggle/ReadMoreToggle";

import { addToCart } from "../../../features/cart";
import { addToWishlist, removeFromWishlist } from "../../../features/wishlist";
import { buyNowButtonHandler, checkoutModelHandler } from "../../../features/checkout";
import { askQuestionOpenHandler, deliveryInfoOpenHandler } from "../../../features/drawer";

import {
  calculateEstimatedDeliveryDate,
  capitalizeFirstLetters,
  formatCurrency,
  getMetaDataofReview,
} from "../../../utils/common";
import { notifyError } from "../../../utils/Notification";

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
  const getCustomizedFields = (productDetails) => {
    const { fields } = productDetails;
    if (!fields?.length)
      return (
        <div className="text-sm text-gray-500">Customization is not available for this product</div>
      );

    const image = (
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture"
        maxCount={1}
        beforeUpload={(file) => {
          console.log(file);
          const isPngOrJpeg = file.type === "image/png" || file.type === "image/jpeg";
          if (!isPngOrJpeg) {
            notifyError(`${file.name} is not a PNG or JPEG file.`);
          }
          return isPngOrJpeg || Upload.LIST_IGNORE;
        }}
      >
        <Button icon={<UploadOutlined />}>Upload png or jpeg only</Button>
      </Upload>
    );

    const text = <Input size="large" />;
    return (
      <>
        <Form variant="filled" layout="vertical">
          {fields.map((fieldDetails) => {
            const rules = [];
            if (fieldDetails.isRequired === 1)
              rules.push({ required: true, message: "This field is required." });
            if (fieldDetails.maxLength > 0)
              rules.push({
                max: fieldDetails.maxLength,
                message: `Maximum length is ${fieldDetails.maxLength} characters.`,
              });
            if (fieldDetails.minLength > 0)
              rules.push({
                min: fieldDetails.minLength,
                message: `Minimum length is ${fieldDetails.minLength} characters.`,
              });

            return (
              <div className="" key={fieldDetails._id}>
                <Form.Item
                  name={fieldDetails.fieldName}
                  label={fieldDetails.fieldLabel}
                  rules={rules}
                >
                  {fieldDetails.fieldType === "IMAGE" ? image : text}
                </Form.Item>
              </div>
            );
          })}
        </Form>
      </>
    );
  };
  const getVariants = ({ variants = [], options = [] }) => {
    const variantType = options[0] || "color";
    const variantOptions = variants.map((variant) => {
      if (!variant.option1.trim()) return <React.Fragment key={variant._id}></React.Fragment>;
      return (
        <div key={variant._id}>
          <VariantButton variant={variant} />
        </div>
      );
    });

    return (
      <>
        <h1 className="uppercase tracking-wide text-sm my-3">{variantType}</h1>
        {variantOptions.length ? (
          <div className="flex flex-wrap gap-4 mb-3 gap-y-5">{variantOptions}</div>
        ) : (
          <VariantButton variant={{ available: false, title: "Free" }} />
        )}
      </>
    );
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div className="w-screen overflow-x-hidden">
        <ProductImageCarousel />
      </div>
      <div className="p-2">
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <h1 className="pr-16 text-pretty font-medium leading-6 tracking-wide text-xl">
            {capitalizeFirstLetters(productDetails.title)}
          </h1>
          <div className="mt-2 space-x-1">
            <Rate className="text-sm" disabled allowHalf value={productDetails.aggregateRating} />
            <span className="text-sm text-gray-500">
              ( {productDetails.totalReviews} customer reviews )
            </span>
          </div>
          <p className=" text-base pt-2 leading-tight min-h-3 text-gray-700 flex items-baseline flex-wrap gap-1">
            <del aria-hidden="true" className="m-0 text-zinc-400 font-normal text-sm mr-1">
              <bdi>{formatCurrency(productDetails?.price?.MRP)}</bdi>
            </del>
            <ins aria-hidden="true" className="font-medium text-2xl no-underline">
              <bdi>{formatCurrency(productDetails?.price?.sellingPrice)}</bdi>
            </ins>
            <small className="mx-1 my-0 font-medium text-xs">incl. GST</small>
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
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <div className="relative h-6">
            {/* <div className="">
              <span>
                <img className="flash_effect" src="/assets/icons/fire.svg" alt="cart record" />
              </span>
              <span>Hurry! Over {productDetails.cartStatus} people have this in their carts</span>
            </div>
            <div className="">
              <span>
                <img className="flash_effect" src="/assets/icons/fire.svg" alt="total sold count" />
              </span>
              <span>
                {productDetails.sellCount} sold in last {productDetails.sellTimeInHour} hours
              </span>
            </div> */}
          </div>
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <div className="text-gray-500 my-4 leading-6 tracking-wide text-sm">
            <div dangerouslySetInnerHTML={createMarkup(productDetails?.shortDescription)}></div>
          </div>
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <h1 className="uppercase tracking-wide text-sm my-3">Customize Your Product</h1>
          {getCustomizedFields(productDetails)}
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <div>{getVariants(productDetails)}</div>
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          {wishlist ? (
            <button
              className="flex bg-transparent gap-2 items-center"
              onClick={() => {
                dispatch(addToWishlist(""));
              }}
            >
              <span>
                <img src="/assets/icons/heart.svg" alt="Add to wishlist" />
              </span>
              <strong className="font-medium tracking-wide text-sm">Add to Wishlist</strong>
            </button>
          ) : (
            <button
              className="flex bg-transparent gap-2 items-center"
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
              <strong className="font-medium tracking-wide text-sm">Added to Wishlist</strong>
            </button>
          )}
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <button
            type="button"
            className="w-full flex bg-transparent gap-2 items-center justify-between"
            onClick={() => dispatch(deliveryInfoOpenHandler(true))}
          >
            <div className="flex gap-2">
              <span className="mv_delivery_icon">
                <img src="/assets/icons/share.svg" alt="Delivery and return details" />
              </span>
              <strong className="font-medium tracking-wide text-sm">Delivery & Return</strong>
            </div>
            <div>
              <img src="/assets/icons/right-arrow.svg" alt="Open" />
            </div>
          </button>
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <button
            type="button"
            className="w-full flex bg-transparent gap-2 items-center justify-between"
            onClick={() =>
              dispatch(
                askQuestionOpenHandler({
                  open: true,
                  title: productDetails.title,
                })
              )
            }
          >
            <div className="flex gap-2">
              <span>
                <img src="/assets/icons/question.svg" alt="Ask a question" />
              </span>
              <strong className="font-medium tracking-wide text-sm">Ask a Question</strong>
            </div>
            <div>
              <img src="/assets/icons/right-arrow.svg" alt="Open" />
            </div>
          </button>
        </div>
        <div className="flex items-center flex-wrap gap-x-2 relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100 space-y-1">
          <div className="flex items-center gap-2">
            <span>
              <img src="/assets/icons/truck.svg" alt="Estimated Delivery" />
            </span>
            <strong className="font-medium tracking-wide text-sm">Estimated Delivery:</strong>
          </div>
          <span className="text-sm">{calculateEstimatedDeliveryDate()}</span>
        </div>
        <div className="flex items-center gap-2 relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <span>
            <img src="/assets/icons/smiley.svg" alt="smiley" />
          </span>
          <div className="text-sm">
            <strong className="font-medium tracking-wide">
              {productDetails.viewStatus} people{" "}
            </strong>
            <span>are viewing this right now</span>
          </div>
        </div>
        <div className="flex items-center gap-2 relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <span>
            <img src="/assets/icons/share2.svg" alt="share" />
          </span>
          <span className="font-medium text-sm">Share:</span>
          <span>
            <ShareButtons />
          </span>
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <fieldset className="mt-6 mb-5 border border-gray-200 p-2.5 px-9 text-center rounded-md">
            <legend>Guaranteed Safe Checkout</legend>
            <img src="/assets/razorpay_secure.jpg" alt="Razorpay Secure Payment Option" />
          </fieldset>
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
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

        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100 mv_review_wrapper">
          <ReadMoreToggle>
            <Review
              metaData={getMetaDataofReview(productDetails)}
              productId={productDetails._id}
              title={productDetails.title}
            />
          </ReadMoreToggle>
        </div>
        <div className="relative pt-2 pb-4 after:content-[''] after:absolute after:bottom-0 after:-left-2 after:-right-2 after:z-10 after:border-b-8 after:border-gray-100">
          <p className="text-sm space-x-2">
            <strong className="font-medium tracking-wide text-sm">SKU :</strong>{" "}
            <span>{productDetails.SKU}</span>
          </p>
          <p className="text-sm space-x-2">
            <strong className="font-medium tracking-wide text-sm">Categories:</strong>{" "}
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
