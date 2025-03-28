import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroPage } from '../components/HeroPage/HeroPage'
import { Navbar } from '../components/Navbar/Navbar'
import { DcPage } from '../pages/DcPage'
import { MarvelPage } from '../pages/MarvelPage'
import { Search } from '../pages/Search'
import "./heroesRouterStyles.css"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='heroesRouteContainer'>
        <Routes >
            <Route path='marvel' element={<MarvelPage />}/>
            <Route path='dc' element={<DcPage />}/>
            <Route path='search' element={<Search/>}/>
            <Route path='/' element={<Navigate to="/marvel"/>}/>
            <Route path='hero/:heroId' element={<HeroPage />}/>
        </Routes>     
        </div>
        
    </>
  )
}
