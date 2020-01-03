import React, { useEffect, useState } from 'react';
import db from '../utils/configfirebase';
import MenuCard from '../components/MenuCard';


function Salao()  {
    const [menu, setMenu] = useState([]);

   useEffect(()=>{
       db.collection('menu').get()
        .then(snapshot =>{
            snapshot.forEach(doc => {
                setMenu((currentState)=> [...currentState, doc.data()]);
            });
        })
   }, []);


    return(
        <div>
          {menu.map(menuItem => 
              <MenuCard name={menuItem.name} price={menuItem.price} handleClick={() => console.log(menuItem)}/> //quanto a tag comeca com letra maiuscula isso eh um componente
            
        )}
            
            </div>
    );
}

export default Salao;