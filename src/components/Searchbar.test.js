import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "./Searchbar";

import { AppProvider } from "../context";
import { Provider } from "react-redux";

import store from "../reducers/store";
import { MemoryRouter as Router } from "react-router-dom";

test("renders searchbar correctly with placeholder text", async () => {
  render(
    <Router>
      <Provider store={store}>
        <AppProvider>
          <Searchbar />
        </AppProvider>
      </Provider>
    </Router>
  );

  const placeholder = await screen.findByPlaceholderText(
    "Search for a country..."
  );

  expect(placeholder).toBeDefined();
});

test("searchField gets values when the user types", async () => {
  render(
    <Router>
      <Provider store={store}>
        <AppProvider>
          <Searchbar />
        </AppProvider>
      </Provider>
    </Router>
  );

  const testUser = userEvent.setup();
  const searchField = await screen.findByPlaceholderText(
    "Search for a country..."
  );

  await testUser.type(searchField, "phili");

  const textByUser = searchField.value;

  expect(textByUser).toBe("phili");
});
