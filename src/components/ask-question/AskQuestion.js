import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TextArea from "antd/es/input/TextArea";
import { Button, Drawer, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { askQuestionOpenHandler } from "../../features/drawer";
const AskQuestion = () => {
  const {
    askQuestionOpen,
    askQuestionDrawer: { title },
  } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const onFinish = (value) => {
    console.log(value);
  };
  const onFinishFailed = (value) => {
    console.log(value);
  };
  const onClose = () => dispatch(askQuestionOpenHandler({ open: false, title: "" }));

  return (
    <div>
      <Drawer
        className="rounded-tl-3xl rounded-tr-3xl"
        title={
          <div className="flex justify-between gap-3 items-baseline">
            <h1 className="text-lg tracking-wide font-medium">{title}</h1>
            <button onClick={onClose}>
              <CloseOutlined />
            </button>
          </div>
        }
        height={700}
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={askQuestionOpen}
        footer={[]}
      >
        <h1 className="text-lg text-center tracking-wide">Ask a Question</h1>
        <Form
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
          <Form.Item validateTrigger="onBlur" name={"phoneNumber"} label={"Phone Number"}>
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
          <Button
            iconPosition={"end"}
            style={{ width: "100%", margin: "auto" }}
            htmlType="submit"
            size="large"
          >
            Send
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default AskQuestion;
