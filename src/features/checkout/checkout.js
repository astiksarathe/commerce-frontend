import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutForm: {
    shippingAddress: {},
    billingAddress: {},
    billingSameAsShipping: true,
    paymentStatus: { paymentMode: 1 },
    subscribeToUpdate: true,
    products: [],
    shipping: {
      shippingType: 1,
      shippingCharges: 0,
    },
    subtotal: 0,
  },
  isCheckoutModelOpen: false,
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

    buyNowButtonHandler: (state, action) => {
      const { quantity, productDetails } = action.payload;
      if (!quantity || !productDetails) return;
      const product = {
        productId: productDetails.productId,
        productTitle: productDetails.title,
        productURL: productDetails.url,
        SKU: productDetails.SKU,
        MRP: productDetails.price.MRP,
        quantity: quantity,
        price: productDetails.price.sellingPrice,
        thumbnilImg: productDetails.thumbnilImg,
        trackingLink: "",
        location: "",
      };
      state.checkoutForm.subtotal = parseInt(product.price) * parseInt(product.quantity);
      state.checkoutForm.products = [product];
    },

    updateShippingMethod: (state, action) => {
      const { id, charges } = action.payload;
      if (!id || charges === undefined) return;

      state.checkoutForm.shipping = {
        shippingType: id,
        shippingCharges: charges,
      };
    },
  },
});

export const {
  checkoutModelHandler,
  updateShippingMethod,
  checkoutFormHandler,
  buyNowButtonHandler,
} = checkoutSlice.actions;

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
