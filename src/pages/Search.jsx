import React from 'react'
import { Searcher } from '../components/Searcher/Searcher'
import "./pagesStyles.css"

export const Search = () => {
  return (
    <div>
        <h1>Search</h1>
        <hr />
        <div className='twoColumnsDiv'>
            <Searcher />
            <div>
                <h2>Results</h2>
                <hr />
            </div>
        </div>
        
    </div>
  )
}
