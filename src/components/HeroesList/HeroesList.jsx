import React,{useEffect,useState} from 'react'
import { getHeroByPublisher } from '../../helpers/getHeroByPublisher'

export const HeroesList = ({publisher}) => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
       setHeroes(getHeroByPublisher(publisher))
    }, [])
    
    return (
    <ul>
        {heroes.length > 0 &&(
            heroes.map((hero)=>(
                <li key={hero.id}>
                    <h1>Name: {hero.superhero}</h1>
                </li>
            ))
        )
            
        }
    </ul>
  )
}
