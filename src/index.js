import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import { AppProvider } from "./context"

import { Provider } from "react-redux"

import { BrowserRouter as Router } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop"

import store from "./reducers/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router>
    <Provider store={store}>
      <AppProvider>
        <ScrollToTop />
        <App />
      </AppProvider>
    </Provider>
  </Router>
)
