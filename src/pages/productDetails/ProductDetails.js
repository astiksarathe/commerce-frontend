import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";

import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import DOMPurify from "dompurify";

import ProductDetailsMobile from "./productDetailsMobile/ProductDetailsMobile.js";
import ProductDetailsDesktop from "./productDetailsDesktop/ProductDetailsDesktop.js";

import { getProductByURL } from "../../features/product/productSlice";

import AskQuestion from "../../components/ask-question/AskQuestion.js";
import VariantButton from "../../components/variant-button/VariantButton.js";
import DeliveryAndReturns from "../../components/delivery-return/DeliveryAndReturns.js";

import { notifyError } from "../../utils/Notification.js";

import useQueryParams from "../../hooks/useQueryParams.js";

import { addToCart } from "../../features/cart/cartSlice.js";
import {
  buyNowButtonHandler,
  checkoutModelHandler,
} from "../../features/checkout/checkout.js";

import { isCustomFormValid } from "../../utils/common.js";

const ProductDetails = () => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [form] = Form.useForm();
  const isMobile = useMediaQuery({ query: "(max-width: 48rem)" });

  const { url } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { productDetails } = useSelector((state) => state.product);
  const { getQueryParam } = useQueryParams();

  useEffect(() => {
    dispatch(getProductByURL(url));
  }, [dispatch, url]);

  useEffect(() => {
    let variant = null;

    if (productDetails.variants) {
      const sku = getQueryParam("sku");

      if (sku) {
        variant = productDetails.variants.find(
          (variant) => variant.sku === sku
        );
      }

      if (!variant) {
        // Set default variant on page load
        if (productDetails.preOrderBookingAvailable) {
          variant = productDetails.variants[0];
        } else {
          variant = productDetails.variants.find(({ available }) => available);
        }
      }

      setSelectedVariant(variant);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productDetails]);

  useEffect(() => {
    if (selectedVariant) {
      const params = { sku: selectedVariant.sku, color: selectedVariant.title };
      const searchParams = new URLSearchParams(location.search);
      Object.keys(params).forEach((key) => {
        searchParams.set(key, params[key]);
      });
      navigate({
        pathname: location.pathname,
        search: searchParams.toString(),
      });
    }
  }, [selectedVariant, navigate, location.pathname, location.search]);

  const getCustomizedFields = useCallback(
    (productDetails) => {
      const { fields } = productDetails;
      if (!fields?.length)
        return (
          <div className="text-sm text-gray-500">
            Customization is not available for this product
          </div>
        );

      const image = (
        <Upload
          listType="picture"
          maxCount={1}
          name="picture"
          beforeUpload={(file) => {
            const isPngOrJpeg =
              file.type === "image/png" || file.type === "image/jpeg";
            if (!isPngOrJpeg) {
              notifyError(`${file.name} is not a PNG or JPEG file.`);
            }
            return isPngOrJpeg || Upload.LIST_IGNORE;
          }}
        >
          <Button icon={<UploadOutlined />}>Upload png or jpeg only</Button>
        </Upload>
      );

      const text = <Input size="large" />;
      return (
        <Form
          form={form}
          name="customizedFields"
          variant="filled"
          layout="vertical"
        >
          {fields.map((fieldDetails) => {
            const rules = [];
            if (fieldDetails.isRequired === 1)
              rules.push({
                required: true,
                message: "This field is required.",
              });
            if (fieldDetails.maxLength > 0)
              rules.push({
                max: fieldDetails.maxLength,
                message: `Maximum length is ${fieldDetails.maxLength} characters.`,
              });
            if (fieldDetails.minLength > 0)
              rules.push({
                min: fieldDetails.minLength,
                message: `Minimum length is ${fieldDetails.minLength} characters.`,
              });

            return (
              <div className="" key={fieldDetails._id}>
                <Form.Item
                  name={fieldDetails.fieldName}
                  label={fieldDetails.fieldLabel}
                  rules={rules}
                >
                  {fieldDetails.fieldType === "IMAGE" ? image : text}
                </Form.Item>
              </div>
            );
          })}
        </Form>
      );
    },
    [form]
  );

  const handleVariantChange = useCallback((variant) => {
    setSelectedVariant(variant);
  }, []);

  const getVariants = useCallback(
    ({ variants = [], options = [] }) => {
      const variantType = options[0] || "color";
      const variantOptions = variants.map((variant) => {
        if (!variant.option1.trim())
          return <React.Fragment key={variant._id}></React.Fragment>;
        return (
          <div key={variant._id}>
            <VariantButton
              variant={variant}
              onChange={handleVariantChange}
              selectedVariant={selectedVariant}
              disabled={false}
            />
          </div>
        );
      });

      return (
        <>
          <h1 className="uppercase tracking-wide text-sm my-3">
            {variantType}
          </h1>
          {variantOptions.length ? (
            <div className="flex flex-wrap gap-4 mb-3 gap-y-5">
              {variantOptions}
            </div>
          ) : (
            <VariantButton
              variant={{ available: false, title: "Free" }}
              onChange={handleVariantChange}
              selectedVariant={selectedVariant}
              disabled={true}
            />
          )}
        </>
      );
    },
    [handleVariantChange, selectedVariant]
  );

  const getSpecification = useCallback(({ specification }) => {
    if (specification === undefined) return <></>;
    return specification.map(({ _id, key, value }) => {
      return (
        <div key={_id} className="space-x-2">
          <span>{key} : </span> <span>{value}</span>
        </div>
      );
    });
  }, []);

  const createMarkup = useCallback((content) => {
    if (!content) return { __html: "" };
    return { __html: DOMPurify.sanitize(content) };
  }, []);

  const addToCartHandler = (e) => {
    e.preventDefault();

    if (!isCustomFormValid(form, productDetails)) return;
    const payload = {
      ...productDetails,
      quantity,
      variantName: "Free",
      variantSKU: null,
    };
    const fields = productDetails.fields || [];

    fields.forEach((field) => {
      payload[field.fieldName] = form.getFieldValue(field.fieldName);
    });

    if (selectedVariant) {
      payload.variantName = selectedVariant.option1;
      payload.variantSKU = selectedVariant.sku;
    }

    dispatch(addToCart(payload));
  };

  const quantityHandler = (value) => {
    setQuantity(value);
  };

  const buyNowHandler = () => {
    if (!isCustomFormValid(form, productDetails)) return;
    const payload = {
      ...productDetails,
      quantity,
      variantName: "Free",
      variantSKU: null,
    };

    const fields = productDetails.fields || [];

    fields.forEach((field) => {
      payload[field.fieldName] = form.getFieldValue(field.fieldName);
    });

    if (selectedVariant) {
      payload.variantName = selectedVariant.option1;
      payload.variantSKU = selectedVariant.sku;
    }
    dispatch(buyNowButtonHandler(payload));
    dispatch(checkoutModelHandler(true));
  };
  const props = {
    productDetails,
    getVariants,
    getCustomizedFields,
    getSpecification,
    createMarkup,
    addToCartHandler,
    quantityHandler,
    quantity,
    buyNowHandler,
  };

  return (
    <>
      {isMobile ? (
        <div className="mobile relative w-screen overflow-x-hidden">
          <ProductDetailsMobile {...props} />
        </div>
      ) : (
        <div className="desktop relative">
          <ProductDetailsDesktop {...props} />
        </div>
      )}
      <DeliveryAndReturns />
      <AskQuestion />
    </>
  );
};

export default ProductDetails;
