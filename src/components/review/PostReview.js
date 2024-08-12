import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer, Form, Input, message, Rate, Space } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

import Button from "../../components/ui/button";

import { postReviewModelHandler, postReview } from "../../features/review";

import PropTypes from "prop-types";

import "./review.scss";
const PostReview = ({ productId }) => {
  const [form] = Form.useForm();
  const [rating, setRating] = useState(5);
  const [messageApi, contextHolder] = message.useMessage();

  const { isPostReviewModelOpen, isLoading } = useSelector(
    (state) => state.review
  );
  const dispatch = useDispatch();

  const onFinish = (e) => {
    if (!productId) {
      messageApi.open({
        type: "error",
        content: "Please try again later!!",
      });
      return;
    }
    if (e.fullName && e.email && e.content && productId)
      dispatch(
        postReview({
          fullName: e.fullName,
          email: e.email,
          content: e.content,
          rating: rating,
          productId,
        })
      );
  };
  const onFinishFailed = () => {};
  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [form]);

  const ratingChangeHandler = (val) => {
    if (val <= 0) setRating(1);
    else setRating(val);
  };

  const ReviewForm = () => (
    <div className="post-review-container">
      <div className="post-review-header">
        <h1 className="mt-4 text-lg font-semibold text-center lg:hidden">
          Add a Review
        </h1>
        <p className="text-center">
          <span>Your email address will not be published. </span>
          <span>
            Required fields are marked{" "}
            <span className="leading-6 text-red-600">*</span>
          </span>
        </p>
      </div>
      <div className="w-fit my-4 mx-auto">
        <Rate
          value={rating}
          style={{ fontSize: "30px" }}
          onChange={ratingChangeHandler}
        />
      </div>
      <Form
        form={form}
        name="reviewForm"
        variant="filled"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="review-form"
      >
        <Form.Item
          label="Your Review"
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your review!",
            },
          ]}
        >
          <TextArea
            placeholder="Your Review"
            autoSize={{ minRows: 5, maxRows: 5 }}
            className="review-textarea"
          />
        </Form.Item>
        <Form.Item
          label="Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input size="large" className="name-input" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Invalid email address",
            },
          ]}
        >
          <Input size="large" className="email-input" />
        </Form.Item>
        <Button htmltype="submit" onClick={onFinish} loading={isLoading}>
          Submit
        </Button>
      </Form>
    </div>
  );

  return (
    <>
      <div className="sm:hidden">
        <Drawer
          className="login_drawer"
          title="Review"
          placement={"right"}
          width={340}
          onClose={() => {
            dispatch(postReviewModelHandler(false));
          }}
          open={isPostReviewModelOpen}
          extra={
            <Space>
              <Button
                type="text"
                onClick={() => {
                  form.resetFields();
                  dispatch(postReviewModelHandler(false));
                }}
              >
                CLOSE
                <MinusOutlined style={{ marginLeft: "5px" }} />
              </Button>
            </Space>
          }
        >
          <>{contextHolder}</>
          <ReviewForm />
        </Drawer>
      </div>
      <div className="hidden md:block">
        <ReviewForm />
      </div>
    </>
  );
};

PostReview.propTypes = {
  productId: PropTypes.string,
};

export default PostReview;
