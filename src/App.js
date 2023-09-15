import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDescription from './components/MovieDescription';
import movies from './movies'; // Importing the movies data
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const App = () => {
  return (
    <div>
      {/* Navbar component with a Netflix logo */}
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start text-xl">
          <Navbar.Brand className="sizetext" href="#home">
            Netflix
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Define routes for the application */}
      <Routes>
        {/* Route for displaying individual movie descriptions */}
        <Route path="/:id" element={<MovieDescription movies={movies} />} />

        {/* Default route for the home page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
