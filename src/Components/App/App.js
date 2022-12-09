import "./App.css";
import React from "react";
import { createContext, UserContext } from "react";
import MovieList from "../movieLister/movieLister";
import useFetch from "../hooks/useFetch";

const url = "https://hackathon-week-11-backend.onrender.com/movies";

UserContext = createContext();

function App() {
  let [movies] = useFetch(url);
  return (
    <div className="App">
      <h1>A List of Great Movies</h1>
      <UserContext.Provider value={movies}>
        <MovieList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
