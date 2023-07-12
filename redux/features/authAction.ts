import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_UP_PATH } from "../../myAxios";
import axios from "../../myAxios/services";
import { User } from "../../types/types";

export const registerIslamicCenter = createAsyncThunk(
  "auth/register",
  async ({
    islamicCenterName,
    email,
    password,
    country,
    address,
    phoneNumber,
  }: User) => {
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
    } catch (error) {
      console.log("error");
    }
  }
);
