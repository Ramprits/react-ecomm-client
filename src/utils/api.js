import axios from "axios";
import { TOKEN_KEY } from "constants";

export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    if (request.headers) {
      request.headers["xc-auth"] = `${token}`;
    } else {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return request;
});
