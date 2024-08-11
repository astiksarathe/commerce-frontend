import React from "react";

const Assurance = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 ">
      <div className="px-4 py-3 bg-white rounded-lg shadow-card">
        <div className="w-fit m-auto">
          <img src="/assets/icons/assuredDelivery.svg" alt="Assured Delivery" />
        </div>
        <p className="text-center w-fit text-sm text-zinc-800 m-auto mt-1">
          Assured delivery
        </p>
      </div>
      <div className="px-4 py-3 bg-white rounded-lg shadow-card">
        <div className="w-fit m-auto">
          <img src="/assets/icons/verifiedSeller.svg" alt="verifiedSeller" />
        </div>
        <p className="text-center w-fit text-sm text-zinc-800 m-auto mt-1">
          Verified seller
        </p>
      </div>
      <div className="px-4 py-3 bg-white rounded-lg shadow-card">
        <div className="w-fit m-auto">
          <img src="/assets/icons/securePayment.svg" alt="securePayment" />
        </div>
        <p className="text-center w-fit text-sm text-zinc-800 m-auto mt-1">
          Secure payment
        </p>
      </div>
    </div>
  );
};

export default Assurance;
