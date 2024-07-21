import React, { useState } from "react";
import "./productDetailsMobile.scss";
import ProductImageCarousel from "../ProductImageCarousel";
import { Rate } from "antd";
import ShareButtons from "../../../components/shareButtons";
import ReadMoreToggle from "../../../components/readMoreToggle/ReadMoreToggle";

const ProductDetailsMobile = () => {
  const [wishlist, setWislisted] = useState(false);
  return (
    <div className="mv_container">
      <div>
        <ProductImageCarousel />
      </div>
      <div className="mv_product_details_wrapper">
        <div className="mv_product_main_info seperation">
          <h1 className="mv_product_main_title">
            Breathing Otter Baby Soothing Sound and Light Plush Doll Toy
          </h1>
          <div className="mv_product_review">
            <Rate disabled allowHalf defaultValue={2.5} />
            <span>( 5 custome reviews )</span>
          </div>
          <p className="mv_product_pricing">
            <del aria-hidden="true">
              <bdi className="mv_product_pricing-mrp">
                <span className="mv_product_pricing-currencySymbol">₹</span>
                2,499.00
              </bdi>
            </del>
            <ins aria-hidden="true">
              <bdi className="mv_product_pricing-sellingprice">
                <span className="mv_product_pricing-currencySymbol">₹</span>
                2,499.00
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
              <span>Hurry! Over 12 people have this in their carts</span>
            </div>
            <div className="mv_sold_wrapper">
              <span>
                <img className="flash_effect" src="/assets/icons/fire.svg" alt="total sold count" />
              </span>
              <span>13 sold in last 7 hours</span>
            </div>
          </div>
        </div>
        <div className="mv_product_short_description_wrapper seperation">
          <p>
            Breathing Otter Sleep and Playmate Otter Musical Stuffed Baby Plush Toy with Light Sound
            Newborn Sensory Comfortable Baby Gifts.
          </p>
          <p>
            <strong>Toy Features:</strong>
            <br />
            Quality: Super Soft
            <br />
            Size: 30 cm
            <br />
            Available Colours: Beige and Purple
            <br />
            Functional: YES (Light, Sound and Movement)
            <br />
            Child Safe: YES
            <br />
            Washable: NO
          </p>
        </div>
        <div className="mv_variant_wrapper seperation"></div>
        <div className="mv_wishlist_wrapper seperation">
          {wishlist ? (
            <p>
              <span>
                <img src="/assets/icons/heart.svg" alt="Add to wishlist" />
              </span>
              <span>Add to Wishlist</span>
            </p>
          ) : (
            <p>
              <span>
                <img
                  className="btn-wishlist"
                  src="/assets/icons/filled-heart.svg"
                  alt="Added to wishlist"
                />
              </span>
              <span>Added to Wishlist</span>
            </p>
          )}
        </div>
        <div className="mv_delivery_question_wrapper seperation">
          <button type="button" className="mv_delivery_wrapper">
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
          <span className="mv_estimated_delivery_date">Friday,Jul 26 - Sunday,Jul 28</span>
        </div>
        <div className="mv_views_wrapper seperation">
          <span className="mv_views_icon">
            <img src="/assets/icons/smiley.svg" alt="smiley" />
          </span>
          <strong className="mv_views_count">136 people </strong>
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
            {" "}
            <>
              <h1 className="mv_description_heading">Description</h1>
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
              <p>
                You are supposed to only post the code that is necessairy to ask a clear question.
                Not the entire code of your component or your app. And adding random text like
                wikipedia entries (as you have done in another question) or just duplicating you
                question text is not going to raise the quality of your question, it lowers it
                drastically. Please trim down the code. This would also be good advice for your
                other questions and for future questions.
              </p>
              <br />
            </>
          </ReadMoreToggle>
        </div>
        <div className="mv_additional_info_wrapper seperation">
          <h1 className="mv_additional_info_heading">Additional information</h1>
          <p>
            <strong>Color</strong> <span>Beige, Purple</span>
          </p>
        </div>
        <div className="mv_review_wrapper seperation"></div>
        <div className="mv_product_meta_wrapper seperation">
          <p>
            <strong>SKU</strong> <span>000324</span>
          </p>
          <p>
            <strong>Categories</strong> <span>Animals, new Arrival, Sale</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMobile;
