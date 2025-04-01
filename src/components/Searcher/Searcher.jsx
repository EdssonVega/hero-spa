import queryString from "query-string";
import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import "./SearcherStyles.css"

export const Searcher = ({setHeroesToShow}) => {
  
  const navigate = useNavigate()
  const location = useLocation()

  const { q= ""} = queryString.parse(location.search)

  const [hero, setHero] = useState(q)

  const onLookHero = (e) => {
    setHero(e.target.value)
  }

  const onSearchHero = () => {
    if(hero.trim().length<=1) return;
    navigate(`?q=${hero.toLowerCase().trim()}`)
    const searchedHero = getHeroesByName(hero)
    console.log(searchedHero)
    setHeroesToShow(searchedHero)
  }

  useEffect(() => {
    onSearchHero(); 
  }, [q]);

  return (
    <div className="searcherMainContainer">
      <h2>Searching</h2>
      <hr />
      <input type="text" placeholder="Search a hero" onChange={(e)=>onLookHero(e)}/>
      <button onClick={onSearchHero}>Search</button>
    </div>
  );
};
