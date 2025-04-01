import queryString from "query-string";
import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearcherStyles.css"

export const Searcher = () => {
  
  const navigate = useNavigate()
  const location = useLocation()

  const query = queryString.parse(location.search)
  console.log(query)

  const [hero, setHero] = useState("")

  const onLookHero = (e) => {
    setHero(e.target.value)
    console.log(hero)
  }

  const onSearchHero = () => {
    if(hero.trim().length<=1) return;
    navigate(`?q=${hero.toLowerCase().trim()}`)
    console.log(hero)
  }

  return (
    <div className="searcherMainContainer">
      <h2>Searching</h2>
      <hr />
      <input type="text" placeholder="Search a hero" onChange={(e)=>onLookHero(e)}/>
      <button onClick={onSearchHero}>Search</button>
    </div>
  );
};
