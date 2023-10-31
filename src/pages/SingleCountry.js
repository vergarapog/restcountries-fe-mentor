import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleCountry = ({ country }) => {
  const countries = useSelector((state) => {
    return state.countries;
  });

  const navigate = useNavigate();

  const convertToCommonName = (cca3Code) => {
    const foundCountry = countries.find((country) => {
      return country.cca3 === cca3Code;
    });

    const commonName = foundCountry ? foundCountry.name.common : "";
    return commonName;
  };

  if (!country) {
    return (
      <section>
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-1 my-8 px-4 py-2 shadow-sm shadow-slate-700 bg-lightelement dark:bg-darkelement hover:bg-darkelement hover:text-white dark:hover:bg-lightelement dark:hover:text-black transition-all"
          >
            <ArrowLeft size={"22px"} /> <div>Back</div>
          </button>
        </div>
        <div className="flex items-center justify-center text-lighttext dark:text-darktext text-2xl min-h-[70vh]">
          <div>
            <Loading />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section>
      <div>
        <Link to="/">
          <button className="flex items-center space-x-1 my-8 px-4 py-2 shadow-sm shadow-slate-700 bg-lightelement dark:bg-darkelement hover:bg-darkelement hover:text-white dark:hover:bg-lightelement dark:hover:text-black transition-all">
            <ArrowLeft size={"22px"} /> <div>Back</div>
          </button>
        </Link>
      </div>
      <div className="lg:grid grid-cols-2 gap-28 min-h-[70vh]">
        <div className=" text-lighttext dark:text-darktext max-h-52  lg:mt-12">
          <img
            src={country.flags.png}
            className="max-w- sm:max-w-2xl h-52 lg:object-cover lg:h-96 "
            alt=""
          />
        </div>
        <div className="p-4 text-lighttext dark:text-darktext">
          <h2 className="mt-8 font-extrabold text-xl md:text-2xl">
            {country.name.common}
          </h2>
          <div className="pt-4 text-sm md:text-base space-y-3">
            <div className="font-light flex space-x-2">
              <span className="font-semibold">Native name:</span>
              <ul>
                {" "}
                {Object.values(country.name.nativeName).map((name) => {
                  return <li key={name.common}>- {name.common}</li>;
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

          <div className="pt-12 text-sm md:text-base space-y-3">
            <p className="font-light">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {country.tld}
            </p>
            <p className="font-light">
              <span className="font-semibold">Currencies:</span>{" "}
              {Object.values(country.currencies).map((i) => (
                <React.Fragment key={i.name}>{i.name}</React.Fragment>
              ))}
            </p>
            <p className="font-light">
              <span className="font-semibold">Languages:</span>{" "}
              {Object.values(country.languages)
                .sort()
                .map((language, index) => {
                  if (index < Object.values(country.languages).length - 1) {
                    return (
                      <React.Fragment key={language}>
                        {language},{" "}
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <React.Fragment key={language}>{language}</React.Fragment>
                    );
                  }
                })}
            </p>
          </div>

          {country.borders && (
            <div className="pt-12 space-y-3">
              <h2 className="md:text-lg">Border Countries:</h2>
              <div className="flex text-sm md:text-base flex-wrap gap-4 content-evenly">
                {country.borders.map((borderCountry) => {
                  return (
                    <div
                      key={borderCountry}
                      className="bg-lightelement dark:bg-darkelement py-1 px-5 text-xs md:text-base rounded"
                    >
                      {convertToCommonName(borderCountry)}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleCountry;
