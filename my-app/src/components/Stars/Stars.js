import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FIRST_CLICK":
      fetch(`http://localhost:5000/reviews/${action.id}/${action.rating}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return { rating: action.rating };
    case "EVERY_OTHER_CLICK":
      console.log(
        `http://localhost:5000/reviews/${action.id}/${action.oldrating}/${action.rating}`
      );
      fetch(
        `http://localhost:5000/reviews/${action.id}/${action.oldrating}/${action.rating}`,
        {
          method: "PUT",
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return { ...state, rating: action.rating };
    default:
      return state;
  }
};

const Stars = ({ averageRating, id, lastElement }) => {
  const [rating, setRating] = useState(averageRating);
  const [state, dispatch] = useReducer(reducer, rating);
  const [isFirstClick, setClick] = useState(true);

  function handleClick(newRating) {
    // setRating(newRating);
    // alert(`Zaznaczono ${newRating} gwiazdkę`);

    if (isFirstClick) {
      dispatch({ type: "FIRST_CLICK", rating: newRating, id: id });
      setClick(false);
    } else {
      dispatch({
        type: "EVERY_OTHER_CLICK",
        rating: newRating,
        oldrating: lastElement,
        id: id,
      });
    }
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
