import axios from "axios";
import * as endPoint from "../config.json";
const apiEndpoint = endPoint;

const http = axios.create({
  baseURL: apiEndpoint.apiUrl,
});

export default {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};
