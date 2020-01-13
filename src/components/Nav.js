import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
// import './styles.css';

function Nav(){
  return(
    <nav className="main-nav">
      <ul>
      <img width={"50px"}  src={Logo} alt ='Logo Burger Queen' />
       <ul> BURGER QUEEN</ul>
      </ul>
        <Link className="links">
          <Link to="/Home"  className="links" >Home</Link>
          <Link to="/Salao"  className="links">Salao</Link>
          <Link to="/Kitchen"  className="links">Cozinha</Link> 
        </Link>
      </nav>
    );
}
export default Nav;
