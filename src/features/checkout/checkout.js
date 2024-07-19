import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutForm: {
    shippingAddress: {},
    billingAddress: {},
    billingSameAsShipping: true,
  },
  isCheckoutModelOpen: true,
  isLoading: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkoutModelHandler: (state, action) => {
      state.isCheckoutModelOpen = action.payload;
    },
    checkoutFormHandler: (state, action) => {
      const { name, value, key } = action.payload;
      if (!name || value === undefined) return;

      if (!key) {
        state.checkoutForm[name] = value;
      } else {
        state.checkoutForm[key] = { ...state.checkoutForm[key], [name]: value };
      }
    },
  },
});

export const { checkoutModelHandler, checkoutFormHandler } = checkoutSlice.actions;

export default checkoutSlice.reducer;

// fullName , -
// phoneNumber, -
// email, -
// address1 -
// landmark, -
// city, -
// state, -
// pincode -
// country -

// productId
// productTitle
// productURL
// SKU
// quantity
// price
// trackingLink
// location

//   user:
//   shippingAddress:
//   billingSameAsShipping:
//   billingAddress:
//   additionalCharges: {
//     amount ,
//     reason,
//   }
//   totalPrice ,
//   tax,
//   totalAmount,
//   shipping: {
//     shippingType, // STANDARD SHIPPING, EXPRESS SHIPPING
//     shippingCharges, // SHIPPING CHARGES
//     RTOCharges, // RTO CHARGES
//     CODCharges,
//   },
//   discount: {
//     amount,
//     reason
//   },
//   status: {
//     type: String, // PENDINF, FULDULLED, CANCELLED, HOLD
//     // required: true,
//   },
//   statusReason:
//   trackingId:
//   paymentStatus: {
//     paymentMode: String, // COD , PARTIALLY PAID,  PAID
//     prepaidMedium: String, // RAZORPAY, UPI
//     paymentDate: Date,
//     transactionId: String,
//     partiallyPaidAmount: Number,
//   },
//   tags: [String],
//   orderStatus: String, // COMPLETED, ABONDENT, DRAFT
//   Note: String,
