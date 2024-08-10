import { createSlice } from "@reduxjs/toolkit";

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
      const { quantity, productDetails, variant, variantSKU } = action.payload;
      if (!quantity || !productDetails) return;
      const product = {
        productId: productDetails.productId,
        title: productDetails.title,
        productURL: productDetails.url,
        SKU: productDetails.SKU,
        MRP: productDetails.price.MRP,
        quantity: quantity,
        sellingPrice: productDetails.price.sellingPrice,
        thumbnilImg: productDetails.thumbnilImg,
        trackingLink: "",
        location: "",
        variant,
        variantSKU,
      };
      state.checkoutForm.products = [product];
      state.checkoutForm.subtotal = state.checkoutForm.products.reduce(
        (pre, cur) => pre + parseInt(cur.quantity) * parseInt(cur.sellingPrice),
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
        (pre, cur) => pre + parseInt(cur.quantity) * parseInt(cur.sellingPrice),
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
