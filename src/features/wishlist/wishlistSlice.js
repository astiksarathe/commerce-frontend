import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  isLoading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      const updatedCart = state.wishlist.filter((productId) => action.payload !== productId);
      state.wishlist = updatedCart;
      localStorage.setItem("wishlist", JSON.stringify(updatedCart));
    },
    synchWishListWithLS: (state) => {
      const wishlistFromLS = JSON.parse(localStorage.getItem("wishlist"));
      state.wishlist = wishlistFromLS;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
