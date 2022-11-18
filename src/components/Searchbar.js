import React from "react"

import { MagnifyingGlass } from "phosphor-react"
import { useGlobalContext } from "../context"
import { setSearchFilter } from "../reducers/searchFilterReducer"
import { useDispatch, useSelector } from "react-redux"

const Searchbar = () => {
  const { isDarkMode } = useGlobalContext()
  const searchFilter = useSelector((state) => state.searchFilter)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setSearchFilter(e.target.value))
  }

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
        value={searchFilter}
        onChange={handleChange}
      />
    </div>
  )
}

export default Searchbar
