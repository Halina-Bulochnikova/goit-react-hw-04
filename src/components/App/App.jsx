import css from "./App.module.css";
import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchResults from '../../servis/api';


const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      console.log("Search", query);
      const results = await fetchResults(query);
      setResults(results);
    } catch (error) {
      console.error("Error search:", error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery results={results} />
    </>
  );
};
export default App;
