import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "../App.css"

function MovieDescription({ movies }) {
  // Extract the 'id' parameter from the URL using 'useParams'
  const param = useParams();

  // Find the movie object in the 'movies' array that matches the 'id' parameter
  const movie = movies.find((m) => m.id === param.id);
  console.log(param);

  // If no matching movie is found, display a message
  if (!movie) {
    return <div>Movie not found.</div>;
  }

  // Render the movie description
  return (
    <div className="movie-description">
      <br/>
      <h1>{movie.title}</h1>
      <p>{movie.desc}</p>
      
      {/* Embed the movie trailer video using an iframe */}
      <iframe
        width="560"
        height="315"
        src={movie.videoLink}
        title={`${movie.title} Trailer`}
        allowFullScreen
      ></iframe>
      <br/>
      <br/>

      {/* Add a 'Go Back' link to navigate back to the home page */}
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
}

export default MovieDescription;
