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
      const { productId, quantity, title } = action.payload.productId;
      let alreadyExistInCart = false;

      const updatedCartList = state.map((product) => {
        if (product.productId === productId) {
          alreadyExistInCart = true;
          return { productId, quantity, title };
        }
        return product;
      });

      if (!alreadyExistInCart) updatedCartList.push({ productId, quantity, title });

      localStorage.setItem("cart", JSON.stringify(updatedCartList));

      state.cartList = updatedCartList;
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload.productId;
      const updatedCartList = state.filter((product) => product.productId !== productId);
      state.cartList = updatedCartList;
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
    },
    // Additional reducers can be defined here if needed
  },
});

export const { cartDrawerHandler } = cartSlice.actions;

export default cartSlice.reducer;
