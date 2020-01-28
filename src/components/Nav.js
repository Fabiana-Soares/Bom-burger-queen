import React from 'react'
import { Link } from "react-router-dom";
import logo from "../img/_queen.png";
// import Background from '../img/f';
import{StyleSheet,css} from 'aphrodite';

function Nav(){

 return(
  <section className="${css(styles.container)}">  
    <nav className={css(styles.main)}>
      <img src={logo} alt ='Logo Burger Queen' className={css(styles.logo)} />
       <h1 className={css(styles.bq)}> BURGER QUEEN</h1>
            <Link className={css(styles.navlinks)} to="/Home">Home</Link>
            <Link className={css(styles.navlinks)} to="/Salao">Salao</Link>
            <Link className={css(styles.navlinks)} to="/Kitchen">Cozinha</Link>
          
      </nav>
    </section>
    );
}
const styles = StyleSheet.create({
  logo: {
    width: '4vw',
  },
  bq: {
    width: '10vw',
    fontFamily: 'Lato, sans-serif',
    fontSize: '150%',
    fontWeight: 'bold',
    right:'19vw',
  },
   main: {
    background: 'red',
    width: '100vw',
    height: '15vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'static'
  },
  navlinks: {
    animationName:{
      '25%': {
        transform: 'scale(1.05) rotate(5deg)'
      }
    },
    backgroundColor: '#CDAA7D',
    borderRadius: '20px',
    width: '5vw',
    height: '3vh',
    padding: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    textDecoration: 'none',
    fontFamily: 'Lato, sans-serif',
    fontSize: '120%',
    color: '#000000',
    fontWeight: 'bold',
    ':hover' : {
      color: '#FFE7BA'
 }
  }
})
export default Nav;
