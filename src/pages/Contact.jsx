import React, { useEffect, useState } from 'react'
import { usePokemonContext } from '../context/PokmeonContext'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {getPokemonById} = usePokemonContext()
  const [loader, setLoader] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const {id} = useParams()

  // Get the pokemon data
  const getPokemonData = async(id) => {
    const data = await getPokemonById(id)
    setPokemon(data)
  }

  useEffect(() => {
    getPokemonData(id)
  }, []) 

  // 5 seconds timer before the contact page is shown
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoader(false)
    }, 500)
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <div className="contact">
      {
        loader 
        ? <span className="loader"></span>
        : <div className='contact__data'>
            <div className="contact__data--img__name">
              <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
              <h1>{pokemon.name}</h1>
            </div>
            <div className="contact__data--details">
              <h2>ID</h2>
              <p>{pokemon.id}</p>
              <h2>Types</h2>
              {
                pokemon.types.map((type, index) => (
                  <p key={index} className={type.type.name}>{type.type.name}</p>
                ))
              }
              <h2>Stats</h2>
              <ul>
                {
                  pokemon.stats.map((stat, index) => (
                    <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                  ))
                }
              </ul>
            </div>
          </div>
      }
    </div>
  )
}

export default Contact