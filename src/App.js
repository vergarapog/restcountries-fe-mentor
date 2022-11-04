import React from "react"
import styles from "./style"

import { useGlobalContext } from "./context"

import Navbar from "./components/Navbar"

const App = () => {
  const { isDarkMode } = useGlobalContext()
  return (
    <div className={`${isDarkMode ? "dark" : ""}  w-full overflow-hidden`}>
      <div
        className={`dark:bg-darkbg dark:text-darktext ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App
