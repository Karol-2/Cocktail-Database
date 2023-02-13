import React, { useState, useEffect, useContext } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import People from "./People";
import data from "./data";
import "./Slider.scss";
import { DrinkContext } from "../../ContexApi";
function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const drinkBase = useContext(DrinkContext);
  console.log(drinkBase);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Our Top Choices</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          return (
            <People
              key={person.id}
              {...person}
              personIndex={personIndex}
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
