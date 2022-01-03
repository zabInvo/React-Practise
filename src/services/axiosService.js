import axios from "axios";

const baseUrl = "http://localhost:3000/api/";
// Set config defaults when creating the instance
const service = {
  post: (endpoint, token, payload) => {
    const instance = axios.create({
      baseURL: baseUrl,
      headers: {
        token: token,
      },
    });
    return instance.post(`${baseUrl}` + `${endpoint}`, payload);
  },
};

export default service;
