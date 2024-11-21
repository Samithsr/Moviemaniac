import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Fire from './assets/fire.png'
import Star from './assets/glowingstar.png'
import Party from './assets/party-blower.png'
import Navbar from './Component/Navbar/Navbar'
import MovieList from './Component/MovieList/MovieList'
import SingleMovie from './Component/MovieList/SingleMovie'

const App = () => {
  return ( 
    <div className='app'>
      <Navbar />
      <main>
        <Routes>
        <Route path='/' element={<MovieList type="popular" title="poplar" emoji={Fire}/>} />
        <Route path='top_rated' element={<MovieList type="top_rated" title="Top Rated" emoji={Star}/>} />
        <Route path='upcoming' element={ <MovieList type="upcoming" title="Upcoming" emoji={Party}/>} />

        <Route path='/movie/:movieId' element={<SingleMovie />} />
        </Routes>
      </main>
      
      
     
    </div>
  )
}

export default App