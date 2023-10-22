import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SingleCountry from "./SingleCountry";
import { Provider } from "react-redux";

import store from "../reducers/store";
import { MemoryRouter as Router } from "react-router-dom";

test("renders single country page with belgium given as props", async () => {
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
  };

  render(
    <Router>
      <Provider store={store}>
        <SingleCountry country={country} />
      </Provider>
    </Router>
  );

  const countryName = await screen.findByText("Belgium");
  const population = await screen.findByText("11,555,997");
  const region = await screen.findByText("Europe");
  const subRegion = await screen.findByText("Western Europe");
  const capital = await screen.findByText("Brussels");

  expect(countryName).toBeDefined();
  expect(population).toBeDefined();
  expect(region).toBeDefined();
  expect(subRegion).toBeDefined();
  expect(capital).toBeDefined();
});

test("renders single country page with philippines given as props", async () => {
  const country = {
    name: {
      common: "Philippines",
      official: "Republic of the Philippines",
      nativeName: {
        eng: {
          official: "Republic of the Philippines",
          common: "Philippines",
        },
        fil: {
          official: "Republic of the Philippines",
          common: "Pilipinas",
        },
      },
    },
    tld: [".ph"],
    cca2: "PH",
    ccn3: "608",
    cca3: "PHL",
    cioc: "PHI",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      PHP: {
        name: "Philippine peso",
        symbol: "₱",
      },
    },
    idd: {
      root: "+6",
      suffixes: ["3"],
    },
    capital: ["Manila"],
    altSpellings: [
      "PH",
      "Republic of the Philippines",
      "Repúblika ng Pilipinas",
    ],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: {
      eng: "English",
      fil: "Filipino",
    },
    translations: {
      ara: {
        official: "جمهورية الفلبين",
        common: "الفلبين",
      },
      bre: {
        official: "Republik Filipinez",
        common: "Filipinez",
      },
      ces: {
        official: "Filipínská republika",
        common: "Filipíny",
      },
      cym: {
        official: "Republic of the Philippines",
        common: "Philippines",
      },
      deu: {
        official: "Republik der Philippinen",
        common: "Philippinen",
      },
      est: {
        official: "Filipiini Vabariik",
        common: "Filipiinid",
      },
      fin: {
        official: "Filippiinien tasavalta",
        common: "Filippiinit",
      },
      fra: {
        official: "République des Philippines",
        common: "Philippines",
      },
      hrv: {
        official: "Republika Filipini",
        common: "Filipini",
      },
      hun: {
        official: "Fülöp-szigeteki Köztársaság",
        common: "Fülöp-szigetek",
      },
      ita: {
        official: "Repubblica delle Filippine",
        common: "Filippine",
      },
      jpn: {
        official: "フィリピン共和国",
        common: "フィリピン",
      },
      kor: {
        official: "필리핀 공화국",
        common: "필리핀",
      },
      nld: {
        official: "Republiek der Filipijnen",
        common: "Filipijnen",
      },
      per: {
        official: "جمهوری فیلیپین",
        common: "فیلیپین",
      },
      pol: {
        official: "Republika Filipin",
        common: "Filipiny",
      },
      por: {
        official: "República das Filipinas",
        common: "Filipinas",
      },
      rus: {
        official: "Республика Филиппины",
        common: "Филиппины",
      },
      slk: {
        official: "Filipínska republika",
        common: "Filipíny",
      },
      spa: {
        official: "República de las Filipinas",
        common: "Filipinas",
      },
      swe: {
        official: "Republiken Filippinerna",
        common: "Filippinerna",
      },
      tur: {
        official: "Filipinler Cumhuriyeti",
        common: "Filipinler",
      },
      urd: {
        official: "جمہوریہ فلپائن",
        common: "فلپائن",
      },
      zho: {
        official: "菲律宾共和国",
        common: "菲律宾",
      },
    },
    latlng: [13, 122],
    landlocked: false,
    area: 342353,
    demonyms: {
      eng: {
        f: "Filipino",
        m: "Filipino",
      },
      fra: {
        f: "Philippine",
        m: "Philippin",
      },
    },
    flag: "🇵🇭",
    maps: {
      googleMaps: "https://goo.gl/maps/k8T2fb5VMUfsWFX6A",
      openStreetMaps: "https://www.openstreetmap.org/relation/443174",
    },
    population: 109581085,
    gini: {
      2018: 42.3,
    },
    fifa: "PHI",
    car: {
      signs: ["RP"],
      side: "right",
    },
    timezones: ["UTC+08:00"],
    continents: ["Asia"],
    flags: {
      png: "https://flagcdn.com/w320/ph.png",
      svg: "https://flagcdn.com/ph.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/ph.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/ph.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [14.6, 120.97],
    },
    postalCode: {
      format: "####",
      regex: "^(d{4})$",
    },
  };

  render(
    <Router>
      <Provider store={store}>
        <SingleCountry country={country} />
      </Provider>
    </Router>
  );

  const countryName = await screen.findByText("Philippines");
  const population = await screen.findByText("109,581,085");
  const region = await screen.findByText("Asia");
  const subRegion = await screen.findByText("South-Eastern Asia");
  const capital = await screen.findByText("Manila");

  expect(countryName).toBeDefined();
  expect(population).toBeDefined();
  expect(region).toBeDefined();
  expect(subRegion).toBeDefined();
  expect(capital).toBeDefined();
});
