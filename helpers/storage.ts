import { User } from "../types/types";
import { decode, encode } from "base-64";

const getUser = (): User | undefined => {
  try {
    const user: User = JSON.parse(decode(localStorage.getItem("user") || ""));
    return user;
  } catch {
    return undefined;
  }
};
const getToken = () => localStorage.getItem("token");
const isLoggedIn = () => localStorage.getItem("user") !== null;
const setToken = (token: string) => localStorage.setItem("token", token);
const setUser = (user: object) =>
  localStorage.setItem("user", encode(JSON.stringify(user)));
const clear = () => localStorage.clear();

const storageConfig = {
  getUser,
  getToken,
  isLoggedIn,
  setToken,
  setUser,
  clear,
};

export default storageConfig;
