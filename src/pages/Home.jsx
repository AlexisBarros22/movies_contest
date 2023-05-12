import React from 'react'
import { useState, useEffect } from 'react'

const moviesURL = import.meta.env.VITE_API
const moviesAPI = import.meta.env.VITE_API_KEY


const Home = () => {

  const [TopMovies, setTopMovies] = useState([])
  const getTopRatedMovies = async (URL) => {

    const res = await fetch(URL)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${moviesAPI}`
    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className='container'>
     <h2 className="title">Best Ranked Movies of All Time</h2>
     <div className="movies-container">
        {TopMovies.length === 0 && <p>Loading...</p>}
        {TopMovies.length>0 && TopMovies.map((movie) => <p>{movie.title}</p>)}
     </div>
    </div>


  )
}

export default Home