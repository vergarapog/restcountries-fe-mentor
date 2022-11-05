import React, { useState, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <AppContext.Provider
      value={{ isDarkMode, setIsDarkMode }} // provide states to be provided to the app
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
