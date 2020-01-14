import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Salao from './pages/Salao/Salao';
import Kitchen from './pages/Kitchen/Kitchen';
import Home from './pages/Home/Home';
import Nav from './components/Nav';




function App() {
    
   return (
    <Router>
      <Nav />
       <div>
        <Switch>
          <Route path="/Kitchen" component={Kitchen}/>
          <Route path="/Salao" component={Salao}/>
          <Route path="/Home" component={Home}/>  
      </Switch>
    </div>
  </Router>
   );
}


export default App;
