import React from "react";
import { Link } from "react-router-dom";
import "./heroCardStyles.css"

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageURL = `/heroes/${id}.jpg`;

  return (
    <div className="cardContainer">
      <img src={heroImageURL} alt={superhero} />
      <div className="cardContainerInfo">
        <h1>{superhero}</h1>
        <h3>{alter_ego}</h3>
        <p>{first_appearance}</p>
        <Link to={`/hero/${id}`}>See more...</Link>
      </div>
    </div>
  );
};
