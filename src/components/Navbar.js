import React from "react"

import { useGlobalContext } from "../context"
import { Moon } from "phosphor-react"

import { Link } from "react-router-dom"

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext()

  return (
    <nav className="flex py-6 justify-between ">
      <div>
        <h1 className="text-base font-bold md:text-2xl">
          <Link to="/">Where in the world?</Link>
        </h1>
      </div>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="flex items-center space-x-1"
      >
        <Moon className="inline-block my-auto" size={"22px"} />{" "}
        <span>Dark Mode</span>
      </button>
    </nav>
  )
}

export default Navbar
