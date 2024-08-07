import React from "react";

const VariantButton = ({ variant }) => {
  const isFree = variant.title === "Free";
  const getClassNames = (available) => {
    let baseClass =
      "min-w-24 px-6 py-2 border text-indigo-600 border-indigo-600 rounded-full cursor-pointer shadow-sm capitalize tracking-wider hover:bg-indigo-600 hover:text-white";
    let disabledClass = `rounded-full min-w-24 px-6 py-2 cursor-not-allowed ${
      isFree ? "" : "line-through"
    } bg-gray-200 border-0 text-gray-400 hover:bg-gray-200 hover:text-gray-400`;

    return `${available ? baseClass : disabledClass}`;
  };

  return (
    <label className={getClassNames(variant.available)}>
      <input
        type="radio"
        disabled={!variant.available}
        name={variant.title}
        value={variant.title}
        className="sr-only"
        onClick={() => {}}
      />
      <span>{variant.title}</span>
      <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    </label>
  );
};

export default VariantButton;
