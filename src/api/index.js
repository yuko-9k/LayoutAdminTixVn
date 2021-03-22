import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("USER"));
export default axios.create({
	baseURL: "https://movie0706.cybersoft.edu.vn/api",
  headers: { Authorization: `Bearer ${user?.accessToken}` }
});
