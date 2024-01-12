import React from 'react';

const Card = ({pokemon}) => {
  const {id, name, sprites, types} = pokemon;

  return (
    <div className='card' key={id}>
      <p className='card--name'>{name}</p>
      <img className='card--image' src={sprites && sprites.front_default} alt={`Imagen de ${name}`} />
      <div className='card--types'>
        {
          types && types.map((type, index) => (
            <span key={index} className={type.type.name}>{type.type.name}</span>
          ))
        }
      </div>
      <button className='button'>Ver más</button>
    </div>
  );
};

export default Card;