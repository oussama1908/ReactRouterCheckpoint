import React from 'react';
import MovieCard from '../component/MovieCards';

function MovieList({ movies, onRemove, onEdit }) {
  // Callback function to handle movie removal
  const handleRemoveMovie = (id) => {
    onRemove(id);
  };

  return (
    <div className="movie-list-container">
      {/* Map through the list of movies and render a MovieCard component for each */}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie} // Spread movie properties as props to MovieCard
          onRemove={handleRemoveMovie} // Pass the remove callback function
          onEdit={onEdit} // Pass the edit callback function
        />
      ))}
    </div>
  );
}

export default MovieList;
