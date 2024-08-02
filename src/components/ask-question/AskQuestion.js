import { Button, Drawer, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import "./askquestion.scss";
const AskQuestion = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  const onFinishFailed = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Drawer
        className="ask-question-drawer"
        title={
          <div className="ask-question-title">
            <p className="ask-question-name">
              Breathing Otter Baby Soothing Sound and Light Plush Doll Toy
            </p>
            <div className="ask-question-price">
              <div className="ask-question-mrp">₹2,499.00</div>
              <div className="ask-question-selling-price">₹1,499.00</div>
              <div className="ask-question-gst">inc. GST</div>
            </div>
          </div>
        }
        closable={false}
        onClose={() => {}}
        open={() => {}}
        footer={[]}
      >
        <h1 className="ask-question-heading">Ask a Question</h1>
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
