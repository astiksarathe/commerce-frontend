import { createSlice } from "@reduxjs/toolkit";

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
          (acc, cur) => acc + cur.sellingPrice * cur.quantity,
          0
        );
      }
    },
    addToCart: (state, action) => {
      const { productId, quantity, title, url, price, MRP, sellingPrice } = action.payload;
      // Find the existing product index
      const productIndex = state.cartList.findIndex((product) => product.productId === productId);

      // Create the updated product object
      const updatedProduct = {
        productId,
        quantity,
        title,
        url,
        sellingPrice: price?.sellingPrice || sellingPrice,
        MRP: price?.MRP || MRP,
      };

      if (productIndex >= 0) {
        // Update the existing product
        state.cartList[productIndex] = updatedProduct;
      } else {
        // Add the new product to the cart
        state.cartList.push(updatedProduct);
      }
      if (state.cartList?.length) {
        state.cartValue = state.cartList.reduce(
          (acc, cur) => acc + cur.sellingPrice * cur.quantity,
          0
        );
      }
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const updatedCartList = state.cartList.filter((product) => product.productId !== productId);
      state.cartList = updatedCartList;
      if (state.cartList?.length) {
        state.cartValue = state.cartList.reduce(
          (acc, cur) => acc + cur.sellingPrice * cur.quantity,
          0
        );
      }
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
    },
    // Additional reducers can be defined here if needed
  },
});

export const { cartDrawerHandler, addToCart, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
