import { createSlice } from "@reduxjs/toolkit";
import { extractProductDetails } from "../../utils/common";

const initialState = {
  checkoutForm: {
    personalDetails: {},
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
    totalPrice: 0,
    totalAmount: 0,
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
    // Checkout Modal Method
    checkoutModelHandler: (state, action) => {
      state.isCheckoutModelOpen = action.payload;
    },

    // Checkout Form Related Methods
    checkoutFormHandler: (state, action) => {
      const { name, value, key } = action.payload;
      if (!name || value === undefined) return;

      if (!key) {
        state.checkoutForm[name] = value;
      } else {
        state.checkoutForm[key] = { ...state.checkoutForm[key], [name]: value };
      }
    },
    addShippingDetails: (state, action) => {
      state.checkoutForm.shippingAddress = action.payload;
    },
    addPersonalDetails: (state, action) => {
      state.checkoutForm.personalDetails = action.payload;
    },
    updateShippingMethod: (state, action) => {
      const { id, charges } = action.payload;
      if (!id || charges === undefined) return;

      state.checkoutForm.shipping = {
        shippingType: id,
        shippingCharges: charges,
      };
      const totalProductPrice = state.checkoutForm.products.reduce(
        (pre, cur) => pre + parseInt(cur.quantity) * parseInt(cur.price),
        0
      );
      state.checkoutForm.totalAmount = totalProductPrice + charges;
    },
    // Buy now Button Method
    buyNowButtonHandler: (state, action) => {
      const newProduct = extractProductDetails(action.payload);
      if (!newProduct.quantity) return;

      // thumbnilImg: productDetails.thumbnilImg,
      state.checkoutForm.products = [newProduct];
      state.checkoutForm.subtotal = state.checkoutForm.products.reduce(
        (pre, cur) =>
          pre + parseInt(cur.quantity) * parseInt(cur.price.sellingPrice),
        0
      );
      state.checkoutForm.totalPrice = state.checkoutForm.subtotal;
      state.checkoutForm.totalAmount =
        state.checkoutForm.totalPrice +
        state.checkoutForm.shipping.shippingCharges;
    },
    // cart page checkout button function
    moveToCheckout: (state, action) => {
      state.checkoutForm.products = action.payload;
      state.checkoutForm.subtotal = state.checkoutForm.products.reduce(
        (pre, cur) =>
          pre + parseInt(cur.quantity) * parseInt(cur.price.sellingPrice),
        0
      );
      state.checkoutForm.totalPrice = state.checkoutForm.subtotal;
      state.checkoutForm.totalAmount =
        state.checkoutForm.totalPrice +
        state.checkoutForm.shipping.shippingCharges;
    },
  },
});

export const {
  checkoutModelHandler,
  updateShippingMethod,
  checkoutFormHandler,
  buyNowButtonHandler,
  addShippingDetails,
  addPersonalDetails,
  moveToCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
