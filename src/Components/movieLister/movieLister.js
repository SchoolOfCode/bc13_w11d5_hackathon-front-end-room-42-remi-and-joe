import { useContext, UserContext } from "react";
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
