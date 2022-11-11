import React from "react"
import styles from "./style"

import { useGlobalContext } from "./context"

import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Footer from "./components/Footer"

const App = () => {
  const { isDarkMode } = useGlobalContext()
  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      }  w-full overflow-hidden flex flex-col font-nunito`}
    >
      <div
        className={`dark:bg-darkelement dark:text-darktext ${styles.paddingX} ${styles.flexCenter} border-b-4 border-gray-200 dark:border-gray-800`}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div
        className={`bg-primary bg-lightbg dark:bg-darkbg ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth} `}>
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
