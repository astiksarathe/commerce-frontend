import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingMethod } from "../../../../../features/checkout/checkout";
const ShippingMethods = () => {
  const {
    checkoutForm: { shipping },
  } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const type = [
    { id: 1, name: "standard", charges: 0, img: "standard.svg" },
    { id: 2, name: "Express (By Air)", charges: 150, img: "express.svg" },
  ];
  return (
    <div className="shipping_method_container">
      <h1 className="shipping_method_heading">Shipping Method</h1>
      <div className="shipping_method_options">
        {type.map((options) => (
          <button
            className={`bg-transparent shipping_type ${
              options.id === shipping.shippingType ? "selected-shipping" : ""
            }`}
            key={options.id}
            onClick={() => {
              dispatch(updateShippingMethod({ id: options.id, charges: options.charges }));
            }}
          >
            <img className="shipping_type_logo" src={`/assets/${options.img}`} alt={options.name} />
            <div
              className={`shipping_type_name ${
                options.charges === 0 ? "standard-shipping" : "express-shipping"
              }`}
            >
              {options.name?.toUpperCase()}
              <span className="shipping_type_charges">
                {options.charges === 0 ? " FREE" : ` +${options.charges}`}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShippingMethods;
