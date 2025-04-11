import css from "./App.module.css";
import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchResults from '../../servis/api';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

   const handleSearch = async (newQuery) => {
     setQuery(newQuery);
     setPage(1);
     try {
       const data = await fetchResults(newQuery, 1);
       setResults(data.results);
     } catch (error) {
       console.error("Error search:", error);
     }
   };

  useEffect(() => {
    if (page <= 1 || !query) return;

    const getData = async () => {
      try {
        const results = await fetchResults(query, page);
        setResults((prev) => [...prev, ...results.results]);
      } catch (error) {
        console.error("Error search:", error);
      }
    };
    getData();
  }, [page]);
  
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery results={results} />
      <LoadMoreBtn setPage={setPage} />
    </>
  );
};
export default App;
