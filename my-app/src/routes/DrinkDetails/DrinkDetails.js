import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import Comment from "../../components/Comment/Comment";
import CommentForm from "../../components/CommentForm.js/CommentForm";
import Stars from "../../components/Stars/Stars";
import { DrinkContext } from "../../contexts/DrinkBaseAPI";
import "./DrinkDetails.scss";
import GetIngredients from "./DrinkDetailsLogic";

const DrinkDetails = () => {
  const { id } = useParams();
  const [comments, setComment] = useState([]);
  const [added, setAdded] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const drinkBase = useContext(DrinkContext);
  const currentDrink = drinkBase.filter((drink) => drink._id === id)[0];
  const Ingredients = GetIngredients(currentDrink);
  const [lastReview, setLastReview] = useState(
    currentDrink.Reviews.slice(-1)[0]
  );
  const average = useMemo(() => {
    return (
      currentDrink.Reviews.map((el) => parseFloat(el)).reduce(
        (acc, val) => acc + val,
        0
      ) / currentDrink.Reviews.length
    );
  }, [currentDrink.Reviews]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/comments/${id}`);
        const data = await response.json();
        setComment(data);
        setShowComments(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [lastReview, added, id]);

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
            setLastReview={setLastReview}
          />

          <h2>Ingredients: </h2>
          <ul>
            {Ingredients.map((ingr, key) => (
              <li id={key} key={key}>
                {ingr.name + " " + ingr.amount}
              </li>
            ))}
          </ul>

          <h2>Instructions: </h2>
          <ol>
            {currentDrink.strInstructions
              .split(".")
              .filter((instr) => instr !== "")
              .map((sentence, key) => (
                <li id={key} key={key}>
                  {sentence}
                </li>
              ))}
          </ol>
        </div>
      </div>
      <h3>Leave a comment!</h3>
      <div className="comment-form" style={{ maxWidth: 400 }}>
        <CommentForm drinkid={id} setAdded={setAdded} />
      </div>
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
