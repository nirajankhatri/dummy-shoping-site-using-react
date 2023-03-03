import axios from "axios";

const dummyjsonInstance = axios.create({
  baseURL: "https://dummyjso.com",
  headers: {
    Accept: "application/json",
  },
  timeout: 4000,
});

dummyjsonInstance.interceptors.request.use((request) => {
  console.log("Request: ", request);
  return request;
});

dummyjsonInstance.interceptors.response.use((response) => {
  console.log("Response: ", response);
  return response;
});

export default dummyjsonInstance;
