import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2>{title}</h2>
      {/* <div>
        {genres && genres.map((genre) => <span key={genre}>{genre}</span>)}
      </div> */}
      {/* <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul> */}
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
