import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  userInfo: string | null;
};

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(registerIslamicCenter.pending, (state: AuthState) => {
  //     state.loading = true;
  //     state.error = "";
  //   }),
  //     builder.addCase(registerIslamicCenter.fulfilled, (state: AuthState , action) => {
  //       state.loading = false;
  //       state.userInfo = action.payload ;
  //       state.success = true; // registration successful
  //     }),
  //     builder.addCase(
  //       registerIslamicCenter.rejected,
  //       (state: AuthState, { payload }) => {
  //         state.loading = false;
  //         state.error = payload as string;
  //       }
  //     );
  // },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
