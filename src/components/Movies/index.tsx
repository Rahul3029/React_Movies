import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Movie from  '../Movie'
import './style.css'

const API_Key = 'e59bb04d'
const series = ['avengers','superman','spider man','iron man','wonder woman']
const Movies: React.FC = props => {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        const promise = series.map(series => {
           return fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_Key}&page=1`)
            .then(res => res.json())
        })
        
        Promise.all(promise).then((movies: any) => {
            setMovies(movies.map((movie: any) => movie.Search))
        })

    },[])

    if(movies.length === 0){
        return <div className="loader">
            <CircularProgress color="secondary" />
        </div>
    }
    
    return <div className="movies">
    {movies.flat(2).map((movie: any) => {
        return <Movie 
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            image={movie.Poster}
        />
    })
    } 
    </div>
}

export default Movies