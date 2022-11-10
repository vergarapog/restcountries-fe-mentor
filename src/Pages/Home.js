import React from "react"
import styles from "../style"
import Searchbar from "../components/Searchbar"
import RegionDropdown from "../components/RegionDropdown"
import CountryList from "../components/CountryList"

const Home = () => {
  return (
    <section className="grid">
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between py-8">
        <div className="">
          <Searchbar />
        </div>
        <div className="">
          <RegionDropdown />
        </div>
      </div>
      <CountryList />
    </section>
  )
}

export default Home
