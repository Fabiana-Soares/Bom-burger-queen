import React from 'react'
import { Link } from "react-router-dom";
import logo from "../img/_queen.png";
// import Background from '../img/f';
import{StyleSheet,css} from 'aphrodite';
import imgFundo from '../../src/img/bqfundo.jpg';

function Nav(){

 return(
  <div className={css(styles.fundo)}>  
    <section className="$]{css(styles.container)}">  
      <nav className={css(styles.main)}>
        <img src={logo} alt ='Logo Burger Queen' className={css(styles.logo)} />
         <h1 className={css(styles.bq)}> BURGER QUEEN</h1>
            <Link className={css(styles.navlinks)} to="/Home">Home</Link>
            <Link className={css(styles.navlinks)} to="/Salao">Salao</Link>
            <Link className={css(styles.navlinks)} to="/Kitchen">Cozinha</Link>
          
      </nav>
    </section>
   </div> 
    );
}
const styles = StyleSheet.create({
  logo: {
    width: '6vw',
  },

  bq:{
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Just Me Again Down Here',
    color: '#FF3030',
    textShadow: '3px 3px black',
    width: '30vw',
    fontFamily: 'Lato, sans-serif',
    fontSize: '170%',   
  },
   main: {
    margin: '0 0 1vh 3vw',
    width: '80vw',
    height: '20vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // position: 'static',
    '@media screen and (max-width: 1024px)': {
      height: '100%',
      marginBottom: '50%'
    }
  },
  navlinks: {
    textShadow: '1px 1px black',
    margin: '0 0 1vh 3vw',
    borderRadius: '200px',
    border: '2px solid black', 
    width: '10vw',
    height: '3vh',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    textDecoration: 'none',
    color: '#FF3030',
    fontFamily: 'Just Me Again Down Here',
    fontSize: '120%',
    fontWeight: 'bold',
    ':hover' : {
      backgroundColor: 'black',
  cursor: 'pointer'
    
 }
  }
})
export default Nav;
