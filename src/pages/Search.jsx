import React,{useState} from 'react'
import { HeroesResult } from '../components/HeroesResult/HeroesResult'
import { Searcher } from '../components/Searcher/Searcher'
import "./pagesStyles.css"

export const Search = () => {
  const [herosToShow, setHerosToShow] = useState([])
  
  return (
    <div>
        <h1>Search</h1>
        <hr />
        <div className='twoColumnsDiv'>
            <Searcher setHeroesToShow={setHerosToShow} />
            <HeroesResult heroes={herosToShow}/>
        </div>
        
    </div>
  )
}
