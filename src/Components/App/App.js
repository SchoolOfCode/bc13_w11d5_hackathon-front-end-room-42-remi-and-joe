import './App.css';
import React from 'react';
import MovieList from '../movieLister/movieLister';
import useFetch from '../hooks/useFetch';
const url = "http://localhost:3000/movies";

function App() {

  let [movie] = useFetch(url);
 


  return (
    <div className="App">
    <MovieList movie ={movie}/>
    </div>
  );
}

export default App;
