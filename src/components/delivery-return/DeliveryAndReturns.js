import React from "react";
import "./deliveryandreturns.scss";
const DeliveryAndReturns = () => (
  <div data-elementor-type="wp-post" data-elementor-id="3711" className="delivery-returns__modal">
    <div className="delivery-returns__container" data-id="148ecd6" data-element_type="container">
      <div className="delivery-returns__inner">
        <div
          className="delivery-returns__widget delivery-returns__text-editor"
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div className="delivery-returns__content">
            <h2 className="delivery-returns__title">Delivery</h2>
            <h5 className="delivery-returns__charges">
              Delivery Charges (Pan India)&nbsp;
              <span
                className="delivery-returns__free-delivery"
                style={{ fontSize: "14px", color: "#00ca8d" }}
              >
                FREE
              </span>
            </h5>
            <div className="delivery-returns__estimated-time">
              <h5 style={{ color: "#333333" }}>Estimated Delivery Time</h5>
            </div>
            <p className="delivery-returns__time-ncr">
              In NCR (Delhi, Gurugram and Noida), Punjab, Haryana&nbsp;
              <span style={{ color: "#00ca8d", fontSize: "14px" }}>2 – 3 days</span>
            </p>
            <p className="delivery-returns__time-rest">
              Rest of India <span style={{ color: "#00ca8d", fontSize: "14px" }}>5 – 7 days</span>
            </p>
            <h2 className="delivery-returns__title">Returns</h2>
            <h5 className="delivery-returns__return-title">Return</h5>
            <p className="delivery-returns__policy">
              We will accept returns of unused toys and our other products within&nbsp;
              <span style={{ color: "#00ca8d", fontSize: "14px" }}>5 days&nbsp;</span>
              <span>of the date of delivery.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DeliveryAndReturns;
