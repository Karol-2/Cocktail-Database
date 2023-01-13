import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Comment from "../../components/Comment/Comment";
import CommentForm from "../../components/CommentForm.js/CommentForm";
import Stars from "../../components/Stars/Stars";
import { DrinkContext } from "../../ContexApi";
import "./DrinkDetails.scss";
import GetIngredients from "./DrinkDetailsLogic";

const DrinkDetails = () => {
  const { id } = useParams();
  const [comments, setComment] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const drinkBase = useContext(DrinkContext);
  const currentDrink = drinkBase.filter((drink) => drink._id === id)[0];
  const Ingredients = GetIngredients(currentDrink);
  const lastReview = currentDrink.Reviews.slice(-1)[0];

  const average =
    currentDrink.Reviews.map((el) => parseInt(el)).reduce(
      (acc, val) => acc + val,
      0
    ) / currentDrink.Reviews.length;

  useEffect(() => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .then((data) => setComment(data))
      .then(() => setShowComments(true));
  });

  return (
    <div className="drink-details">
      <div className="product-info">
        <div className="photo-part">
          <img
            src={currentDrink.strDrinkThumb}
            alt="a glass with a drink"
          ></img>
          <p>drink id - {id}</p>
        </div>
        <div className="info-part">
          <h1>{currentDrink.strDrink}</h1>
          <h3>Category: {currentDrink.strCategory}</h3>
          <h4>{currentDrink.strAlcoholic + " drink"}</h4>
          <h4>Glass: {currentDrink.strGlass}</h4>
          <Stars
            averageRating={average}
            id={currentDrink._id}
            lastElement={lastReview}
          />
          <h2>Ingredients: </h2>
          <ul>
            {Ingredients.map((ingr, key) => (
              <li id={key}>{ingr.name + " " + ingr.amount}</li>
            ))}
          </ul>

          <h2>Instructions: </h2>
          <ol>
            {currentDrink.strInstructions
              .split(".")
              .filter((instr) => instr !== "")
              .map((sentence, key) => (
                <li id={key}>{sentence}</li>
              ))}
          </ol>
        </div>
      </div>
      <h3>Leave a comment!</h3>
      <CommentForm drinkid={id} />
      <div className="comments">
        <h2>Comments</h2>

        <ul>
          {showComments &&
            comments.Comments.map((comm) => <Comment comment={comm} />)}
        </ul>
      </div>
    </div>
  );
};

export default DrinkDetails;
