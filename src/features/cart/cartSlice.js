import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
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
      state.cartList = cartList;
    },
    addToCart: (state, action) => {
      const { productId, quantity, title, url, price } = action.payload;

      // Find the existing product index
      const productIndex = state.cartList.findIndex((product) => product.productId === productId);

      // Create the updated product object
      const updatedProduct = {
        productId,
        quantity,
        title,
        url,
        sellingPrice: price.sellingPrice,
        MRP: price.MRP,
      };

      if (productIndex >= 0) {
        // Update the existing product
        state.cartList[productIndex] = updatedProduct;
      } else {
        // Add the new product to the cart
        state.cartList.push(updatedProduct);
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const updatedCartList = state.cartList.filter((product) => product.productId !== productId);
      state.cartList = updatedCartList;
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
    },
    // Additional reducers can be defined here if needed
  },
});

export const { cartDrawerHandler, addToCart, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
