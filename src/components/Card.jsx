import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({pokemon, shiny}) => {
  const {id, name, sprites, types} = pokemon;

  return (
    <div className='card' key={id}>
      <h3 className='card--name'>{name}</h3>
      {
        shiny
        ? <img className='card--image' src={sprites.front_shiny} alt={`Imagen de ${name}`} />
        : <img className='card--image' src={sprites.front_default} alt={`Imagen de ${name} shiny`} />
      }
      <div className='card--types'>
        {
          types.map((type, index) => (
            <span key={index} className={type.type.name}>{type.type.name}</span>
          ))
        }
      </div>
      <Link to={`/pokemon/${id}`}><button className='button'>Mas información</button></Link>
    </div>
  );
};

export default Card;