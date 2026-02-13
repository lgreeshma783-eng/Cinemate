import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        async function fetchMovies() { 
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fae106896035cce6ad49e52c30c4936a");
            const data = await response.json();
            setMovies(data.results);
        }
        fetchMovies();
    },[])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
              <div className="flex justify-start flex-wrap">
                  {movies.map((movie) => { 
                      return <Card key={movie.id} movie={ movie} /> 
                  })}
          
        </div>
      </section>
    </main>
  );
};
