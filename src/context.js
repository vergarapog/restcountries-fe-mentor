import React, { useState, useContext } from "react"
import { useEffect } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  const getDarkModePref = () => {
    const darkModePref = window.localStorage.getItem("isDarkMode")
    console.log(darkModePref)
    if (darkModePref) {
      setDarkMode(darkModePref)
    }
  }

  const setIsDarkMode = () => {
    setDarkMode(!isDarkMode)

    isDarkMode
      ? window.localStorage.setItem("isDarkMode", "")
      : window.localStorage.setItem("isDarkMode", "true")
  }

  return (
    <AppContext.Provider
      value={{ isDarkMode, setIsDarkMode, getDarkModePref }} // provide states to be provided to the app
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
