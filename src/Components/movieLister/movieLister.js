import React from "react";
import List from "../List/List";

function MovieList ({movie}){
    
    return(
    <ol>
        {movie.map((movie)=>(<List name={movie.name} description={movie.description}/>))}
        
    </ol>
    )
}







export default MovieList;