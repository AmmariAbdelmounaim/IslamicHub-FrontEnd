import { SIGN_IN_PATH, SIGN_UP_PATH } from "../api";

interface ErrorHandler {
  [key: string]: {
    [key: number]: string;
  };
}

const errorHandler: ErrorHandler = {
  [SIGN_IN_PATH]: {
    400: "Invalid request data",
    401: "Email or password incorrect",
    429: "Too many requests. Please try again later",
    500: "Server error. Please try again later",
  },
  [SIGN_UP_PATH]: {
    400: "Invalid request data",
    409: "Email already in use",
    500: "Server error. Please try again later",
  },
};

export default errorHandler;
