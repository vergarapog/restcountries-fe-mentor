import React from "react"

const CountryList = () => {
  return (
    <div>
      <div className="py-8 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 justify-items-center items-center">
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
      </div>
    </div>
  )
}

const Country = () => {
  return (
    <div className="w-64 h-80 bg-lightelement dark:bg-darkelement text-lighttext dark:text-darktext">
      {" "}
      <div>
        <img src="https://placekitten.com/640/360" alt="" />
      </div>{" "}
      <div className="p-4 text-lighttext dark:text-darktext">
        <h2 className="font-extrabold text-lg">United States of America</h2>
        <div className="pt-4 text-sm">
          <p className="font-light">
            <span className="font-semibold">Population:</span> 123123
          </p>
          <p className="font-light">
            <span className="font-semibold">Region:</span> Europe
          </p>
          <p className="font-light">
            <span className="font-semibold">Capital:</span> Berlin
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryList
