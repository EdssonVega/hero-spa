import React from "react";
import { HeroCard } from "../HeroCard/HeroCard";
import "./heroesResultStyles.css"

export const HeroesResult = ({ heroes }) => {
  return (
    <div className="resultsContainer">
      <h2>Results</h2>
      <hr />
      {heroes.length > 0 &&(
        heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            superhero={hero.superhero}
            publisher={hero.publisher}
            alter_ego={hero.alter_ego}
            first_appearance={hero.first_appearance}
            characters={hero.characters}
          />
        )))}
    </div>
  );
};
