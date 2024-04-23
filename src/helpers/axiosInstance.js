import Axios from "axios";

// Axios instance for API calls
export const AuthAxios = Axios.create({
  baseURL: "",
  withCredentials: false,
});

// Axios instance for authentication related calls
export const BaseAxios = Axios.create({
  baseURL: "https://mycliq-staging-6cffceb00c13.herokuapp.com/api/",
  withCredentials: false,
});
