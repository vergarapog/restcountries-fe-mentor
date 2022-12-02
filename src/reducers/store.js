import { configureStore } from "@reduxjs/toolkit"

import countriesReducer from "./countriesReducer"
import searchFilterReducer from "./searchFilterReducer"
import regionFilterReducer from "./regionFilterReducer"

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    searchFilter: searchFilterReducer,
    regionFilter: regionFilterReducer,
  },
})

export default store
