import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { usePokemonContext } from '../context/PokemonContext'
import ToTopButton from '../components/ToTopButton'

const Search = () => {
  const {types, allPokemonsList} = usePokemonContext()
  const [loader, setLoader] = useState(true)
  const [formState, setFormState] = useState({name: "", type: "default"})
  const [shiny, setShiny] = useState(false)
  const [resultPokemon, setResultPokemon] = useState([])

  // 5 seconds timer before the pokemon list shows
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoader(false)
    }, 1000)
    return () => clearTimeout(loaderTimeout);
  }, []);

  // Function that will take any imput in the form and set it into the State
  const handleInputChange = ({target}) => {
      const {name, value} = target
      setFormState({...formState, [name]: value})
  }
  // Handle the shiny imput to show the correct sprite
  const handleCheckboxInput = (e) => {
    (e.target.checked)
    ? setShiny(true)
    : setShiny(false)
  }
  // Function that resets the form
  const resetForm = () => {
      setFormState({name: "", type: "default"})
  }
  // Filter pokemons by name
  const filterPokemonByName = () => {
    const pokemonResults = allPokemonsList.filter(pokemon => pokemon.name.includes(formState.name))
    return pokemonResults
  }
  // Filter pokemons by type
  const filterPokemonType = () => {
    const pokemonResults = allPokemonsList.filter(pokemon => 
      pokemon.types
        .map(type => type.type.name)
        .includes(formState.type)
    )
    return pokemonResults
  }
  // Filter by both
  const filterPokemonBoth = () => {
    const pokemonType = allPokemonsList.filter(pokemon => 
      pokemon.types
        .map(type => type.type.name)
        .includes(formState.type)
    )
    const pokemonResults = pokemonType.filter(pokemon => pokemon.name.includes(formState.name))
    return pokemonResults
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (formState.name != "" && formState.type != "default") {
      setResultPokemon(filterPokemonBoth)
    } else if (formState.name === "" && formState.type === "default") {
      setResultPokemon(allPokemonsList)
    } else if (formState.name != "" && formState.type === "default") {
      setResultPokemon(filterPokemonByName)
    } else if (formState.name === "" && formState.type != "default") {
      setResultPokemon(filterPokemonType)
    }
    resetForm()
  }


  return (
    <div className='search'>
      <h1>Buscador</h1>
      <form className='form' onSubmit={submitForm}>
        <div className='form__search-bar'>
          <input type="text" placeholder='Nombre' name="name" id="name" onChange={handleInputChange}/>
          <button type='submit' className='button'>Buscar</button>
        </div>
        <div className='form__filters'>
          <div className='form__filters--field'>
            <select name="type" id="type" onChange={handleInputChange}>
              <option value="default">Tipo</option>
              {
                types.map((type, index) => 
                  <option key={index} value={type.name}>{type.name}</option>
                )
              }
            </select>
          </div>
          <div className='form__filters--field'>
            <label htmlFor="shiny">Shiny:</label>
            <input type="checkbox" name="shiny" id="shiny" onChange={handleCheckboxInput}/>
          </div>
        </div>   
      </form>
      {
        loader 
        ? <div className="loader__div">
            <span className="loader"></span>
          </div>
        : <div className='grid__content'>
            {
              resultPokemon?.map(pokemon => (
                <Card pokemon={pokemon} key={pokemon.id} shiny={shiny}/>
              ))
            }
          </div>
      }
      <ToTopButton />
    </div>
  )
}

export default Search