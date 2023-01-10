import Axios from "axios";
import { SERVICES_URL } from "../constants/URL";

export async function getServiceData() {
  return new Promise((resolve, reject) => {
    Axios.get(SERVICES_URL)
      .then((response) => {
        return resolve(response?.data?.data);
      })
      .catch((error) => {
        reject(
          console.log("Error in fetching data from Database ===> " + error)
        );
      });
  });
}
