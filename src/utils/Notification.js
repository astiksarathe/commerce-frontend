import { notification } from "antd";
const notifySuccess = (message) => {
  if (message)
    notification.success({
      message: message,
      showProgress: true,
      pauseOnHover: true,
    });
};
const notifyError = (message) => {
  notification.error({
    message: message,
    showProgress: true,
    pauseOnHover: true,
  });
};
const notifyWarning = (message) => {
  notification.warning({
    message: message,
    showProgress: true,
    pauseOnHover: true,
  });
};
const notifyInfo = (message) => {
  notification.info({
    message: message,
    showProgress: true,
    pauseOnHover: true,
  });
};


export { notifySuccess, notifyError, notifyWarning, notifyInfo };
