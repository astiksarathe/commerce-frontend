import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const ProductDetails = () => {
  const [form] = Form.useForm();
  const isMobile = useMediaQuery({ query: "(max-width: 48rem)" });

  const { url } = useParams();
  const dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductByURL(url));
  }, [dispatch, url]);

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
            const isPngOrJpeg = file.type === "image/png" || file.type === "image/jpeg";
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
        <Form form={form} variant="filled" layout="vertical">
          {fields.map((fieldDetails) => {
            const rules = [];
            if (fieldDetails.isRequired === 1)
              rules.push({ required: true, message: "This field is required." });
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
  const selectVariant = useCallback((variant) => {
    console.log(variant.target.value);
    console.log(variant.target.name);
  }, []);
  const getVariants = useCallback(
    ({ variants = [], options = [] }) => {
      const variantType = options[0] || "color";
      const variantOptions = variants.map((variant) => {
        if (!variant.option1.trim()) return <React.Fragment key={variant._id}></React.Fragment>;
        return (
          <div key={variant._id}>
            <VariantButton variant={variant} onChange={selectVariant} />
          </div>
        );
      });

      return (
        <>
          <h1 className="uppercase tracking-wide text-sm my-3">{variantType}</h1>
          {variantOptions.length ? (
            <div className="flex flex-wrap gap-4 mb-3 gap-y-5">{variantOptions}</div>
          ) : (
            <VariantButton variant={{ available: false, title: "Free" }} onChange={selectVariant} />
          )}
        </>
      );
    },
    [selectVariant]
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

  const props = {
    productDetails,
    getVariants,
    getCustomizedFields,
    getSpecification,
    createMarkup,
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
