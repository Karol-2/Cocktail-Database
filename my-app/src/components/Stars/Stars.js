import React, { useState, useReducer, useContext } from "react";
import { RefreshDatabaseContext } from "../../contexts/RefreshAPI";

const reducer = (state, action) => {
  switch (action.type) {
    case "FIRST_CLICK":
      fetch(`http://localhost:5000/reviews/${action.id}/${action.rating}`, {
        method: "POST",
      })
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return { rating: action.rating };
    case "EVERY_OTHER_CLICK":
      fetch(
        `http://localhost:5000/reviews/${action.id}/${action.oldrating}/${action.rating}`,
        {
          method: "PUT",
        }
      )
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .catch((err) => console.log(err));
      return { ...state, rating: action.rating };
    default:
      return state;
  }
};

const Stars = ({ averageRating, id, lastElement, setLastReview }) => {
  const { refreshData, setRefreshData } = useContext(RefreshDatabaseContext);
  const [rating, setRating] = useState(averageRating);
  const [state, dispatch] = useReducer(reducer, rating);
  const [isFirstClick, setClick] = useState(true);

  function handleClick(newRating) {
    if (isFirstClick) {
      setLastReview(newRating);
      dispatch({ type: "FIRST_CLICK", rating: newRating, id: id });
      setClick(false);
      setRefreshData(!refreshData);
    } else {
      setLastReview(newRating);
      dispatch({
        type: "EVERY_OTHER_CLICK",
        rating: newRating,
        oldrating: lastElement,
        id: id,
      });
      setRefreshData(!refreshData);
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
    </div>
  );
};

export default Stars;
