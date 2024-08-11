import { Button, Form } from "antd";
import { useEffect, useState } from "react";

const SubmitButton = ({ form, children, type, isLoading, ...props }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button
      isLoading={isLoading}
      type={type}
      htmlType="submit"
      {...props}
      disabled={!submittable}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
