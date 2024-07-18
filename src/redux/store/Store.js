import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default Store;
