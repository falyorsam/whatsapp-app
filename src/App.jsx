import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import countrySlice from "./fr/country/countrySlice";
import { useSelector } from "react-redux";
import "./index.css";
import Main from "./components/on-back/Main";

function App() {
  const { countries, loading, error, darkMode, showCountry } = useSelector(
    (state) => state.country
  );

  const dispatch = useDispatch();

  return (
    <>
      <Main />
    </>
  );
}

export default App;
