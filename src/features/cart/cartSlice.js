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
      const { productId, quantity, title, url } = action.payload;
      let alreadyExistInCart = false;
      const updatedCartList = state.cartList.map((product) => {
        if (product.productId === productId) {
          alreadyExistInCart = true;
          return { productId, quantity, title, url };
        }
        return product;
      });

      console.log({ productId, quantity, title, url, updatedCartList });

      if (!alreadyExistInCart) updatedCartList.push({ productId, quantity, title, url });

      localStorage.setItem("cart", JSON.stringify(updatedCartList));

      state.cartList = updatedCartList;
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
