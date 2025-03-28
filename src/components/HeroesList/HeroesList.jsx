import React, { useEffect, useState } from "react";
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "../HeroCard/HeroCard";
import "./heroesListStyles.css"

export const HeroesList = ({ publisher }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setHeroes(getHeroByPublisher(publisher));
  }, []);

  return (
    <div className="publiserContainer">
      <h1 className="publisherTittle">{publisher}</h1>
      <hr />
      <div className="mainHeroContainer">
      {heroes.length > 0 &&
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
        ))}

      </div>
    </div>
  );
};
