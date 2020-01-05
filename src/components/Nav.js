import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
// import './styles.css';

function Nav(props){
  return(
    <nav className="main-header">
      <ul>
      <img width={"50px"}  src={Logo} alt ='Logo Burger Queen' />
       <ul> BURGER QUEEN</ul>
      </ul>
        <Link className="links"></Link>
          <Link to="/Home"  className="links" >Home</Link>
          <Link to="/Salao"  className="links">Salao</Link>
          <Link to="/Kitchen"  className="links">Cozinha</Link> 
      </nav>
    );
}
export default Nav;
