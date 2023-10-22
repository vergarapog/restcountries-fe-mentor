import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/";

// let token = null
// const setToken = (newToken) => {
//   token = `bearer ${newToken}`
// }

export const getAll = async () => {
  const response = await axios.get(`${baseUrl}/all`);
  return response.data;
};

export const getByRegion = async (region) => {
  const response = await axios.get(`${baseUrl}/region/${region}`);
  return response.data;
};

const exportedObject = {
  getAll,
  getByRegion,
};

export default exportedObject;
