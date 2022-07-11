import React from 'react'
import hero from '../img/Group 77.png'
import imgone from '../img/image 12.png';
import '../Css/hero.css'
const Hero = ({imgUrl, imgicon, spanone, spantwo, spanthree, text, spanfour}) => {
  return (
       <div className="contacts">
            <img src={imgUrl} />
            <div className="card--stats">
               <img src={imgicon} className="card--star" />
                <span>{spanone}</span>
                <span className="gray">{spantwo}</span>
                <span className="gray">{spanthree}</span>
            </div>  
            <p>{text}</p>
            <p><span className="bold">{spanfour}</span></p>
       </div>
  )
}

export default Hero
