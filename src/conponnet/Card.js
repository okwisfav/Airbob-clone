import React from 'react'
import hero from '../img/Group 77.png'
import imgone from '../img/image 12.png';
import star from '../img/Star 1.png'
import '../Css/card.css';
import Hero from './Hero';
const Card = () => {
  return (
    <div className="card">
        <Hero 
         imgUrl={imgone}
         imgicon={star}
         spanone="5.0"
         spantwo="(6)"
         spanthree="USA"
         text="Life of a kids"
         spanfour="from $136 / person"
         />
    </div>
  )
}

export default Card
