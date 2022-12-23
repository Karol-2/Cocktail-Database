import React from "react";

const SliderContent = ({
  idDrink,
  strDrinkThumb,
  strDrink,
  drinkIndex,
  index,
}) => {
  let position = "nextSlide";
  if (drinkIndex === index) {
    position = "activeSlide";
  }
  if (drinkIndex === index - 1 || (index === 0 && drinkIndex === 5)) {
    position = "lastSlide";
  }
  return (
    <article className={position} key={idDrink}>
      <img src={strDrinkThumb} alt={strDrink} />
      <h4>{strDrink}</h4>
    </article>
  );
};

export default SliderContent;
