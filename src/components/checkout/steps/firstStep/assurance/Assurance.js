import React from "react";

const Assurance = () => {
  return (
    <div className="assureance_container">
      <div className="checkout_card">
        <div className="assurance_img">
          <img src="/assets/icons/assuredDelivery.svg" alt="Assured Delivery" />
        </div>
        <p className="assurance_title">Assured delivery</p>
      </div>
      <div className="checkout_card">
        <div className="verifiedSeller_img">
          <img src="/assets/icons/verifiedSeller.svg" alt="verifiedSeller" />
        </div>
        <p className="verifiedSeller_title">Verified seller</p>
      </div>
      <div className="checkout_card">
        <div className="assurance_title">
          <img src="/assets/icons/securePayment.svg" alt="securePayment" />
        </div>
        <p className="securePayment_title">Secure payment</p>
      </div>
    </div>
  );
};

export default Assurance;
