import React from "react";
import { message } from "antd";
import NotificationContext from "./NotificationContext";

const NotificationProvider = ({ children }) => {
  const [messageApi, messageContextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };
  return (
    <NotificationContext.Provider value={{ success, warning, error }}>
      {messageContextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
