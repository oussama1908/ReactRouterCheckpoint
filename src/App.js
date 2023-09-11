import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Filter from './component/Filter';
import MovieList from './component/MovieList';
import MovieDetails from './component/MovieDetails'; // Import the MovieDetails component

import { v4 as uuidv4 } from 'uuid';

function App() {
  // Initial movie data
  const [initialMovies] = useState([
    {
      id: uuidv4(),
      title: "Punisher",
      description: "Action",
      rating: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d9/Punisher_ver2.jpg",
      trailerLink: "https://www.youtube.com/embed/trailer_punisher",
    },
    // Add more initial movies here...
  ]);

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  // Callback function to filter movies based on title and rating
  const filterMovies = ({ title, rating }) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === 0 || movie.rating === rating)
      );
    });
    setFilteredMovies(filteredMovies);
  };

  // Callback function to add a new movie
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie, id: uuidv4() }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  // Callback function to edit an existing movie
  const editMovie = (editedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === editedMovie.id ? { ...editedMovie } : movie
    );
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  // Callback function to remove a movie
  const removeMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="danger" variant="dark">
          <Container className="justify-content-start text-xl">
            <Navbar.Brand className="sizetext" href="#home">
              Netflix
            </Navbar.Brand>
          </Container>
        </Navbar>

        {/* Filter component for searching */}
        <Filter onFilter={filterMovies} addNewMovie={addMovie} />
        <br />

        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} onRemove={removeMovie} onEdit={editMovie} />} />
          {/* Movie Details Page */}
          <Route path="/details/:id" element={<MovieDetails movies={filteredMovies} />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
