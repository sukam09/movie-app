import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movies);

  return (
    <>
      {loading ? (
        <>
          <h2>Loading...</h2>
        </>
      ) : (
        <>
          <h2>Movie App</h2>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Home;
