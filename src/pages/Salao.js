import React, { useEffect, useState } from 'react';
import { db } from '../utils/configfirebase'
import MenuCard from '../components/MenuCard';
import Button from "../components/Button/button";
import MealCard from "../components/TimeCard/MealTimeCard";
import Input from "../components/Input/Input";
import firebase from 'firebase/app';
// import { FiXCircle } from "react-icons/fi";

function Salao()  {
    const[menu, setMenu] = useState([]);
    const [breakfast, setBreakfast] = useState(true);
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        db.collection('menu')
                .get()
                .then((snapshot) => {
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
        if(order.includes(menuItem)){
          menuItem.count++;
          setTotal(+(total + menuItem.count * menuItem.price)); 
        } else {
          menuItem.count = 1;
          setOrder([...order, menuItem]);
        }
        setTotal(+(total + menuItem.price));
     };

   
     const deleteProducts = (item) => {
      if (item.count === 1) {
        const delPrice = total - item.price;
        const itemIndex = order.indexOf(item);
        order.splice(itemIndex, 1);
        setOrder([...order]);
        setTotal(delPrice);
      } else {
        item.count--;
        const delPrice = total - item.price;
        setTotal(delPrice);
      }
    }
      
      const sendOrder = () => { 

        db.collection('Pedidos')
          .add({
            cliente: client,
            Mesa: table,
            Pedido: order,
            totalBill: total,
            status: 'Em andamento',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            setOrder([]); 
            setTable(['']);
            setClient(['']);
            setTotal(0);
          })
        alert('Enviado para cozinha');
      }

    return(
         
      <main>
      <div>
        
        <MealCard></MealCard>
          <Button className= "lunckBtn" title="Café da manhã" onClick={() => setBreakfast(true)}  id='breakfast' />
          <Button classNme= "lunckBtn" title="Almoço" onClick={() => setBreakfast(false)} />
         <p>
          <Input
            type='text'
            placeholder='Nome do cliente'
            onChange={event => setClient(event.target.value)} />
          <Input
            type='text'
            placeholder='Mesa'
            onChange={event => setTable(event.target.value)} />
         </p>
      </div>
      <section>
          <div>
        {/* <div key={menu.id} className={css(styles.menuDiv)}> */}
          {filterMeal().map((menuItem) =>
            <MenuCard key={menuItem.id}
              id={menuItem.id}
              onClick={() => addProducts(menuItem)}
              name={menuItem.name}
              price={menuItem.price}
              options={menuItem.options}
              extra={menuItem.extra}
            />
          )}
        </div>
        <div className="orderDiv">
          <h2>{client} {table}</h2>
          <div>
              {order.map(item =>
                <p key={item.id}> {item.count}x {item.name} R${item.price},00 <Button title = '-' onClick={(e) => {
                  e.preventDefault();
                  deleteProducts(item);
                }} /></p>
              )}
             <div><p>Total: R$ {total} </p></div> 
          </div>
          <p></p>
          <Button className= "sendBtn" title='Enviar pedido' onClick={sendOrder} />
        </div>
      </section>
      </main>

);
}
export default Salao;