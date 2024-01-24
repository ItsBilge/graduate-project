import { configureStore } from "@reduxjs/toolkit";
import basket from "./basketSlice";
import loginStore from "./loginSlice";

const store = configureStore({
  reducer: {
    basket,
    loginStore,
  },
});

export default store;
