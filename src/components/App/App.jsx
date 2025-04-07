import css from "../App/App.module.css";
import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

const App = () => {
return (
  <header>
    <form>
      <input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
    </header>
  )
}
export default App;
