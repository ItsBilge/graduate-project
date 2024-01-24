import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginStore = createSlice({
  name: "login",
  initialState: {
    users: {},
    loginStatus: false,
  },
  reducers: {
    login: async (state, action) => {
      const url = "https://localhost:7007/api/Register/login";
      //   state.baskets = [action.payload, ...state.baskets];
      const response = await axios.post(url, {
        Email: action.payload.email,
        Password: action.payload.password,
      });

      if (response.status === 200) {
        debugger;
        localStorage.setItem("user", JSON.stringify(response));
        debugger;
      } else {
        console.log(response);
        debugger;
      }
      // .then((response) => {
      //   debugger;
      //   console.log(response);
      //   state.loginStatus = true;
      //   localStorage.setItem("user", JSON.stringify(state.baskets));
      //   debugger;
      // })
      // .catch((err) => {
      //   debugger;
      //   //   state.loginStatus = false;
      //   console.log(err);
      // });
    },
    logOut: (state, action) => {},
  },
});

export const { login } = loginStore.actions;
export default loginStore.reducer;
