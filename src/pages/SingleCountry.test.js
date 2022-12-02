import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SingleCountry from "./SingleCountry"
import { Provider } from "react-redux"

import store from "../reducers/store"
import { MemoryRouter as Router } from "react-router-dom"

test("renders single country page with belgium", async () => {
  const country = {
    name: {
      common: "Belgium",
      official: "Kingdom of Belgium",
      nativeName: {
        deu: {
          official: "Königreich Belgien",
          common: "Belgien",
        },
        fra: {
          official: "Royaume de Belgique",
          common: "Belgique",
        },
        nld: {
          official: "Koninkrijk België",
          common: "België",
        },
      },
    },
    tld: [".be"],
    cca2: "BE",
    ccn3: "056",
    cca3: "BEL",
    cioc: "BEL",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    idd: {
      root: "+3",
      suffixes: ["2"],
    },
    capital: ["Brussels"],
    altSpellings: [
      "BE",
      "België",
      "Belgie",
      "Belgien",
      "Belgique",
      "Kingdom of Belgium",
      "Koninkrijk België",
      "Royaume de Belgique",
      "Königreich Belgien",
    ],
    region: "Europe",
    subregion: "Western Europe",
    languages: {
      deu: "German",
      fra: "French",
      nld: "Dutch",
    },
    translations: {
      ara: {
        official: "مملكة بلجيكا",
        common: "بلجيكا",
      },
      bre: {
        official: "Rouantelezh Belgia",
        common: "Belgia",
      },
      ces: {
        official: "Belgické království",
        common: "Belgie",
      },
      cym: {
        official: "Teyrnas Gwlad Belg",
        common: "Gwlad Belg",
      },
      deu: {
        official: "Königreich Belgien",
        common: "Belgien",
      },
      est: {
        official: "Belgia Kuningriik",
        common: "Belgia",
      },
      fin: {
        official: "Belgian kuningaskunta",
        common: "Belgia",
      },
      fra: {
        official: "Royaume de Belgique",
        common: "Belgique",
      },
      hrv: {
        official: "Kraljevina Belgija",
        common: "Belgija",
      },
      hun: {
        official: "Belga Királyság",
        common: "Belgium",
      },
      ita: {
        official: "Regno del Belgio",
        common: "Belgio",
      },
      jpn: {
        official: "ベルギー王国",
        common: "ベルギー",
      },
      kor: {
        official: "벨기에 왕국",
        common: "벨기에",
      },
      nld: {
        official: "Koninkrijk België",
        common: "België",
      },
      per: {
        official: "پادشاهی بلژیک",
        common: "بلژیک",
      },
      pol: {
        official: "Królestwo Belgii",
        common: "Belgia",
      },
      por: {
        official: "Reino da Bélgica",
        common: "Bélgica",
      },
      rus: {
        official: "Королевство Бельгия",
        common: "Бельгия",
      },
      slk: {
        official: "Belgické kráľovstvo",
        common: "Belgicko",
      },
      spa: {
        official: "Reino de Bélgica",
        common: "Bélgica",
      },
      swe: {
        official: "Konungariket Belgien",
        common: "Belgien",
      },
      tur: {
        official: "Belçika Krallığı",
        common: "Belçika",
      },
      urd: {
        official: "مملکتِ بلجئیم",
        common: "بلجئیم",
      },
      zho: {
        official: "比利时王国",
        common: "比利时",
      },
    },
    latlng: [50.83333333, 4],
    landlocked: false,
    borders: ["FRA", "DEU", "LUX", "NLD"],
    area: 30528,
    demonyms: {
      eng: {
        f: "Belgian",
        m: "Belgian",
      },
      fra: {
        f: "Belge",
        m: "Belge",
      },
    },
    flag: "🇧🇪",
    maps: {
      googleMaps: "https://goo.gl/maps/UQQzat85TCtPRXAL8",
      openStreetMaps: "https://www.openstreetmap.org/relation/52411",
    },
    population: 11555997,
    gini: {
      2018: 27.2,
    },
    fifa: "BEL",
    car: {
      signs: ["B"],
      side: "right",
    },
    timezones: ["UTC+01:00"],
    continents: ["Europe"],
    flags: {
      png: "https://flagcdn.com/w320/be.png",
      svg: "https://flagcdn.com/be.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/be.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/be.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [50.83, 4.33],
    },
    postalCode: {
      format: "####",
      regex: "^(d{4})$",
    },
  }

  render(
    <Router>
      <Provider store={store}>
        <SingleCountry country={country} />
      </Provider>
    </Router>
  )
})
