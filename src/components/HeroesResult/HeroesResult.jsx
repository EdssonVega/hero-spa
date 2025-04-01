import React from "react";
import queryString from "query-string"
import { useLocation } from "react-router-dom";
import { HeroCard } from "../HeroCard/HeroCard";
import "./heroesResultStyles.css"

export const HeroesResult = ({ heroes }) => {
    const location = useLocation()
    const query = queryString.parse(location.search).q || ""
    console.log(query)

  return (
    <div className="resultsContainer">
      <h2>Results</h2>
      <hr />
      {
        heroes.length > 0 ? (
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
        ))) : (
            !query ? (
                <div className="searchAHero">Search a hero</div>

            ): (
                <div className="noFoundedHero"> No founded hero with {query}</div>
            )
            )
      }
    
        
    </div>
  );
};
