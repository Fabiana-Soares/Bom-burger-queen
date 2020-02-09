import React from 'react';
import Button from '../../components/Button/button';
import { StyleSheet, css } from 'aphrodite'


function CardKitchen(props) {
    return(
        <div
        className={css(styles.orderCard)}>
            <section className={css(styles.orderText)}>
                <p>{props.cliente}, Mesa: {props.mesa}</p>
                <div> {props.pedido}</div>
                <p><strong>Status:{props.status}</strong></p>
                <p>{props.time}</p>
                <div className={css(styles.readyBtnDiv)}><Button className={css(styles.readyBtn)} title="Pronto!"/></div>
            </section>    
        </div>         
    )
}

const styles = StyleSheet.create({
    orderCard: {
      // backgroundColor: '#DEB887',
      width: '30vw',
      height: '30vh',
      fontFamily: 'Lato, sans-serif',
      fontSize: '100%',
      display: 'flex',
      padding: '5px',
      margin: '25px 3px 3px 25px',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      overflow: 'scroll'
      
    },
    orderText: {
      padding: '5px',
    },
    readyBtn: {
      textShadow: '1px 1px black',
      margin: '0 0 1vh 3vw',
      borderRadius: '200px',
      border: '2px solid black', 
      width: '15vw',
      height: '7vh',
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
    },
    readyBtnDiv: {
      display: 'flex',
      justifyContent: 'center'
    }
  })
  
  export default CardKitchen;