import PropTypes from "prop-types";

const MovieInfo = ({ title, coverImg, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      <p>{description}</p>
    </>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieInfo;
