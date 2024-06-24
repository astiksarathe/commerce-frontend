import React from "react";
import "./variant.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectVariantByOneOption } from "../../features/product";

const Variant = () => {
  const { variantTree, selectedProductVariant } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const op = ["Size", "Color", "Design"];
  console.log(selectedProductVariant);
  const variantButton = (variantName) => {
    return (
      <label className={`variant-label`}>
        <input
          type="radio"
          name={`${variantName}-choice`}
          value={variantName}
          className="sr-only"
          onChange={() => {}}
        />
        <span>{variantName}</span>
        <span
          className="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        ></span>
      </label>
    );
  };

  const renderVariantsRecursively = (tree, index = 0) => {
    if (!tree.list) return null;
    const optionValues = tree.list;
    return (
      <React.Fragment key={index}>
        {tree.list.map((variant) => (
          <>{variantButton(variant)}</>
        ))}
        {optionValues.map((value, idx) => (
          <div key={idx} className="ml-4">
            {renderVariantsRecursively(tree[value], index + 1)}
          </div>
        ))}
      </React.Fragment>
    );
  };
  return (
    <>
      <fieldset className="mt-10" aria-label={`Choose a }`}>
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">Size</div>
        </div>
        <div className="variant-label-container">{renderVariantsRecursively(variantTree)}</div>
      </fieldset>
    </>
  );
};

export default Variant;
