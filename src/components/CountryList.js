import React from "react"

const CountryList = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-9 justify-items-center items-center">
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
      <div className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        magni.
      </div>
    </div>
  )
}

export default CountryList
