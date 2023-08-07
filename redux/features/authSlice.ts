"use client";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/types";

type AuthState = {
  userInfo: User | null;
};

const initialState = {
  userInfo:
    typeof window !== "undefined" && window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo") as string)
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
    setCenter: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO = action.payload;
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    setTheme: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.themeDTO = action.payload;
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    setHeaderFooter: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.headerFooterDTO = action.payload;
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, setCenter, setTheme, setHeaderFooter, logout } =
  authSlice.actions;
export default authSlice.reducer;
