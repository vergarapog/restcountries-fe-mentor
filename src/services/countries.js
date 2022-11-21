import axios from "axios"
const baseUrl = "https://restcountries.com/v3.1/"

let token = null
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/all`)
  return response.data
}

const getByRegion = async (region) => {
  const response = await axios.get(`${baseUrl}/region/${region}`)
  return response.data
}

export default { getAll, getByRegion }
