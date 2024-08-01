import React from "react";
import { Rate, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ShareButtons from "../../../components/shareButtons";
import ReadMoreToggle from "../../../components/readMoreToggle/ReadMoreToggle";
import Review from "../../../components/review";
import ProductImageCarousel from "../ProductImageCarousel";
import "./productDetailsMobile.scss";
import { addToWishlist, removeFromWishlist } from "../../../features/wishlist";
import {
  calculateEstimatedDeliveryDate,
  capitalizeFirstLetters,
  getMetaDataofReview,
} from "../../../utils/common";
import { openResponsiveModel } from "../../../features/model-drawer";
import DeliveryAndReturns from "../../../components/delivery-return/DeliveryAndReturns";

const ProductDetailsMobile = ({ productDetails }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="mv_container">
      <div>
        <ProductImageCarousel />
      </div>
      <div className="mv_product_details_wrapper">
        <div className="mv_product_main_info seperation">
          <h1 className="mv_product_main_title">{capitalizeFirstLetters(productDetails.title)}</h1>
          <div className="mv_product_review">
            <Rate disabled allowHalf value={productDetails.aggregateRating} />
            <span>( {productDetails.totalReviews} customer reviews )</span>
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
        {/* <div className="mv_product_short_description_wrapper seperation">
          <p>{productDetails?.shortDescription}</p>
        </div> */}
        <div className="mv_variant_wrapper seperation"></div>
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
              <span>Add to Wishlist</span>
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
              <span>Added to Wishlist</span>
            </button>
          )}
        </div>
        <div className="seperation mv_delivery_question_wrapper">
          <button
            type="button"
            className="mv_delivery_wrapper"
            onClick={() => dispatch(openResponsiveModel({ body: <DeliveryAndReturns /> }))}
          >
            <span className="mv_delivery_icon">
              <img src="/assets/icons/share.svg" alt="Delivery and return details" />
            </span>
            <strong className="mv_delivery_title">Delivery & Return</strong>
            <span className="mv_delivery_right-icon"></span>
          </button>
          <button type="button" className="mv_question_wrapper">
            <span className="mv_question_icon">
              <img src="/assets/icons/question.svg" alt="Ask a question" />
            </span>
            <strong className="mv_question_title">Ask a Question</strong>
            <span className="mv_question_right-icon"></span>
          </button>
        </div>
        <div className="mv_estimated_delivery_wrapper seperation">
          <div>
            <span className="mv_estimated_delivery_icon">
              <img src="/assets/icons/truck.svg" alt="Estimated Delivery" />
            </span>
            <strong className="mv_estimated_delivery_title">Estimated Delivery:</strong>
          </div>
          <span className="mv_estimated_delivery_date">{calculateEstimatedDeliveryDate()}</span>
        </div>
        <div className="mv_views_wrapper seperation">
          <span className="mv_views_icon">
            <img src="/assets/icons/smiley.svg" alt="smiley" />
          </span>
          <strong className="mv_views_count">{productDetails.viewStatus} people </strong>
          <span className="mv_views_desc">are viewing this right now</span>
        </div>
        <div className="mv_share_wrapper seperation">
          <span className="mv_share_icon">
            <img src="/assets/icons/share2.svg" alt="share" />
          </span>
          <span className="mv_share_title">Share:</span>
          <span className="mv_share_links">
            <ShareButtons />
          </span>
        </div>
        <div className="mv_safe_payment_wrapper seperation safe-checkout">
          <fieldset>
            <legend>Guaranteed Safe Checkout</legend>
            <img src="/assets/razorpay_secure.jpg" alt="Razorpay Secure Payment Option" />
          </fieldset>
        </div>
        <div className="mv_description_wrapper seperation">
          <ReadMoreToggle>
            <>
              <h1 className="mv_description_heading">Description</h1>
              {/* {productDetails.description} */}
            </>
          </ReadMoreToggle>
        </div>
        <div className="mv_additional_info_wrapper seperation">
          <h1 className="mv_additional_info_heading">Additional information</h1>
          <p>
            <strong>Color</strong> <span>Beige, Purple</span>
          </p>
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
          <p>
            <strong>SKU</strong> <span>{productDetails.SKU}</span>
          </p>
          <p>
            <strong>Categories:</strong>{" "}
            {productDetails?.tags?.length > 0 ? productDetails.tags.join(",  ") : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMobile;
