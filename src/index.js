import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import { AppProvider } from "./context"

import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

import countriesReducer from "./reducers/countriesReducer"
import searchFilterReducer from "./reducers/searchFilterReducer"

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    searchFilter: searchFilterReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
)
