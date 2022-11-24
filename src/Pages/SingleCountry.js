import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"

const SingleCountry = ({ country }) => {
  if (!country) {
    return <div>Loading....</div>
  }
  return (
    <section>
      <div>
        <Link to="/">
          <button className="flex items-center space-x-1 my-8 px-4 py-2 shadow-sm shadow-slate-700 bg-lightelement dark:bg-darkelement">
            <ArrowLeft size={"22px"} /> <div>Back</div>
          </button>
        </Link>
      </div>
      <div className="bg-lightelement dark:bg-darkelement text-lighttext dark:text-darktext">
        <img src={country.flags.png} className="w-full h-full" alt="" />
      </div>{" "}
      <div className=" p-4  text-lighttext dark:text-darktext">
        <h2 className="font-extrabold text-xl">{country.name.common}</h2>
        <div className="pt-4 text-sm space-y-3">
          <div className="font-light flex space-x-2">
            <span className="font-semibold">Native name:</span>
            <ul>
              {" "}
              {Object.values(country.name.nativeName).map((name) => {
                return <li key={name.common}>- {name.common}</li>
              })}
            </ul>
          </div>
          <p className="font-light">
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="font-light">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="font-light">
            <span className="font-semibold">Sub Region:</span>{" "}
            {country.subregion}
          </p>
          <p className="font-light">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>

        <div className="pt-12 text-sm space-y-3">
          <p className="font-light">
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {country.tld}
          </p>
          <p className="font-light">
            <span className="font-semibold">Currencies:</span>{" "}
            {Object.values(country.currencies).map((i) => (
              <>{i.name}</>
            ))}
          </p>
          <p className="font-light">
            <span className="font-semibold">Languages:</span>{" "}
            {Object.values(country.languages).map((language, index) => {
              if (index < Object.values(country.languages).length - 1) {
                return <>{language}, </>
              } else {
                return <>{language}</>
              }
            })}
          </p>
        </div>

        <div className="pt-12 space-y-3">
          <h2>Border Countries:</h2>
        </div>
      </div>
    </section>
  )
}

export default SingleCountry
