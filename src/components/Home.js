import React, { useState } from 'react';
import '../App.css';

// Import the Filter and MovieList components
import Filter from './Filter';
import MovieList from './MovieList';

// Import 'uuid' to generate unique IDs for movies
import { v4 as uuidv4 } from 'uuid';

// Import the 'movies' data (assuming it's located in '../movies')
import movie from '../movies';

function Home() {
  // Initialize the state for movies using the 'movies' data
  const [initialMovies] = useState(movie);

  // Initialize states for movies and filtered movies
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  // Function to filter movies based on title and rating
  const filterMovies = ({ title, rating }) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === 0 || movie.rating === rating)
      );
    });
    setFilteredMovies(filteredMovies);
  };

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie, id: uuidv4() }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  // Function to edit an existing movie
  const editMovie = (editedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === editedMovie.id ? { ...editedMovie } : movie
    );
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  // Function to remove a movie from the list
  const removeMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="App">
      {/* Render the Filter component for filtering movies */}
      <Filter onFilter={filterMovies} addNewMovie={addMovie} />
      
      {/* Render the MovieList component for listing movies */}
      <MovieList movies={filteredMovies} onRemove={removeMovie} onEdit={editMovie} />
      
      {/* Dynamic routes for displaying movie descriptions */}
      {/* (These routes should be defined in the Router component, typically in another file) */}
    </div>
  );
}

export default Home;
