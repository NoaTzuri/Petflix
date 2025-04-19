import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title}) => {

  const  [setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGU0OTZlMjM1MmFiNGYwZjE5MGRjNzkxOGE4YTBmMCIsIm5iZiI6MTc0MzU3OTA4MC43ODcwMDAyLCJzdWIiOiI2N2VjZTdjODA2MDcyMDcwNzBjZTQ5NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CI2781fyWyHYGBlec2mjMCRe732L__mbzX-Uh14slgo'
    }
  };

  const handlewheel = (event)=>{
    event.preventDefault;
    cardsRef.current.scrollLeft += event.deltaY;
  }

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }
  
  useEffect(()=>{

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handlewheel);
  },[])
  
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Petflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {shuffleArray(cards_data).map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={card.image} alt="" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards