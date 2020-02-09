import React from 'react';
// import Salao from '../pages/Salao';
import imgFundo from '../../img/bqfundo.jpg'
import{StyleSheet,css} from 'aphrodite'


function Home(){
    return(
        <div className={css(styles.fundo)}> 
            <h1>Bem-Vindo a nossa Hamburgueria</h1> 
             <h3>Conheça nossa hamburgueria com maravilhosos,
                  hamburgueres gourmet, e um excelente lugar para
                  voce tomar um cafe. Seja bem vindo e aprecie.</h3> 
             <h3>Meet our hamburger with wonderful
                  gourmet burgers,
                   and an excellent place for you to have a coffee. Welcome and enjoy.</h3>
        </div>
    );
}

const styles = StyleSheet.create({


})
export default Home;