import Axios from "axios";

// Axios instance for API calls
export const AuthAxios = Axios.create({
  baseURL: "",
  withCredentials: false,
});

// Axios instance for authentication related calls
export const BaseAxios = Axios.create({
  baseURL: "https://sterling-dictionary.onrender.com/api/v1/",
});
