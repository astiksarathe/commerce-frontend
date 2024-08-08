import React from "react";
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
    <div className="qty-input w-fit border rounded overflow-hidden bg-slate-50 border-gray-50">
      <button
        className="after:content-['*'] after:h-[2px] after:w-[10px] after:bg-black after:absolute after:inset-0 after:m-auto 
        before:content-['*'] before:h-[2px] before:w-[10px] before:bg-black before:absolute before:inset-0 before:m-auto 
        w-10 p-0 -indent-24 overflow-hidden relative te cursor-pointer bg-transparent text-inherit font-normal text-sm border-none h-10 leading-none 
        focus:outline-transparent 
        disabled:text-gray-300 disabled:bg-gray-200 disabled:cursor-none disabled:border-transparent"
        data-action="minus"
        type="button"
        onClick={() => handleButtonClick("minus")}
        disabled={props.value <= qtyMin}
      >
        -
      </button>
      <input
        className="bg-transparent text-inherit font-normal text-sm border-none h-10 leading-none w-12 text-center appearance-none inline-block m-0 
        focus:outline-transparent "
        type="number"
        name="product-qty"
        min={qtyMin}
        max={qtyMax}
        value={props.value}
        onChange={handleInputChange}
      />
      <button
        className="after:content-['*'] after:h-[2px] after:w-[10px] after:bg-black after:absolute after:inset-0 after:m-auto after:transform after:rotate-90
        before:content-['*'] before:h-[2px] before:w-[10px] before:bg-black before:absolute before:inset-0 before:m-auto 
        w-10 p-0 -indent-24 overflow-hidden relative te cursor-pointer bg-transparent text-inherit font-normal text-sm border-none h-10 leading-none 
        focus:outline-transparent 
        disabled:text-gray-300 disabled:bg-gray-200 disabled:cursor-none disabled:border-transparent"
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
