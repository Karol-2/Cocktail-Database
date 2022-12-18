import React from "react";
import people from "./data";

const People = ({ id, image, name, personIndex, index }) => {
  let position = "nextSlide";
  if (personIndex === index) {
    position = "activeSlide";
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === people.length - 1)
  ) {
    position = "lastSlide";
  }
  return (
    <article className={position} key={id}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
    </article>
  );
};

export default People;
