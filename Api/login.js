import Axios from "axios";
import { LOGIN_URL } from "../constants/URL";

export const login = async () => {
  return new Promise((resolve, reject) => {
    Axios.post(LOGIN_URL, {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    })
      .then((response) => {
        const token = response.data.result.token;
        Axios.defaults.headers.common["Authorization"] = token;
        resolve(sessionStorage.setItem("token", JSON.stringify(token)));
      })
      .catch((err) => {
        reject(console.log("Error in login from admin side ===> " + err));
      });
  });
};
