import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Drawer, Space, Segmented } from "antd";
import "./authDrawer.scss";
import {
  DribbbleOutlined,
  MailOutlined,
  MinusOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closedAuthDrawer } from "../../features/authDrawer";
import { login } from "../../features/auth/authSlice";

const EmailForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const onFinish = (values) => {
    dispatch(login(values));
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <>
      <Form
        name="authForm"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ marginTop: "2rem" }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input autoComplete="off" name="email" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password autoComplete="off" name="password" size="large" />
        </Form.Item>

        <Button
          loading={isLoading}
          iconPosition={"end"}
          style={{ width: "100%", margin: "auto" }}
          htmlType="submit"
        >
          Submit
        </Button>
        <div className="flex">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox name="remember">Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <DribbbleOutlined
              style={{
                marginRight: "8px",
                marginLeft: "10px",
              }}
            />
            <Link to={"/"}>Lost your password?</Link>
          </Form.Item>
        </div>
      </Form>
      <div className="create_account_link">
        <UserOutlined
          style={{
            fontSize: "60px",
            color: "rgba(135,135,135,.15)",
          }}
        />
        <strong>No account yet?</strong>
        <Link to={""}>Create An Account</Link>
      </div>
    </>
  );
};

const NumberForm = () => {
  return <></>;
};

const AuthDrawer = () => {
  const [loginBy, setLoginBy] = useState("email");
  const dispatch = useDispatch();
  const { isAuthDrawerOpen } = useSelector((state) => state.authDrawer);
  return (
    <Drawer
      className="login_drawer"
      title="SIGN IN"
      placement={"right"}
      width={340}
      onClose={() => dispatch(closedAuthDrawer())}
      open={isAuthDrawerOpen}
      extra={
        <Space>
          <Button
            type="text"
            style={{ color: "white", fontSize: 14 }}
            onClick={() => dispatch(closedAuthDrawer())}
          >
            CLOSE
            <MinusOutlined style={{ color: "white", fontSize: 14 }} />
          </Button>
        </Space>
      }
    >
      <div className="auth_form">
        <Segmented
          className="auth_segment"
          style={{ width: "100%" }}
          options={[
            {
              label: (
                <div className="auth_segment_container">
                  <MailOutlined />
                  <span className="auth_segment_label">Email</span>
                </div>
              ),
              value: "email",
            },
            {
              label: (
                <div className="auth_segment_container">
                  <PhoneOutlined />

                  <span className="auth_segment_label">Phone No</span>
                </div>
              ),
              value: "phoneNumber",
            },
          ]}
          onChange={(value) => {
            setLoginBy(value); // string
          }}
        />

        <div>{loginBy === "email" ? <EmailForm /> : <NumberForm />}</div>
      </div>
    </Drawer>
  );
};

export default AuthDrawer;
