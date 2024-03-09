import http from "./httpService";
import {
  ForgetPasswordData,
  LoginFormData,
  SignupFormData,
} from "../types/types";

export function register(payload: SignupFormData) {
  return http.post("accounts/", payload);
}

export function login(payload: LoginFormData) {
  return http.post("accounts/login/", payload);
}

export function forgetPassword(payload: ForgetPasswordData) {
  return http.post("accounts/reset-password/", payload);
}

export default {
  register,
  login,
};
