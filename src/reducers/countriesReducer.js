import { createSlice } from "@reduxjs/toolkit"
import countryService from "../services/countries"

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setCountries(state, action) {
      return action.payload
    },
    appendCountries(state, action) {
      return [...state, action.payload]
    },
  },
})

export const { setCountries, appendCountries } = blogSlice.actions

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll()
    dispatch(setCountries(countries))
  }
}

export const changeRegion = (region) => {
  return async (dispatch) => {
    if (region !== "all") {
      const countriesByRegion = await countryService.getByRegion(region)
      dispatch(setCountries(countriesByRegion))
    } else {
      const countries = await countryService.getAll()
      dispatch(setCountries(countries))
    }
  }
}

export default blogSlice.reducer
