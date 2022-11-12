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

const create = async (object) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, object, config)

  return response.data
}

const update = async (id, updatedObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedObject)
  return response.data
}

const destroy = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

export default { getAll, create, setToken, update, destroy }
