import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { useSelector } from "react-redux"

const CountryListPaginated = ({ itemsPerPage }) => {
  const countries = useSelector((state) => state.countries)

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = countries.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(countries.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % countries.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <>
      <Countries countries={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

const Countries = ({ countries }) => {
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

export default CountryListPaginated
