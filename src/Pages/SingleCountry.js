import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "phosphor-react"

const SingleCountry = ({ country }) => {
  const { name, population, region, capital, flags } = country
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
        <img src={flags.png} className="w-full h-full" alt="" />
      </div>{" "}
      <div className=" p-4 text-lighttext dark:text-darktext">
        <h2 className="font-extrabold text-lg">{name.common}</h2>
        <div className="pt-4 text-sm">
          <p className="font-light">
            <span className="font-semibold">Native name:</span>
            <ul>
              {" "}
              {Object.values(name.nativeName).map((name) => {
                return <li>{name.common}</li>
              })}
            </ul>
          </p>
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
    </section>
  )
}

export default SingleCountry
