import React, { useState } from "react";
import "./productDetails.scss";
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import QtyInput from "../../components/qtyInput";
import "./ProductOverviewCustom.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(0);
  const { selectedProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const quantityHandler = (value) => {
    setQuantity(value);
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const renderPrice = (product) => {
    const { MRP, sellingPrice, currencyCode } = product.price || {};

    const currency = currencyCode === "INC" ? "&#8377;" : "&#x24;";
    if (MRP === sellingPrice) {
      return (
        <p className="avs awx axv">
          {currency} {MRP}
        </p>
      );
    } else {
      <p className="avs awx axv">
        <delete>
          {currency} {MRP}
        </delete>
      </p>;
    }
  };

  return (
    <div className="aln">
      <div className="gx tw ari aru cex cff cxe ddc">
        <div className="cuv cym cyz czu">
          <div className="lx yt">
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
          </div>
          <div className="kw ari bwu cen cud">
            <h1 className="avs awd awx axv">Zip Tote Basket</h1>
            <div className="lf">
              <h2 className="t">Product information</h2>
              {renderPrice(selectedProduct)}
            </div>
            <div className="lf">
              <h3 className="t">Reviews</h3>
              <div className="lx za">
                <p className="awa axt">
                  3.9<span className="t"> out of 5 stars</span>
                </p>
                <div className="jp lx za">
                  <Rate allowHalf defaultValue={2.5} />
                </div>
                <div aria-hidden="true" className="jx awa axo">
                  ·
                </div>
                <div className="jx lx">
                  <a href="#" className="awa awe ayh blb">
                    See all 512 reviews
                  </a>
                </div>
              </div>
            </div>
            <div className="lk">
              <h3 className="t">Description</h3>
              <div className="abz avy axt">
                <p>
                  The Zip Tote Basket is the perfect midpoint between shopping tote and comfy
                  backpack. With convertible straps, you can hand carry, should sling, or backpack
                  this convenient and spacious bag. The zip top and durable canvas construction
                  keeps your goods protected for all-day use.
                </p>
              </div>
            </div>
            <form className="lk">
              <div>
                <h3 className="awa awe axs">Color</h3>
                <fieldset aria-label="Choose a color" className="lb">
                  <div className="lx za abj" id="headlessui-radiogroup-:r8:" role="radiogroup">
                    <span
                      aria-label="Washed Black"
                      className="bcl bbu ab fp lx xr za zf adt aql bmv"
                      id="headlessui-radio-:r9:"
                      role="radio"
                      aria-checked="true"
                      tabIndex="0"
                      data-headlessui-state="checked"
                      data-checked=""
                    >
                      <span aria-hidden="true" className="ais og sk adt afa afs ahl"></span>
                    </span>
                    <span
                      aria-label="White"
                      className="bcg ab fp lx xr za zf adt aql bmv"
                      id="headlessui-radio-:ra:"
                      role="radio"
                      aria-checked="false"
                      tabIndex="-1"
                      data-headlessui-state=""
                    >
                      <span aria-hidden="true" className="aln og sk adt afa afs ahl"></span>
                    </span>
                    <span
                      aria-label="Washed Gray"
                      className="bcj ab fp lx xr za zf adt aql bmv"
                      id="headlessui-radio-:rb:"
                      role="radio"
                      aria-checked="false"
                      tabIndex="-1"
                      data-headlessui-state=""
                    >
                      <span aria-hidden="true" className="aiq og sk adt afa afs ahl"></span>
                    </span>
                  </div>
                </fieldset>
              </div>
              <div className="lf">
                <QtyInput value={quantity} quantityHandler={quantityHandler} />
              </div>
              <div className="kw lx">
                <button
                  type="button"
                  className="lx um un za zf adv afa agz ajq arm arz avy awe bah bir bmv bna bnm boc bog bze"
                  onClick={() => {
                    addToCartHandler({ ...selectedProduct, quantity });
                  }}
                >
                  Add to Cart
                </button>
                <button type="button" className="jx lx za zf adv arf arz axp bhy bkt">
                  <HeartOutlined style={{ fontSize: "22px" }} />
                  <span className="t">Add to favorites</span>
                </button>
              </div>
            </form>
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
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
