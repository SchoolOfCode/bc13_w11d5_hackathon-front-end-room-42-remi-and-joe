import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from '../movieLister/movieLister';

const url = "http://localhost:3000";

function App() {

  const [movie, setMovie] = useState([]);

  // Fetching shopping list data from shopping list API.
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(`${url}/movies`);
      const data = await response.json(response);
      console.log(data);
      setMovie(data.payload);
    }
    getMovies();
  }, []);



  return (
    <div className="App">
    <MovieList movie ={movie}/>
    </div>
  );
}

export default App;
