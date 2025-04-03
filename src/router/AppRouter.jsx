import React from 'react';
import { Routes, Route, Navigate} from 'react-router';
import { Login } from '../pages/Login';
import { HeroesRoutes } from './HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  return (
        <Routes >

          <Route path='/login' element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          } />

            <Route path='/*' element={
              <PrivateRouter>
                <HeroesRoutes />
              </PrivateRouter>
            } />
  {/*<Route path='login' element={<Login/>}/>*/} 
        </Routes>        
  )
}

export default AppRouter
