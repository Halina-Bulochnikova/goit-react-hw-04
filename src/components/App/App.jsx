import css from "./App.module.css";
import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchResults from '../../servis/api';


const App = () => {
  const [results, setResults] = useState([]);


  const handleSearch = (query) => {
    console.log("Шукаємо:", query);
  };

  useEffect(() => {
   
  
    const getData = async () => {
      try {
        const response = await fetchResults();
        setResults(data.results)
      }
      catch (error) {
        console.log(error);
      }
    }
  }, []
  )

return (
  <>
    <SearchBar onSubmit={handleSearch} />
    <ImageGallery results={results} />
  </>
);
}
export default App;
