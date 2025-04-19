import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';

const Player = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!id) return;


    const movie = cards_data.find((card) => card.id === id);

    if (movie) {
      setSelectedMovie(movie); 
    } else {
      console.error('Movie not found');
    }
  }, [id]); 

  return (
    <div className='player'>
      <img
        src={back_arrow_icon}
        alt="Back"
        onClick={() => navigate(-1)} 
      />
      {selectedMovie ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${selectedMovie.id}`}
          title={selectedMovie.name}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Movie not found</p>
      )}

      <div className="player-info">
        <p>{selectedMovie?.name || 'Movie not found'}</p>
      </div>
    </div>
  );
};

export default Player;
