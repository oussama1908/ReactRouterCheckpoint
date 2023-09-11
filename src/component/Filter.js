import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function Filter({ onFilter, addNewMovie, movies }) {
  // State for movie filter values
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  
  // State for managing the "Add Movie" form
  const [isAddingMovie, setIsAddingMovie] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    rating: 0,
    imageUrl: '',
  });

  // Handle title input change
  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilter({ title: e.target.value, rating: ratingFilter });
  };

  // Handle star rating change
  const handleRatingChange = (nextValue) => {
    const newRating = ratingFilter === nextValue ? 0 : nextValue;
    setRatingFilter(newRating);
    onFilter({ title: titleFilter, rating: newRating });
  };

  // Handle adding a new movie
  const handleAddMovie = () => {
    if (isAddingMovie) {
      addNewMovie(newMovie);
      setNewMovie({ title: '', description: '', rating: 0, imageUrl: '' });
    }
    setIsAddingMovie(!isAddingMovie);
  };

  // Handle canceling the "Add Movie" form
  const handleCancel = () => {
    setIsAddingMovie(false);
    setNewMovie({ title: '', description: '', rating: 0, imageUrl: '' });
  };

  return (
    <div className="flex">
      <h2>Find Your Movie</h2>
      <div className="input-box">
        {/* Title filter input */}
        <div className="flexo">
          <h3>By Name</h3>
          <input
            type="text"
            placeholder="Write the movie name"
            value={titleFilter}
            onChange={handleTitleChange}
          />
        </div>
        
        {/* Star rating filter input */}
        <div className="flexb">
          <h3>By Stars</h3>
          <div className="mine">
            <StarRatingComponent
              name={`rate`}
              starCount={5}
              editing={true}
              starEmptyColor="white"
              value={ratingFilter}
              onStarClick={handleRatingChange}
            />
            <p className="poor">Selected Rating: {ratingFilter}</p>
          </div>
        </div>
      </div>

      {/* "Add Movie" form */}
      {isAddingMovie ? (
        <div>
          <h3>Add Movie</h3>
          {/* Input fields for adding a new movie */}
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newMovie.imageUrl}
            onChange={(e) =>
              setNewMovie({ ...newMovie, imageUrl: e.target.value })
            }
          />
          
          {/* Buttons for adding and canceling */}
          <button className="btn btn-danger" onClick={handleAddMovie}>
            Add Movie
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        // "Add Movie" button
        <button className="btn btn-danger" onClick={handleAddMovie}>
          Add Movie
        </button>
      )}
    </div>
  );
}

export default Filter;
