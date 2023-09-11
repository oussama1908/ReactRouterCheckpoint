import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const history = useHistory();

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        allowFullScreen
      ></iframe>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
