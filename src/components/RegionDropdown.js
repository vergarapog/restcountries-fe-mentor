import React from "react"
import { useGlobalContext } from "../context"
import { useDispatch, useSelector } from "react-redux"
import { setRegionFilter } from "../reducers/regionFilterReducer"
import { changeRegion } from "../reducers/countriesReducer"

const RegionDropdown = () => {
  const { isDarkMode } = useGlobalContext()
  const dispatch = useDispatch()
  const selected = useSelector((state) => state.regionFilter)

  const handleChangeRegion = (e) => {
    dispatch(setRegionFilter(e.target.value))
    dispatch(changeRegion(e.target.value))
  }
  return (
    <div className="relative w-52 text-lighttext dark:text-darktext">
      <select
        className="appearance-none w-full bg-lightbg dark:bg-darkelement px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none"
        value={selected}
        onChange={handleChangeRegion}
      >
        <option value="default" disabled hidden>
          Filter by Region
        </option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${
          isDarkMode ? "text-darktext" : "text-lighttext"
        }`}
      >
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export default RegionDropdown
