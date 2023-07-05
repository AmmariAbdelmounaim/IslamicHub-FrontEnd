import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerIslamicCenter } from "./authAction";
import { User } from "../../types/types";

type AuthState = {
  loading: boolean;
  userInfo: User;
  userToken: string | null;
  error: string;
  success: boolean;
};

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: "", // for storing the JWT
  error: "",
  success: false, // for monitoring the registration process.
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerIslamicCenter.pending, (state: AuthState) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(registerIslamicCenter.fulfilled, (state: AuthState) => {
        state.loading = false;
        state.success = true; // registration successful
      }),
      builder.addCase(
        registerIslamicCenter.rejected,
        (state: AuthState, { payload }) => {
          state.loading = false;
          state.error = payload as string;
        }
      );
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
