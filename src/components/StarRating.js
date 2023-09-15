import React, { useState } from 'react';
import '../App.css';

function StarRating({ initialValue, onChange }) {
  const [rating, setRating] = useState(initialValue);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    // Optionally, you can pass the new rating to a callback function (onChange).
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
