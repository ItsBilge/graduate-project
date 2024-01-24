import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const basket = createSlice({
  name: "basket",
  initialState: {
    baskets: [],
  },
  reducers: {
    addBasket: (state, action) => {
      state.baskets = [action.payload, ...state.baskets];

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Etkinlik başarıyla sepete eklendi",
        showConfirmButton: false,
        timer: 1500,
      });

      localStorage.setItem("baskets", JSON.stringify(state.baskets));
    },
  },
});

export const { addBasket } = basket.actions;
export default basket.reducer;
