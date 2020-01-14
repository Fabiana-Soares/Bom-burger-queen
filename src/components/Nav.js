import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";


function Nav(){

  
  return(
    <nav className="main-nav">
      <img width={"50px"}  src={Logo} alt ='Logo Burger Queen' />
       <h1> BURGER QUEEN</h1>
       <Link className="links"></Link>
          <Link to="/Home"   className="links"> Home</Link>
          <Link to="/Salao"  className="links">Salao</Link>
          <Link to="/Kitchen"  className="links">Cozinha</Link>
      </nav>
    );
}
export default Nav;
