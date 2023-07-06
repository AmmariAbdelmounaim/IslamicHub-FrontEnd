import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_UP_PATH } from "../../myAxios";
import axios from "../../myAxios/services";

export const registerIslamicCenter = createAsyncThunk(
  "auth/register",
  async ({
    islamicCenterName,
    email,
    password,
    country,
    address,
    phoneNumber,
  }: {
    islamicCenterName: string;
    email: string;
    password: string;
    country: string;
    address: string;
    phoneNumber: string;
  }) => {
    try {
      const response = await axios.post(SIGN_UP_PATH, {
        firstname: islamicCenterName,
        lastname: "",
        email,
        password,
        ville: country,
        adresse: address,
        tele: phoneNumber,
      });

      return response;

      // Further logic or dispatch actions upon successful registration
    } catch (error) {
      console.log("error");
      // Handle any error occurred during registration
    }
  }
);
