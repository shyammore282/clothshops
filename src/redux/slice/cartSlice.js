import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;
