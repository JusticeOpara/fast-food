import axios from "axios";

const axioClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axioClient;
