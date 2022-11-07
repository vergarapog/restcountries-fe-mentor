import React from "react"
import styles from "../style"
import Searchbar from "../components/Searchbar"
import RegionDropdown from "../components/RegionDropdown"

const Home = () => {
  return (
    <section className="text-white">
      <div className="flex justify-between py-8">
        <div className="">
          <Searchbar />
        </div>
        <div className="">
          <RegionDropdown />
        </div>
      </div>
    </section>
  )
}

export default Home
