import { createSlice } from "@reduxjs/toolkit";
import { extractProductDetails } from "../../utils/common";

const initialState = {
  cartList: [],
  cartValue: 0,
  isLoading: false,
  error: null,
  isCartDrawerOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartDrawerHandler: (state, action) => {
      state.isCartDrawerOpen = action.payload || false;
    },
    setCart: (state, action) => {
      const cartList = JSON.parse(localStorage.getItem("cart"));

      if (cartList?.length) {
        state.cartList = cartList;
        state.cartValue = state.cartList.reduce(
          (acc, cur) => acc + cur.price.sellingPrice * cur.quantity,
          0
        );
      }
    },
    addToCart: (state, action) => {
      const newProduct = extractProductDetails(action.payload);

      // Find the index of the existing product in the cart
      const productIndex = state.cartList.findIndex(
        (item) => item.productId === newProduct.productId
      );

      if (productIndex >= 0) {
        // Update the existing product in the cart
        state.cartList[productIndex] = newProduct;
      } else {
        // Add the new product to the cart
        state.cartList.push(newProduct);
      }

      // Recalculate the cart value
      state.cartValue = state.cartList.reduce(
        (total, product) =>
          total + product.price.sellingPrice * product.quantity,
        0
      );

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const updatedCartList = state.cartList.filter(
        (product) => product.productId !== productId
      );

      state.cartList = updatedCartList;

      state.cartValue = state.cartList.reduce(
        (acc, cur) => acc + cur.price.sellingPrice * cur.quantity,
        0
      );

      localStorage.setItem("cart", JSON.stringify(updatedCartList));
    },
    // Additional reducers can be defined here if needed
  },
});

export const { cartDrawerHandler, addToCart, removeFromCart, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
