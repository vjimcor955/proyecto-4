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
    }, 2000)
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <div className="contact">
      {
        loader 
        ? <span className="loader"></span>
        : <div className='contact__data'>
            <div className="contact__data--img__name">
              {
                loader 
                ? <span className="loader"></span>
                : <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
              }
              <h1>{pokemon.name}</h1>
            </div>
            <div className="contact__data--details">
              <div className="contact__data--details__field">
                <h2>ID</h2>
                <p>{pokemon.id}</p>
              </div>
              <div className="contact__data--details__field">
                <h2>Types</h2>
                <ul className='types'>
                  {
                    pokemon.types.map((type, index) => (
                      <p key={index} className={type.type.name}>{type.type.name}</p>
                    ))
                  }
                </ul>
              </div>
              <div className="contact__data--details__field">
                <h2>Stats</h2>
                <ul className='stats'>
                  {
                    pokemon.stats.map((stat, index) => (
                      <li key={index}><p>{stat.stat.name}:</p> <p>{stat.base_stat}</p></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
      }
    </div>

    
    // <div className="contact">
    //   <div className='contact__data'>
    //     <div className="contact__data--img__name">
    //       <div className="img">
    //         {
    //           loader 
    //           ? <span className="loader"></span>
    //           : <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
    //         }
    //       </div>
    //       <h1>{pokemon.name}</h1>
    //     </div>
    //     <div className="contact__data--details">
    //       <div className="contact__data--details__field">
    //         <h2>ID</h2>
    //         <p>{pokemon.id}</p>
    //       </div>
    //       <div className="contact__data--details__field">
    //         <h2>Types</h2>
    //         <ul className='types'>
    //             {
    //               pokemon.types.map((type, index) => (
    //                 <p key={index} className={type.type.name}>{type.type.name}</p>
    //               ))
    //             }
    //         </ul>
    //       </div>
    //       <div className="contact__data--details__field">
    //         <h2>Stats</h2>
    //         <ul className='stats'>
    //           {
    //             pokemon.stats.map((stat, index) => (
    //               <li key={index}><p>{stat.stat.name}:</p> <p>{stat.base_stat}</p></li>
    //             ))
    //           }
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Contact