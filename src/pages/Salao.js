import React, { useEffect, useState } from 'react';
import db from '../utils/configfirebase'
import MenuCard from '../components/MenuCard';
import Button from "../components/Button/button";

function Salao()  {

    const[menu, setMenu] = useState([]);

    useEffect(()=>{
        db.collection('menu').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        setMenu((currentState)=> [...currentState, doc.data()]); 
                    });
                })
    }, []);
      
      console.log(menu);

    return(
      <div>
        {menu.map(menuItem => 
            <MenuCard name={menuItem.name} price={menuItem.price} onClick={() => console.log(menuItem)}/>
        
        )}
        </div>
    );
}

export default Salao;