import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById'
import "./heroPageStyles.css"

export const HeroPage = () => {
    const navigate = useNavigate()

    const onNavigateBack = () => {
            navigate(-1)
    }
  
    const {heroId}= useParams()
    const hero = getHeroById(heroId)

    if(!hero){
        return <Navigate to={"/marvel"}/>
    }
    console.log(hero)
  return (
    <div className='heroContainer'>
        <img src={`/heroes/${hero.id}.jpg`} alt={hero.superhero} />
        <div className='infoContainer'>
            <h1>{hero.superhero}</h1>
            <p className='heroData'><b>Alter ego:</b>  {hero.alter_ego}</p>
            <hr />
            <p className='heroData'><b>Publisher:</b>  {hero.publisher}</p>
            <hr />
            <p className='heroData'><b>First appearance:</b>  {hero.first_appearance}</p>
        <h2>Characters</h2>
        <p>{hero.characters}</p>
        <button onClick={onNavigateBack}>
            Back
        </button>
        </div>
        
    </div>

  )
}
