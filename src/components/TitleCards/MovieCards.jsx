import React from 'react';
import { Link } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';


const MovieCards = () => {
  return (
    <div className="movie-cards-container">
      {cards_data.map((card, index) => (
        <Link to={`/player/${card.id}`} key={index}>
        <div className="movie-card">
          <img src={card.image} alt={card.name} />
          <h3>{card.name}</h3>
        </div>
      </Link>
      ))}
    </div>
  );
};

export default MovieCards;