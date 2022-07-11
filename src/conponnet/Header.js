import React from 'react'
import logo from "../img/logo.png";
import '../Css/header.css';
const Header = () => {
  return (
     <div>
         <nav>
             <img src={logo}  className="nav--logo"/>
         </nav>
    </div>
  )
}

export default Header