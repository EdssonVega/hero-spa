import React from 'react';
import { Routes, Route, Navigate} from 'react-router';
import { Login } from '../pages/Login';
import { HeroesRoutes } from './HeroesRoutes';

const AppRouter = () => {
  return (
        <Routes >
            <Route path='login' element={<Login/>}/>
            <Route path='/*' element={<HeroesRoutes/>}/>
        </Routes>        
  )
}

export default AppRouter
