import React, { useEffect, useState } from 'react';
import db from '../utils/configfirebase'
import MenuCard from '../components/MenuCard';
import Button from "../components/Button/button";
import MealTimeCard from "../components/TimeCard/MealTimeCard";
import Input from "../components/Input/Input";

function Salao()  {

    const[menu, setMenu] = useState([]);
    const [breakfast, setBreakfast] = useState(true);
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        db.collection('menu').get()
                .then(snapshot => {
                    const item = snapshot.docs.map((doc) => ({
                        id:doc.id,
                        ...doc.data()
                    }))
                    setMenu(item);
                })
    }, []);
    const filterMeal = () => {
        const meal = menu.filter((item) => item.breakfast === breakfast)
        return meal;
      }
    
      const addProducts = (menuItem) => {
        setOrder([...order, menuItem]);
      }
      
      const sendOrder = () => {
        db.collection('order')
          .add({
            clientName: client,
            tableNumber: table,
            clientOrder: order,
            // totalBill: total,
            // status: 'Em andamento',
            // time: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            setOrder([]);
            setTable(['']);
            setClient(['']);
          })
        console.log('Enviado');
      }
    //   console.log(menu);

    return(
//       <div>
//         {menu.map(menuItem => 
//             <MenuCard name={menuItem.name} price={menuItem.price} onClick={() => console.log(menuItem)}/>
        
//         )}
//         </div>
//     );
// }
<main>
<div>
  <MealTimeCard
    title="Café da manhã"
    onClick={() => setBreakfast(true)}
    id='breakfast' />
  <MealTimeCard
    title="Almoço"
    onClick={() => setBreakfast(false)} />
  <Input
    type='text'
    placeholder='Nome do cliente'
    onChange={event => setClient(event.target.value)} />
  <Input
    type='text'
    placeholder='Mesa'
    onChange={event => setTable(event.target.value)} />
</div>
<section>
    <div>
  {/* <div key={menu.id} className={css(styles.menuDiv)}> */}
    {filterMeal().map((menuItem) =>
      <MenuCard key={menuItem.id}
        id={menuItem.id}
        onClick={() => addProducts}
        name={menuItem.name}
        price={menuItem.price}
        options={menuItem.options}
        extra={menuItem.extra}
        item={menuItem}
      />)
    }
  </div>
  <div className="orderDiv">
    <h2>{client} {table}</h2>
    <p></p>
    <Button className= "cleanBtn" title='Limpar pedido' />
    <Button className= "sendBtn" title='Enviar pedido' onClick={sendOrder} />
  </div>
</section>
</main>

);
}
export default Salao;