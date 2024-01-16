import { createContext, useState, useContext, useEffect } from "react";
import { useForms } from "../hooks/useForms";

export const PokemonContext = createContext()

const PokemonProvider = ({children}) => {
  // States
  const [offset, setOffset] = useState(0)
  const [pokemonList, setPokemonList] = useState([])
  const [allPokemonsList, setAllPokemonsList] = useState([])
  const [versions, setVersions] = useState([])
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true)

  const {valueSearch, handleInputChange, resetForm} = useForms({
    valueSearch: ""
  })

  // Get a list of pokemons
  // limit: number og pokemons in the list
  // offset: index of the pokemon the list begins
  const getPokemons = async (limit = 20) => {
    const url = "https://pokeapi.co/api/v2"
    const res = await fetch(`${url}/pokemon?limit=${limit}&offset=${offset}`)
    const data = await res.json()  
    // Promise to get the data of each pokemon
    const promise = data.results.map(async(pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })
    const resultados = await Promise.all(promise)
    setPokemonList([...pokemonList, ...resultados])
    setLoading(false)
  }

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
    setLoading(false)
  }

  // Get a pokemon data by Id
  const getPokemonById = async(id) => {
    const url = "https://pokeapi.co/api/v2"
    const res = await fetch(`${url}/pokemon/${id}`)
    const data = await res.json()  
    return data
  }

  // Get all game versions
  const getAllVersions = async () => {
    const url = "https://pokeapi.co/api/v2/version"
    const res = await fetch(url)
    const data = await res.json()  
    setVersions(data.results)
  }

  // Get all pokemon types
  const getAllTypes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type")
    const data = await res.json()  
    setTypes(data.results)
  }

  useEffect(() => {
    getPokemons()
    getAllVersions()
    getAllTypes()
  }, [])

  useEffect(() => {
    // getAllPokemons()
  })


  return (
    <PokemonContext.Provider value={{versions, types, pokemonList, allPokemonsList, getPokemonById, valueSearch, handleInputChange, resetForm}}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider

export const usePokemonContext = () => useContext(PokemonContext)