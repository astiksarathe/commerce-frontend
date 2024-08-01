import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutForm: {
    personalDetails: {},
    shippingAddress: {},
    billingAddress: {},
    billingSameAsShipping: true,
    paymentStatus: { paymentMode: 1 },
    subscribeToUpdate: true,
    products: [
      {
        productId: " productDetails.productId",
        productTitle: " productDetails.title",
        productURL: " productDetails.url",
        SKU: " productDetails.SKU",
        MRP: " productDetails.price.MRP",
        quantity: 5,
        price: 900,
        thumbnilImg: " productDetails.thumbnilImg",
        trackingLink: " ",
        location: "",
      },
      {
        productId: " productDetails.productId",
        productTitle: " productDetails.title",
        productURL: " productDetails.url",
        SKU: " productDetails.SKU",
        MRP: " productDetails.price.MRP",
        quantity: 4,
        price: 900,
        thumbnilImg: " productDetails.thumbnilImg",
        trackingLink: " ",
        location: "",
      },
    ],
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
      state.checkoutForm.products = [product];
      state.checkoutForm.subtotal = state.checkoutForm.products.reduce(
        (pre, cur) => pre + parseInt(cur.quantity) * parseInt(cur.price),
        0
      );
      state.checkoutForm.totalPrice = state.checkoutForm.subtotal;
      state.checkoutForm.totalAmount =
        state.checkoutForm.totalPrice + state.checkoutForm.shipping.shippingCharges;
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
  },
});

export const {
  checkoutModelHandler,
  updateShippingMethod,
  checkoutFormHandler,
  buyNowButtonHandler,
  addShippingDetails,
  addPersonalDetails,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
