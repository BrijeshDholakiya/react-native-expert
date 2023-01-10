import Axios from "axios";
import { PROJECTS_URL } from "../constants/URL";

export async function getProjectCardData() {
  return new Promise(async (resolve, reject) => {
    await Axios.get(PROJECTS_URL)
      .then(async (response) => {
        console.log(response.data);
        resolve(await response?.data.result);
      })
      .catch(async (error) => {
        reject(console.log("Erorr in fetching datass ===> ", error));
      });
  });
}

export async function getProjectDetailsById(id) {
  return new Promise(async (resolve, reject) => {
    await Axios.get(`${PROJECTS_URL}/${id}`)
      .then(async (response) => {
        console.log(response);
        resolve(await response?.data.result);
      })
      .catch(async (error) => {
        reject(console.log("Erorr in fetching data ===> " + error));
      });
  });
}
