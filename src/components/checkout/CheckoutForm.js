import React from "react";
import { Input, Form, Checkbox, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPinCodeDetails } from "../../features/pincode/pincoodeSlice";
import { checkoutFormHandler } from "../../features/checkout/checkout";
import PropTypes from "prop-types";
const Address = ({ pincodeHandler, formName }) => {
  const dispatch = useDispatch();
  return (
    <Form
      name={formName}
      style={{ maxWidth: 700 }}
      layout="vertical"
      variant="filled"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFieldsChange={(event) => {
        const { name, value } = event[0];
        dispatch(checkoutFormHandler({ name: name[0], value, key: formName }));
      }}
    >
      <Form.Item
        label="Pincode"
        name="pincode"
        validateTrigger="onBlur"
        rules={[
          { required: true, message: "Pincode is required!" },
          { len: 6, message: "Enter a valid pincode" },
        ]}
      >
        <Input size="large" placeholder="Enter Your Picode" onChange={pincodeHandler} />
      </Form.Item>

      <Form.Item
        label="Complete Address"
        name="address1"
        validateTrigger="onBlur"
        rules={[{ required: true, message: "Your comlete address is required!" }]}
      >
        <Input size="large" placeholder="House/Floor No. Building Name or Street, Locality" />
      </Form.Item>
      <Form.Item label="Landmark (Optional)" name="landmark" validateTrigger="onBlur">
        <Input
          size="large"
          placeholder="Any nearby post office, market, Hospital as the landmark"
        />
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        validateTrigger="onBlur"
        rules={[{ required: true, message: "Your city is required!" }]}
      >
        <Input size="large" placeholder="Enter Your City" />
      </Form.Item>

      <Form.Item
        label="State"
        name="state"
        validateTrigger="onBlur"
        rules={[{ required: true, message: "Your state is required!" }]}
      >
        <Select
          size="large"
          showSearch
          placeholder="Please Select State"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
            { value: "Andhra Pradesh", label: "Andhra Pradesh" },
            { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
            { value: "Assam", label: "Assam" },
            { value: "Bihar", label: "Bihar" },
            { value: "Chandigarh", label: "Chandigarh" },
            { value: "Dadra and Nagar Haveli", label: "Dadra and Nagar Haveli" },
            { value: "Daman and Diu", label: "Daman and Diu" },
            { value: "Delhi", label: "Delhi" },
            { value: "Goa", label: "Goa" },
            { value: "Gujarat", label: "Gujarat" },
            { value: "Haryana", label: "Haryana" },
            { value: "Himachal Pradesh", label: "Himachal Pradesh" },
            { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
            { value: "Karnataka", label: "Karnataka" },
            { value: "Kerala", label: "Kerala" },
            { value: "Lakshadweep Islands", label: "Lakshadweep Islands" },
            { value: "Madhya Pradesh", label: "Madhya Pradesh" },
            { value: "Maharashtra", label: "Maharashtra" },
            { value: "Manipur", label: "Manipur" },
            { value: "Meghalaya", label: "Meghalaya" },
            { value: "Mizoram", label: "Mizoram" },
            { value: "Nagaland", label: "Nagaland" },
            { value: "Odisha", label: "Odisha" },
            { value: "Pondicherry", label: "Pondicherry" },
            { value: "Punjab", label: "Punjab" },
            { value: "Rajasthan", label: "Rajasthan" },
            { value: "Sikkim", label: "Sikkim" },
            { value: "Tamil Nadu", label: "Tamil Nadu" },
            { value: "Tripura", label: "Tripura" },
            { value: "Uttar Pradesh", label: "Uttar Pradesh" },
            { value: "West Bengal", label: "West Bengal" },
            { value: "Jharkhand", label: "Jharkhand" },
            { value: "Uttarakhand", label: "Uttarakhand" },
            { value: "Chhattisgarh", label: "Chhattisgarh" },
            { value: "Telangana", label: "Telangana" },
            { value: "Ladakh", label: "Ladakh" },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Country"
        rules={[{ required: true, message: "Your country is required!" }]}
        name="country"
        validateTrigger="onBlur"
      >
        <Input size="large" placeholder="Enter Your Country" />
      </Form.Item>
    </Form>
  );
};

Address.propTypes = {
  pincodeHandler: PropTypes.func,
  formName: PropTypes.string,
};

const CheckoutForm = () => {
  const { checkoutForm } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const pincodeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length === 6) dispatch(getPinCodeDetails(value));
  };
  return (
    <div className="checkout_form">
      <div>
        <h1 className="checkout_heading first_heading">Personal Details</h1>
        <Form
          name="personalDetails"
          variant="filled"
          style={{ maxWidth: 700 }}
          layout="vertical"
          autoComplete="off"
          onFieldsChange={(event) => {
            const { name, value } = event[0];
            dispatch(checkoutFormHandler({ name: name[0], value, key: "shippingAddress" }));
          }}
        >
          <Form.Item
            label="Your Name"
            name="fullName"
            validateTrigger="onBlur"
            rules={[{ required: true, message: "Your name is required!" }]}
          >
            <Input size="large" placeholder="Enter Your Name" />
          </Form.Item>

          <Form.Item
            label="Your Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Your phone number is required!" },
              { len: 10, message: "Phone number should be valid" },
            ]}
          >
            <Input
              prefix={
                <div className="phoneNumber-dialog-code">
                  <img
                    style={{ marginRight: "5px" }}
                    src="/assets/indian_flag.svg"
                    alt="Indian Dialing Code "
                  />
                  <span>+91</span>
                </div>
              }
              size="large"
              placeholder="Enter Phone Number"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            validateTrigger="onBlur"
            rules={[{ type: "email", message: "Enter a valid email!" }]}
          >
            <Input size="large" placeholder="Enter Your Name" />
          </Form.Item>
        </Form>
      </div>
      <div>
        <h1 className="checkout_heading">Shipping Details</h1>
        <Address pincodeHandler={pincodeHandler} formName="shippingAddress" />
        <Checkbox
          name="billingSameAsShipping"
          checked={checkoutForm.billingSameAsShipping}
          onChange={(event) => {
            const { checked, name } = event.target;
            dispatch(checkoutFormHandler({ name, value: checked }));
          }}
        >
          Billing address is same as the shipping address
        </Checkbox>
      </div>
      {!checkoutForm.billingSameAsShipping && (
        <div>
          <h1 className="checkout_heading">Billing Details</h1>
          <Address pincodeHandler={pincodeHandler} formName="billingAddress" />
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
