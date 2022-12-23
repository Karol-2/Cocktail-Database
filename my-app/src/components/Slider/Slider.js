import React, { useState, useEffect, useContext } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SliderContent from "./SliderContent";
import "./Slider.scss";
import { DrinkContext } from "../../ContexApi";

function Slider() {
  const [index, setIndex] = useState(0);
  const drinkBase = useContext(DrinkContext);
  console.log(drinkBase);

  useEffect(() => {
    const lastIndex = 4;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Our Top Choices</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {drinkBase.slice(0, 5).map((drink, drinkIndex) => {
          return (
            <SliderContent
              key={drink.idDrink}
              {...drink}
              drinkIndex={drinkIndex}
              index={index}
            />
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
