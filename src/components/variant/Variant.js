import React, { useEffect, useState } from "react";
import "./variant.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectVariantHandler } from "../../features/product";

const Variant = () => {
  const { variantTree, selectedProductVariant } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const options = ["Size", "Color", "Design"];

  const variantButton = (variantName, ind, available = true) => {
    const cssClass = `
      variant-label 
      ${!available ? "variant-OFS" : ""} 
      ${available && selectedProductVariant[ind].name === variantName ? "variant-selected" : ""}
    `;

    const handleClick = () => {
      if (!available) return null;
      dispatch(selectVariantHandler({ variantName, ind }));
    };

    return (
      <label className={cssClass}>
        <input
          type="radio"
          name={`${variantName}-choice`}
          value={variantName}
          className="sr-only"
          onClick={handleClick}
        />
        <span>{variantName}</span>
        <span
          className="pointer-events-none absolute -inset-px rounded-md"
          aria-hidden="true"
        ></span>
      </label>
    );
  };

  const render = (variantTree, ind) => {
    // Check if there are no more options to render
    if (ind >= selectedProductVariant.length) return null;

    // Ensure that the variant tree has a list property
    if (!variantTree?.list) return null;

    const currentVariantKey = selectedProductVariant[ind].name;
    const nextVariantTree = variantTree[currentVariantKey];
    const nextSelectedVariant = selectedProductVariant[ind + 1];
    const nextIndex = nextSelectedVariant?.ind;

    return (
      <>
        <fieldset className="mt-10" aria-label={`Choose a ${""}`}>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-900">{options[ind]}</div>
          </div>
          <div className="variant-label-container">
            {variantTree.list.map((variant, i) => (
              <React.Fragment key={i}>
                {" "}
                {variantButton(variant.name, ind, variant.available)}
              </React.Fragment>
            ))}
          </div>
        </fieldset>
        {ind + 1 >= selectedProductVariant.length || nextIndex === undefined
          ? ""
          : render(nextVariantTree, nextIndex)}
      </>
    );
  };
  return <>{render(variantTree, selectedProductVariant[0].ind)}</>;
};

export default Variant;
