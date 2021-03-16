import axios from "axios";
const token = JSON.parse(sessionStorage.getItem("accessToken"));
export default axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api",
  headers: { Authorization: `Bearer ${token}` },
});
