import axios from "axios";
import { API } from "../config/api.constants";

export function HttpGet(uri) {
  let url = API.SERVER_URI + "/" + uri;

  return axios.get(url);
  // .then(response => {
  //   result = response;
  // })
  // .catch(e => {
  //   result = this.errors.push(e);
  // });
}
