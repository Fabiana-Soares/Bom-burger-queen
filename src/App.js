import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Salao from './pages/Salao/Salao';
import Kitchen from './pages/Kitchen/Kitchen';
import Home from './pages/Home/Home';
import Nav from './components/Nav';
import imgFundo from '../src/img/bqfundo.jpg'
import{StyleSheet,css} from 'aphrodite';

function App() {
    
   return (
    <div className={css(styles.fundo)}>
    <Router>
      <Nav />
        <Switch>
          <Route path="/Kitchen" component={Kitchen}/>
          <Route path="/Salao" component={Salao}/>
          <Route path="/Home" component={Home}/>  
      </Switch>
   
  </Router>
  </div>
   );
}
const styles = StyleSheet.create({
 
  fundo: {
    backgroundImage: `url(${imgFundo})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    // backgroundAttachment: 'fixed',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    alignItems: 'center',    
    width: '100vw'
},
})


export default App;
