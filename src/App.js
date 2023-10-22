import React from "react";
import styles from "./style";

import { useGlobalContext } from "./context";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeCountries } from "./reducers/countriesReducer";

import { Routes, Route, useMatch } from "react-router-dom";
import SingleCountry from "./pages/SingleCountry";

const App = () => {
  const { isDarkMode, getDarkModePref } = useGlobalContext();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(initializeCountries());
    getDarkModePref();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const match = useMatch("/country/:id");
  const country = match
    ? countries.find((country) => country.name.common === match.params.id)
    : null;

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      }  w-full overflow-hidden flex flex-col font-nunito`}
    >
      <div
        className={`text-lighttext dark:bg-darkelement dark:text-darktext ${styles.paddingX} ${styles.flexCenter} border-b-4 border-gray-200 dark:border-gray-800 transition duration-300`}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div
        className={`text-lighttext dark:text-darktext bg-primary bg-lightbg dark:bg-darkbg ${styles.paddingX} ${styles.flexStart} transition duration-300`}
      >
        <div className={`${styles.boxWidth} `}>
          <Routes>
            <Route
              path="/country/:id"
              element={<SingleCountry country={country} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
