import React from "react";
import { useParams } from "react-router";

const DrinkDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>DrinkDetails - {id}</h1>
    </div>
  );
};

export default DrinkDetails;
