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
  },
});

export const { checkoutModelHandler } = checkoutSlice.actions;

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
