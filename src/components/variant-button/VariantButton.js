import React from "react";

const VariantButton = ({ variant }) => {
  const getClassNames = (available) => {
    let baseClass =
      "min-w-24 px-6 py-2 border text-indigo-600 border-indigo-600 rounded-full cursor-pointer shadow-sm capitalize tracking-wider";
    let hoverClass = "hover:bg-indigo-600 hover:text-white";
    let disabledClass =
      "cursor-not-allowed line-through bg-gray-200 border-0 text-gray-400 hover:bg-gray-200 hover:text-gray-400";

    return `${baseClass} ${available ? hoverClass : disabledClass}`;
  };

  console.log({ variant });
  return (
    <label className={getClassNames(variant.available)}>
      <input
        type="radio"
        disabled={!variant.available}
        name={"optionName"}
        value={"optionName"}
        className="sr-only"
        onClick={() => {}}
      />
      <span>{variant.title}</span>
      <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    </label>
  );
};

export default VariantButton;
