import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Salao from './pages/Salao';
import Cozinha from './pages/Cozinha';
import Nav from './components/Nav';

function App(){

return(
   
<Router>
  <div>
    <Switch>
      <Route exact path="/salao" component={Salao}/>
      <Route path="/cozinha" component={Cozinha}/>
    </Switch>
  </div> 
</Router>
);
}

export default App()
