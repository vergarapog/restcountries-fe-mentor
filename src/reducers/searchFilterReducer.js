import { createSlice } from "@reduxjs/toolkit"

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState: "",
  reducers: {
    setSearchFilter(state, action) {
      return action.payload
    },
  },
})

export const { setSearchFilter } = searchFilterSlice.actions

export default searchFilterSlice.reducer
