import React from "react"

import { useGlobalContext } from "../context"

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext()

  return (
    <nav className="flex p-6 justify-between">
      <div>
        <h1 className="font-bold text-2xl">Where in the world?</h1>
      </div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Dark Mode
      </button>
    </nav>
  )
}

export default Navbar
