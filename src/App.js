import React from 'react';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

import './App.css';

const API_URL = 'http://www.omdbapi.com?i=tt3896198&apikey=3434bdac';


const App = () => {

    const [Movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

   useEffect(() => {
    searchMovies('Power Rangers')
   }, []);

  return(
    <div className='app'>
    <h1>Samson Movie-Series</h1>
    <div className='search'>
        <input
            placeholder='Search your movies'
            value={searchTerm}
            onChange={ (e) => setSearchTerm(e.target.value)}
            />
        <img
            src = {SearchIcon}
            alt='search'
            onClick={ () => searchMovies(searchTerm) }
            />
            
    </div>

    {Movies?.length > 0
        ? (
            <div className='container'>
            {Movies.map((Movie) => (
                    <MovieCard Movie = {Movie} />
                ))}
            </div>
        ): (
            <div className='empty'>
                <h2>No Movies Found</h2>
            </div>
        )
    }

   
      </div>
      
  );
}

export default App;
