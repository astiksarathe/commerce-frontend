import { MinusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, message, Rate, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import "./review.scss";
import { useDispatch, useSelector } from "react-redux";
import { postReviewModelHandler, postReview } from "../../features/review";
import PropTypes from "prop-types";
const PostReview = ({ productId }) => {
  const [form] = Form.useForm();
  const [rating, setRating] = useState(5);
  const [messageApi, contextHolder] = message.useMessage();

  const { isPostReviewModelOpen, isLoading } = useSelector((state) => state.review);
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
  return (
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
            style={{ color: "white", fontSize: 14 }}
            onClick={() => {
              form.resetFields();
              dispatch(postReviewModelHandler(false));
            }}
          >
            CLOSE
            <MinusOutlined style={{ color: "white", fontSize: 14 }} />
          </Button>
        </Space>
      }
    >
      <>
        {contextHolder}
        <div className="post-review-container">
          <div className="post-review-header">
            <h1 className="post-review-title">Add a Review</h1>
            <p className="review-instructions">
              <span>Your email address will not be published. </span>
              <span>
                Required fields are marked <span className="required-mark">*</span>
              </span>
            </p>
          </div>
          <div className="select-rating">
            <Rate value={rating} style={{ fontSize: "30px" }} onChange={ratingChangeHandler} />
          </div>
          <Form
            form={form}
            name="reviewForm"
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
            <Button
              type="primary"
              block
              className="submit-button"
              htmlType="submit"
              onClick={onFinish}
              loading={isLoading}
            >
              {isLoading ? "Loading" : "Submit"}
            </Button>
          </Form>
        </div>
      </>
    </Drawer>
  );
};

PostReview.propTypes = {
  productId: PropTypes.string,
};

export default PostReview;
