import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <h1>Buscador</h1>
        <form className='form'>
            <div className='form__field'>
                {/* https://pokeapi.co/api/v2/pokemon/ */}
                <input type="text" placeholder='Nombre' name="name" id="name" />
            </div>
            <div className='form__field'>
                {/* https://pokeapi.co/api/v2/generation/ */}
                <select name="generation" id="generation">
                    <option value="default">Generacion</option>
                </select>
            </div>
            <div className='form__field'>
                {/* https://pokeapi.co/api/v2/type */}
                <select name="type" id="type">
                    <option value="default">Tipo</option>
                </select>
            </div>
            <div className='form__field'>
                <label htmlFor="shiny">Shiny:</label>
                <input type="checkbox" name="shiny" id="shiny" />
            </div>
            
        </form>
        <div className='grid-content'>
            {/* <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div> */}
        </div>
    </div>
  )
}

export default Search