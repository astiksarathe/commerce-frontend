import React from "react";
import { Button, Form, Input } from "antd";

const AccountDetails = () => {
  return (
    <div className="max-w-4xl">
      <Form layout="vertical" variant="filled">
        <Form.Item name={"fullName"} label="Full Name :">
          <Input size="large" />
        </Form.Item>
        <Form.Item name={"email"} label="Email :">
          <Input size="large" />
        </Form.Item>
        <Form.Item name={"phoneNumber"} label="Phone Number :">
          <Input size="large" />
        </Form.Item>
        <div>
          <fieldset className="mt-6 mb-5 border border-gray-200 p-2.5 px-9 rounded-md">
            <legend className="black">Password change</legend>
            <Form.Item
              name={"currentPassword"}
              label="Current Password (leave blank to keep unchanged) : "
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item name={"newPassword"} label="New Password (leave blank to keep unchanged) :">
              <Input size="large" />
            </Form.Item>
            <Form.Item name={"confirmPassword"} label="Confirm new Password :">
              <Input size="large" />
            </Form.Item>
          </fieldset>
        </div>

        <Button size="large" className="uppercase text-sm tracking-wider px-5" type="primary">
          SAVE CHANGES
        </Button>
      </Form>
    </div>
  );
};

export default AccountDetails;
