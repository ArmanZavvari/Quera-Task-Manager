import http from "./httpService";
import * as endpoint from "../config.json";
import { LoginFormData, SignupFormData } from "../types/types";

const { apiUrl } = endpoint;

const apiEndpoint = apiUrl;

export function register(payload: SignupFormData) {
  return http.post("accounts/", payload);
}

export function login(payload: LoginFormData) {
  return http.post("accounts/login/", payload);
}

export default {
  register,
  login,
};
