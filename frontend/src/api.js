import axios from "axios";

const API = axios.create({
  baseURL: "https://react-project1-ibfi.onrender.com/api",
});

export default API;