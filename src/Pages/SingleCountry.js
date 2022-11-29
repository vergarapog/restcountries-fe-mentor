import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"
import Loading from "../components/Loading"
import { useSelector } from "react-redux"

const SingleCountry = ({ country }) => {
  const countries = useSelector((state) => {
    return state.countries
  })

  const convertToCommonName = (cca3Code) => {
    const foundCountry = countries.find((country) => {
      return country.cca3 === cca3Code
    })

    return foundCountry.name.common
  }

  if (!country) {
    return (
      <section>
        <div>
          <Link to="/">
            <button className="flex items-center space-x-1 my-8 px-4 py-2 shadow-sm shadow-slate-700 bg-lightelement dark:bg-darkelement">
              <ArrowLeft size={"22px"} /> <div>Back</div>
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center text-lighttext dark:text-darktext text-2xl min-h-[70vh]">
          <div>
            <Loading />
          </div>
        </div>
      </section>
    )
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
      <div className="bg-lightelement dark:bg-darkelement text-lighttext dark:text-darktext max-h-52">
        <img src={country.flags.png} className="w-full h-52" alt="" />
      </div>{" "}
      <div className=" p-4  text-lighttext dark:text-darktext">
        <h2 className="mt-8 font-extrabold text-xl">{country.name.common}</h2>
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

        {country.borders && (
          <div className="pt-12 space-y-3">
            <h2>Border Countries:</h2>
            <div className="flex text-sm flex-wrap gap-4 content-evenly">
              {country.borders.map((borderCountry) => {
                return (
                  <div className="bg-lightelement dark:bg-darkelement py-1 px-5 text-xs rounded">
                    {convertToCommonName(borderCountry)}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SingleCountry
