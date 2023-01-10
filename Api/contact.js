import Axios from "axios";
import { CONTACTUS_URL } from "../constants/URL";

export async function postRequestApi(userData) {
  return new Promise(async (resolve, reject) => {
    await Axios.post(CONTACTUS_URL, userData)
      .then(async (response) => {
        resolve(response);
      })
      .catch(async (error) => {
        reject(console.log("Erorr in fetching data ===> " + error));
      });
  });
}
