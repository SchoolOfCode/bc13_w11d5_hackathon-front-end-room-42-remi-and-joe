import useContext from "react";
import UserContext from "../App/App.js";
import List from "../List/List";

function MovieList() {
  const movie = useContext(UserContext);
  return (
    <div>
      {movie.map((movie) => (
        <List name={movie.name} description={movie.description} />
      ))}
    </div>
  );
}

export default MovieList;
