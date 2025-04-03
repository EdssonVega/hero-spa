import React from 'react';
import { Routes, Route, Navigate} from 'react-router';
import { Login } from '../pages/Login';
import { HeroesRoutes } from './HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';

const AppRouter = () => {
  return (
        <Routes >
            <Route path='login' element={<Login/>}/>
            <Route path='/*' element={
              <PrivateRouter>
                <HeroesRoutes />
              </PrivateRouter>
            } />
        </Routes>        
  )
}

export default AppRouter
