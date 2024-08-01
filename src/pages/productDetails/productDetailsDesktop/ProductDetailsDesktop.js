import { Breadcrumb, Rate } from "antd";
import React, { useState } from "react";
import ProductImageCarousel from "../ProductImageCarousel";
import {
  capitalizeFirstLetters,
  generateRandomNumber,
  getMetaDataofReview,
} from "../../../utils/common";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart";
import QtyInput from "../../../components/qtyInput";
import {
  HeartOutlined,
  RightOutlined,
  RollbackOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import { buyNowButtonHandler, checkoutModelHandler } from "../../../features/checkout/checkout";
import ShareButtons from "../../../components/shareButtons";
import DraftEditor from "../../../components/draftEditor/DraftEditor";
import Review from "../../../components/review";

const ProductDetailsDesktop = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(0);

  const dispatch = useDispatch();

  const quantityHandler = (value) => {
    setQuantity(value);
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  const renderPrice = (product) => {
    const { MRP, sellingPrice } = product.price || {};
    return (
      <p className="avs awx axv">
        {`₹. ${sellingPrice}  `}
        {MRP !== sellingPrice && <del>{` ₹. ${MRP}`}</del>}
        <span> incl. GST</span>
      </p>
    );
  };
  const currentUrl = window.location.href; // or any specific URL you want to share
  const title = "Check out this amazing product!";

  return (
    <>
      <Breadcrumb title={productDetails.title} />
      <div className="aln product-details-container">
        <div className="gx tw ari cex cxe ddc">
          <div className="cuv cym cyz czu">
            {/* <div className="lx yt">
              <div className="gx lk md to tw bxi cxh">
                <div className="mb yl zs" role="tablist" aria-orientation="horizontal">
                  <button
                    className="ab lx nq xr za zf adv aln awa awe awh axv bid bmv bmx boa bod"
                    id="headlessui-tabs-tab-:r0:"
                    role="tab"
                    type="button"
                    aria-selected="true"
                    tabIndex="0"
                    data-headlessui-state="selected"
                    data-selected=""
                    aria-controls="headlessui-tabs-panel-:r4:"
                  >
                    <span className="t">Angled view</span>
                    <span className="aa ak adh adv">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                        alt=""
                        className="ph to aqe aqf"
                      />
                    </span>
                    <span className="bcv u aa ak adv bbu bdt" aria-hidden="true"></span>
                  </button>
                  <button
                    className="ab lx nq xr za zf adv aln awa awe awh axv bid bmv bmx boa bod"
                    id="headlessui-tabs-tab-:r1:"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    tabIndex="-1"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:r5:"
                  >
                    <span className="t">Front view</span>
                    <span className="aa ak adh adv">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg"
                        alt=""
                        className="ph to aqe aqf"
                      />
                    </span>
                    <span className="bdj u aa ak adv bbu bdt" aria-hidden="true"></span>
                  </button>
                  <button
                    className="ab lx nq xr za zf adv aln awa awe awh axv bid bmv bmx boa bod"
                    id="headlessui-tabs-tab-:r2:"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    tabIndex="-1"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:r6:"
                  >
                    <span className="t">Back view</span>
                    <span className="aa ak adh adv">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg"
                        alt=""
                        className="ph to aqe aqf"
                      />
                    </span>
                    <span className="bdj u aa ak adv bbu bdt" aria-hidden="true"></span>
                  </button>
                  <button
                    className="ab lx nq xr za zf adv aln awa awe awh axv bid bmv bmx boa bod"
                    id="headlessui-tabs-tab-:r3:"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    tabIndex="-1"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:r7:"
                  >
                    <span className="t">Back angle open view</span>
                    <span className="aa ak adh adv">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg"
                        alt=""
                        className="ph to aqe aqf"
                      />
                    </span>
                    <span className="bdj u aa ak adv bbu bdt" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
              <div className="b i to">
                <div
                  id="headlessui-tabs-panel-:r4:"
                  role="tabpanel"
                  tabIndex="0"
                  data-headlessui-state="selected"
                  data-selected=""
                  aria-labelledby="headlessui-tabs-tab-:r0:"
                >
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                    alt="Angled front view with bag zipped and handles upright."
                    className="ph to aqe aqf cde"
                  />
                </div>
                <span
                  aria-hidden="true"
                  id="headlessui-tabs-panel-:r5:"
                  role="tabpanel"
                  tabIndex="-1"
                  aria-labelledby="headlessui-tabs-tab-:r1:"
                  style={{
                    position: "fixed",
                    top: "1px",
                    left: "1px",
                    width: "1px",
                    height: "0px",
                    padding: "0px",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: "0px",
                  }}
                ></span>
                <span
                  aria-hidden="true"
                  id="headlessui-tabs-panel-:r6:"
                  role="tabpanel"
                  tabIndex="-1"
                  aria-labelledby="headlessui-tabs-tab-:r2:"
                  style={{
                    position: "fixed",
                    top: "1px",
                    left: "1px",
                    width: "1px",
                    height: "0px",
                    padding: "0px",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: "0px",
                  }}
                ></span>
                <span
                  aria-hidden="true"
                  id="headlessui-tabs-panel-:r7:"
                  role="tabpanel"
                  tabIndex="-1"
                  aria-labelledby="headlessui-tabs-tab-:r3:"
                  style={{
                    position: "fixed",
                    top: "1px",
                    left: "1px",
                    width: "1px",
                    height: "0px",
                    padding: "0px",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: "0px",
                  }}
                ></span>
              </div>
            </div> */}
            <ProductImageCarousel />
            <div className="kw bwu cen cud">
              <h1 className="avs awd awx axv product-title">
                {capitalizeFirstLetters(productDetails.title)}
              </h1>
              <p className="product-sku">SKU: {productDetails.SKU}</p>
              <div className="lf">
                <h3 className="t">Reviews</h3>
                <div className="lx za">
                  <p className="awa axt">
                    3.9<span className="t"> out of 5 stars</span>
                  </p>
                  <div className="jp lx za">
                    <Rate disabled allowHalf defaultValue={2.5} />
                  </div>
                  <div aria-hidden="true" className="jx awa axo"></div>
                  <div className="jx lx">
                    <Link to="#" className="awa awe ayh blb">
                      (5 customer reviews)
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lf">
                <h2 className="t">Product information</h2>
                {renderPrice(productDetails)}
              </div>
              <div className="announcement">
                <p>
                  <img className="flashit" src="/assets/flames-icon.svg" alt="flames" /> Hurry! Over
                  14 people have this in their carts
                </p>
                <p>
                  <img className="flashit" src="/assets/flames-icon.svg" alt="flames" />2 sold in
                  last 12 hours
                </p>
              </div>
              <div className="lk">
                <h3 className="t">Options</h3>
                <div className="abz avy axt">
                  <p>Size Free</p>
                </div>
              </div>

              <div className="lk">
                <h3 className="t">availablility</h3>
                <div className="abz avy axt">
                  <p>In Stock</p>
                </div>
              </div>
              <form className="lk">
                <div className="quantity-container">
                  <h4>Quantity</h4>
                  <QtyInput value={quantity} quantityHandler={quantityHandler} />
                </div>
                <div className="checkout-rel-btns">
                  <div>
                    <button
                      type="button"
                      className="lx um un za zf adv afa agz ajq arm arz avy awe bah bir bmv bna bnm boc bog bze add-to-cart-btn"
                      onClick={() => {
                        addToCartHandler({ ...productDetails, quantity });
                      }}
                    >
                      <ShoppingCartOutlined /> <span>Add to Cart</span>
                    </button>
                    <button type="button" className="jx lx za zf adv arf arz axp bhy bkt">
                      <HeartOutlined style={{ fontSize: "22px" }} />
                      <span className="t">Add to favorites</span>
                    </button>
                  </div>

                  <button
                    className="buy-now-btn"
                    type="button"
                    onClick={() => {
                      dispatch(buyNowButtonHandler({ quantity, productDetails }));
                      dispatch(checkoutModelHandler(true));
                    }}
                  >
                    <div>
                      BUY NOW with UPI / COD{" "}
                      <img src="/assets/upi_options.svg" alt="payment options" />
                      <RightOutlined />
                    </div>
                  </button>
                </div>
                <div className="product-delivery-view-status">
                  <p>
                    <strong>
                      <TruckOutlined />
                      Estimated Delivery
                    </strong>
                    <span>: Wednesday, Jul 17 – Friday, Jul 19</span>
                  </p>
                  <p>
                    <SmileOutlined /> <strong>{generateRandomNumber(100)} people</strong>{" "}
                    <span> are viewing this right now</span>
                  </p>
                </div>
              </form>
              <p className="share-container">
                <span>
                  <ShareAltOutlined /> <strong>Share</strong>
                </span>
                <ShareButtons url={currentUrl} title={title} />
              </p>
              <div className="razorpay-secured safe-checkout">
                <fieldset>
                  <legend>Guaranteed Safe Checkout</legend>
                  <img src="/assets/razorpay_secure.jpg" alt="Razorpay Secure Payment Option" />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details">
          <div>
            <button
              className={`product-details__description ${tab === 0 && "active"}`}
              onClick={() => setTab(0)}
            >
              DESCRIPTION
            </button>
            <button
              className={`product-details__specification ${tab === 1 && "active"}`}
              onClick={() => setTab(1)}
            >
              SPECIFICATION
            </button>
            <button
              className={`product-details__shipping-and-delivery ${tab === 2 && "active"}`}
              onClick={() => setTab(2)}
            >
              SHIPPING & DELIVERY
            </button>
          </div>
        </div>
        <div>
          {tab === 0 && <DraftEditor value={productDetails.description} />}
          {tab === 1 && (
            <div className="specification">
              {productDetails.specification.map(({ _id, key, value }, index) => (
                <React.Fragment key={_id}>
                  <div className="specification-key">{key}</div>
                  <div className="specification-value" style={{ justifySelf: "end" }}>
                    {value}
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
          {tab === 2 && (
            <div className="shipping-and-delivery_tab">
              <div className="shipping_section">
                <h4>
                  <TruckOutlined />
                  <span className="text"> Free Shipping on Orders Over INR 1000</span>
                </h4>
                <ul>
                  <li>
                    For orders below INR 1000, shipping charges will be calculated at checkout.
                  </li>
                  <li>Delivery within 5-7 business days.</li>
                  <li>Express delivery services are also available.</li>
                </ul>
              </div>
              <div className="return-and-exchange_section">
                <h4>
                  <RollbackOutlined />
                  <span className="text">Return and Exchange</span>
                </h4>
                <ul>
                  <li>
                    We offer a return or exchange in case of damage or if an incorrect product is
                    delivered.
                  </li>
                  <li>Easy and complimentary, within 3 days.</li>
                  <li>See our return and exchange policy for conditions and procedures.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div>
          <Review
            metaData={getMetaDataofReview(productDetails)}
            productId={productDetails._id}
            title={productDetails.title}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsDesktop;
