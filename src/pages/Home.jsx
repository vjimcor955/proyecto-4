import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__content">
        <h1 className='home__content--title'>PokeAPI</h1>
        <p className='home__content--messagge'>Buscador de pokemons online</p>
        <button className='home__content--button'><NavLink to="/search" className='link'>Buscar Pokemons</NavLink></button>
      </div>
    </div>
  )
}

export default Home