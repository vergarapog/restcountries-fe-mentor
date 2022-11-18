import { createSlice } from "@reduxjs/toolkit"

const regionFilterSlice = createSlice({
  name: "regionFilter",
  initialState: "default",
  reducers: {
    setRegionFilter(state, action) {
      return action.payload
    },
  },
})

export const { setRegionFilter } = regionFilterSlice.actions

export default regionFilterSlice.reducer
