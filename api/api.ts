import axios from "axios";

const baseUrl = "http://www.omdbapi.com";
const apikey = "a9830ab7";

export const api = axios.create({
  baseURL: `${baseUrl}`,
  params: { apikey },
});
