import { useEffect, useState } from "react";

function useFetch(url) {
  const [movies, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(url);
      const data = await response.json(response);
      setMovie(data.payload);
    }
    getMovie();
  }, [url]);
  return [movies];
}

export default useFetch;
