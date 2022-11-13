import React from "react"
import { useSelector } from "react-redux"

const CountryList = () => {
  const countries = useSelector((state) => state.countries)

  if (countries.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="py-8 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 justify-items-center items-center">
        {countries.map((country) => {
          return <Country key={country.name.official} country={country} />
        })}
      </div>
    </div>
  )
}

const Country = ({ country }) => {
  const { name, population, region, capital, flags } = country
  return (
    <div className="w-64 h-80 bg-lightelement dark:bg-darkelement text-lighttext dark:text-darktext">
      {" "}
      <div>
        <img src={flags.png} alt="" />
      </div>{" "}
      <div className="p-4 text-lighttext dark:text-darktext">
        <h2 className="font-extrabold text-lg">{name.common}</h2>
        <div className="pt-4 text-sm">
          <p className="font-light">
            <span className="font-semibold">Population:</span> {population}
          </p>
          <p className="font-light">
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p className="font-light">
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryList
