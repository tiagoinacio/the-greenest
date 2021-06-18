import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="restaurante"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;