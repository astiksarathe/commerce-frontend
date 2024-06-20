import React from "react";
import "./QtyInput.scss";

const QtyInput = (props) => {
  const qtyMin = 0;
  const qtyMax = 10;

  const handleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value) || value < qtyMin) {
      value = qtyMin;
    } else if (value > qtyMax) {
      value = qtyMax;
    }
    props.quantityHandler(value);
  };

  const handleButtonClick = (action) => {
    let value = props.value;
    if (action === "add" && value < qtyMax) {
      value += 1;
    } else if (action === "minus" && value > qtyMin) {
      value -= 1;
    }
    props.quantityHandler(value);
  };

  return (
    <div className="qty-input">
      <button
        className="qty-count qty-count--minus"
        data-action="minus"
        type="button"
        onClick={() => handleButtonClick("minus")}
        disabled={props.value <= qtyMin}
      >
        -
      </button>
      <input
        className="product-qty"
        type="number"
        name="product-qty"
        min={qtyMin}
        max={qtyMax}
        value={props.value}
        onChange={handleInputChange}
      />
      <button
        className="qty-count qty-count--add"
        data-action="add"
        type="button"
        onClick={() => handleButtonClick("add")}
        disabled={props.value >= qtyMax}
      >
        +
      </button>
    </div>
  );
};

export default QtyInput;
