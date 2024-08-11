import React from "react";

const VariantButton = ({ variant, onChange, selectedVariant, disabled }) => {
  const getClassNames = (available) => {
    let baseClass =
      "min-w-24 px-6 py-2 border text-indigo-600 border-indigo-600 rounded-full cursor-pointer shadow-sm capitalize tracking-wider";
    let baseHoverClass = "hover:bg-indigo-600 hover:text-white";
    let disabledClass = `rounded-full min-w-24 px-6 py-2 cursor-not-allowed ${
      selectedVariant !== null ? "" : "line-through"
    } bg-gray-200 border-0 text-gray-400 hover:bg-gray-200 hover:text-gray-400`;
    let selected = "bg-indigo-600 text-white";
    if (available && selectedVariant) {
      return selectedVariant.sku === variant.sku
        ? `${baseClass} ${selected}`
        : `${baseClass} ${baseHoverClass}`;
    }
    return disabledClass;
  };

  return (
    <label className={getClassNames(true)}>
      <input
        type="radio"
        disabled={disabled}
        name={variant.title}
        value={variant.sku}
        className="sr-only"
        onClick={(e) => {
          e.preventDefault();
          if (disabled) {
            return;
          }
          onChange(variant);
        }}
      />
      <span>{variant.title}</span>
      <span
        className="pointer-events-none absolute -inset-px rounded-md"
        aria-hidden="true"
      ></span>
    </label>
  );
};

export default VariantButton;
