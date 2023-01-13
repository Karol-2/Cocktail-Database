import React, { useState } from "react";

const Stars = ({ averageRating }) => {
  const [rating, setRating] = useState(averageRating);

  function handleClick(newRating) {
    setRating(newRating);
    alert(`Zaznaczono ${newRating} gwiazdkę`);
  }

  return (
    <div className="star-rating" onMouseLeave={() => setRating(averageRating)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setRating(star)}
          style={{ cursor: "pointer", fontSize: "3em" }}
        >
          {rating >= star ? "★" : "☆"}
        </span>
      ))}
      <p>Rating: {averageRating}</p>
    </div>
  );
};

export default Stars;
