import React from 'react';
import { Routes, Route} from 'react-router';
import { DcPage } from '../pages/DcPage';
import { MarvelPage } from '../pages/MarvelPage';

const AppRouter = () => {
  return (
    <>
        <Routes >
            <Route path='marvel' element={<MarvelPage />}/>
            <Route path='dc' element={<DcPage />}/>
        </Routes>        
    </>
  )
}

export default AppRouter
