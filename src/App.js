import React,{ useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Salao from './pages/Salao';
import Cozinha from './pages/Cozinha';
import Nav from './components/Nav';
import { db }  from './utils/configfirebase';

// function App() {
//     const [menu, setMenu] = useState([]);
//     const [produto, setProduto] = useState([]);
    
//  useEffect(() => {
//     db.collection('menu')
//     .get()
//     .then((snapshot) =>{
//         const suave = snapshot.docs.map((doc) => ({
//             id:doc.id,
//             ...doc.data()
//         }))
//         console.log(suave);
//         setMenu(suave);
//     });
// }, [0])


const App = () => {
return( 
   
<Router>
<Nav></Nav>
  <div>
    {/* <div> key={menu.id}>{produto.map((produto) => {produto.preco})} */}
      
    <Switch>
      <Route exact path="/salao" component={Salao}/>
      <Route path="/cozinha" component={Cozinha}/>
    </Switch> 
    </div>
</Router>
);
}
// }

export default App();
