import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/index";

const baseURL = BASE_URL;
const instance = axios.create({
  baseURL,
  //   timeout: 10000,
});
instance.interceptors.request.use(
  function (config) {
    // const token = localStorage.getItem("token");
    const token = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { status } = error.response;
    switch (status) {
      case 204:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "204 Error",
        });
        break;
      case 304:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "304 Error",
        });
        break;
      case 400:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "400 Error",
        });
        break;
      case 401:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "401 UnAuthorized",
        });
        break;
      case 402:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "402 Error",
        });
        break;
      case 403:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "403 Error",
        });
        break;
      case 404:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "404 Error",
        });
        break;
      case 405:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "405 Error",
        });
        break;

      default:
        Swal.fire({
          icon: "error",
          title: "SomeThing Wrong",
          text: "An Unknown Error occured",
        });
        break;
    }
    return Promise.reject(error);
  }
);

export default instance;
