import { instance } from "../api";
const setDefaultHeader = () => {
  const token = localStorage.token;
  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};
export default setDefaultHeader;
