import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo';

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState('');
  const getMovieInfo = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovieInfo(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <MovieInfo
          title={movieInfo.title_long}
          coverImg={movieInfo.large_cover_image}
          description={movieInfo.description_full}
        />
      )}
    </>
  );
};

export default Detail;
