import { createContext, useState, useContext, useEffect } from "react";

export const PokemonContext = createContext()

const PokemonProvider = ({children}) => {
  // States
  const [offset, setOffset] = useState(0)
  const [pokemonList, setPokemonList] = useState([])
  const [allPokemonsList, setAllPokemonsList] = useState([])
  const [versions, setVersions] = useState([])
  const [types, setTypes] = useState([])


  // Get a list contaning all pokemons (filter-oriented)
  const getAllPokemons = async () => {
    const url = "https://pokeapi.co/api/v2"
    const res = await fetch(`${url}/pokemon?limit=100000&offset=0`)
    const data = await res.json()  
    // Promise to get the data of each pokemon
    const promise = data.results.map(async(pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()  
      return data
    })
    const resultados = await Promise.all(promise)
    setAllPokemonsList(resultados)
  }

  // Get a pokemon data by Id
  const getPokemonById = async(id) => {
    const url = "https://pokeapi.co/api/v2"
    const res = await fetch(`${url}/pokemon/${id}`)
    const data = await res.json()  
    return data
  }

  // Get all pokemon types
  const getAllTypes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type")
    const data = await res.json()  
    setTypes(data.results)
  }

  useEffect(() => {
    getAllPokemons()
    getAllTypes()
  }, [])


  return (
    <PokemonContext.Provider value={{versions, types, pokemonList, allPokemonsList, getPokemonById}}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider

export const usePokemonContext = () => useContext(PokemonContext)