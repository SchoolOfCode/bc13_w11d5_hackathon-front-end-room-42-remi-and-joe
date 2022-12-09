import { useEffect, useState } from 'react'

function useFetch(url){

    const [movie, setMovie] = useState([]);

    useEffect(() => {
       
    fetch(url, {
                headers: { Accept: "application/json" },
        
              })
              .then((res) => res.json())
              .then((data) => setMovie(data.payload))
            
        
      }, [url]);
      return [movie]
    }    

export default useFetch;