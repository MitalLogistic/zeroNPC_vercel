import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    email: null,
  },
  reducers: {
    // customerLoginSet: (state, action) => {
    //   state.auth = true;
    //   if (action.payload.type) {
    //     state.user_type = action.payload.type;
    //   } else if (action.payload.data && action.payload.data.type) {
    //     state.user_id = action.payload.data.user_id
    //     state.user_type = action.payload.data.type;
    //     state.wallet_id = action.payload.data.walletId
    //   } else {
    //     state.user_type = "";
    //   }
    //   state.token = action.payload.token || "";
    // },
    setLogin(state, action) {
      state.auth = true;
      state.userData = action.payload; // save full login data
    },
    setLogout(state) {
      state.auth = false;
      state.userData = null;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setLogin, setLogout, setEmail } = authSlice.actions;
export default authSlice.reducer;
