import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CloseOutlined } from "@ant-design/icons";

import { askQuestionOpenHandler } from "../../features/drawer";
import { clearState, postQuery } from "../../features/query";
import { notifySuccess } from "../../utils/Notification";

import Button from "../../components/ui/button";
const AskQuestion = () => {
  const [form] = Form.useForm();
  const {
    askQuestionOpen,
    askQuestionDrawer: { title },
  } = useSelector((state) => state.drawer);
  const { isLoading, query } = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const onFinish = (value) => {
    if (!value.fullName || !value.email || !value.message) {
      return;
    }
    dispatch(postQuery(value));
  };
  useEffect(() => {
    if (query) {
      form.resetFields();
      notifySuccess(
        "Your query has been successfully posted. We will reach out to you shortly"
      );
      dispatch(clearState());
    }
  }, [query, form, dispatch]);
  const onFinishFailed = (value) => {};
  const onClose = () =>
    dispatch(askQuestionOpenHandler({ open: false, title: "" }));

  return (
    <div>
      <Drawer
        title={
          <div className="flex justify-between gap-3 items-baseline">
            <h1 className="text-lg tracking-wide font-medium">{title}</h1>
            <Button type="text" onClick={onClose}>
              <CloseOutlined style={{ color: "black" }} />
            </Button>
          </div>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        open={askQuestionOpen}
        footer={[]}
      >
        <h1 className="text-lg text-center tracking-wide">Ask a Question</h1>
        <Form
          form={form}
          name="askQuestionForm"
          initialValues={{
            remember: false,
          }}
          layout="vertical"
          variant="filled"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ marginTop: "2rem" }}
        >
          <Form.Item
            validateTrigger="onBlur"
            name={"fullName"}
            label={"Your Name"}
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            validateTrigger="onBlur"
            name={"email"}
            label={"Your Email"}
            rules={[
              { required: true, message: "This field is required." },
              { type: "email", message: "Enter a valid email." },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            validateTrigger="onBlur"
            name={"phoneNumber"}
            label={"Phone Number"}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            validateTrigger="onBlur"
            name={"message"}
            label={"Your Message"}
            rules={[{ required: true, message: "This field is required." }]}
          >
            <TextArea
              size="large"
              placeholder="Your Message"
              autoSize={{ minRows: 5, maxRows: 5 }}
            />
          </Form.Item>
          <Button htmltype="submit" loading={isLoading}>
            Send
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default AskQuestion;
