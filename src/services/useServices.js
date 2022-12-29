import httpServices, { setCommonHeader } from "./httpservices";
import jwtDeCode from "jwt-decode";

const TOKEN_KEY = "token";

setTokenHeader();

export function signUp(user) {
  return httpServices.post("/users", user);
}
export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export async function logInUser(credentials) {
  const { data } = await httpServices.post("/auth", credentials);
  localStorage.setItem(TOKEN_KEY, data.token);
  setTokenHeader();
}

export function setTokenHeader() {
  setCommonHeader("x-auth-token", getJwt());
  //   console.log(axios.defaults.headers.common["x-auth-token"]);
}

export function logOut() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}
export function getUser() {
  try {
    const token = getJwt();
    return jwtDeCode(token);
  } catch {
    return null;
  }
}
const userServices = {
  signUp,
  logInUser,
  getJwt,
  logOut,
  getUser,
};
export default userServices;
