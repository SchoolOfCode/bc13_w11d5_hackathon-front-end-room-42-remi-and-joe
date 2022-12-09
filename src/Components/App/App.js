import "./App.css";
import React from "react";
import { createContext, useContext, UserContext } from "react";
import MovieList from "../movieLister/movieLister";
import useFetch from "../hooks/useFetch";

const url = "http://localhost:3000/movies";
UserContext = createContext();

function App() {
  let [movie] = useFetch(url);

  return (
    <div className="App">
      <h1>A List of Great Movies</h1>
      <UserContext.Provider value={movie}>
        <MovieList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
