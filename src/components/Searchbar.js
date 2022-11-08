import React from "react"

import { MagnifyingGlass } from "phosphor-react"
import { useGlobalContext } from "../context"

const Searchbar = () => {
  const { isDarkMode } = useGlobalContext()

  return (
    <div className="min-w flex bg-lightelement shadow dark:bg-darkelement px-4 rounded-lg space-x-2">
      <MagnifyingGlass
        className="inline my-auto"
        size={"22px"}
        color={isDarkMode ? "#ffffff" : "#000000"}
      />
      <input
        className="text-lighttext dark:bg-darkelement appearance-none  w-full py-3 px-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Search for a country..."
        size="50"
      />
    </div>
  )
}

export default Searchbar
