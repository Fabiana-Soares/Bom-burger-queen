import React, { useEffect, useState } from 'react';
import { db } from '../../utils/configfirebase';
import MenuCard from '../../components/Cards/MenuCard';
import Button from "../../components/Button/button";
import MealCard from "../../components/Cards/MealTimeCard";
import Input from "../../components/Input/Input";
// import firebase from 'firebase/app';
import { StyleSheet, css } from 'aphrodite';
// import imgFundo from '../../img/bqfundo.jpg'

function Salao()  {
    const[menu, setMenu] = useState([]);
    const [breakfast, setBreakfast] = useState(true);
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);
    const [modal, setModal] = useState({status:false});
    const [options, setOptions] = useState(" ");
    const [extra, setExtra] = useState(" ")


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

     const verifyOptions = (menuItem) => {
      if (menuItem.options.length !== 0) {
          setModal({ status: true, item: menuItem });
      } else {
          addProducts(menuItem);
      }
  };

  const addOptions = () => {
    if (extra !== '') {
      const updatedItem = {
        ...modal.item,
        price: modal.item.price,
        name: `${modal.item.name} ${options} com ${extra}`
      };
      addProducts(updatedItem);
      setModal({ status: false })
    } else {
      const updatedItem = {
        ...modal.item,
        name: `${modal.item.name} ${options} com ${extra}`
      };
      addProducts(updatedItem);
      setModal({ status: false })
    }
  }
   
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
        if(order.length && client && table) {
        db.collection('Pedidos')
          .add({
            cliente: client,
            mesa: table,
            pedido: order,
            totalBill: total,
            status: 'Pedido em andamento',
            time: new Date().toLocaleString('pt-BR'),
          })
          .then(() => {
            setOrder([]); 
            setTable(['']);
            setClient(['']);
            setTotal(0);
          })
          
            alert("Enviado para cozinha.");
          
        } else if (!client) {
          window.alert("Insira o nome do cliente")
        } else if (!table) {
          window.alert("Insira o numero da mesa")
        } else if (!order.length) {
          window.alert("Escolha o seu pedido")
       }
      }
      console.log(menu);

    return( 
          <main className={css(styles.main)}>
            <div>
              
                <MealCard></MealCard>
                <div className={css(styles.lunchBtnDiv)}>
                  <Button className={css(styles.lunchBtn)} title="Café da manhã" onClick={() => setBreakfast(true)}  id='breakfast' />
                  <Button className={css(styles.lunchBtn)} title="Almoço" onClick={() => setBreakfast(false)} />
                </div>
        
                
                <div>
                  <Input 
                    type='text'
                    placeholder='Nome do cliente'
                    onChange={event => setClient(event.target.value)} />
                  <Input className={css(styles.inputDiv)}
                    type='text'
                    placeholder='Mesa'
                    onChange={event => setTable(event.target.value)} />
                
                 </div>
             </div>
             <h2 className={css(styles.h2)}>
                        Selecione o menu
                     {/* <span role="img" aria-labelledby='burger emoji'> 🍔 </span> */}
                    </h2>
          <section>
              {/* <div>
              {filterMeal().map((menuItem, index) =>
                <MenuCard key={index}
                  id={menuItem.id}
                  onClick={() => verifyOptions(menuItem)}
                  name={menuItem.name}
                  img={menuItem.img}
                  price={menuItem.price}
                  options={menuItem.options}
                  extra={menuItem.extra}
                />
              )}
            </div>  */}
            <div className={css(styles.flex, styles.flow, styles.wrap)}>
              {filterMeal().map((menuItem, index) =>
                <MenuCard key={index}
                id={menuItem.id} onClick={() => verifyOptions(menuItem)}>
                  
                  {/* {menuItem.id} */}
                  {/* {menuItem.name} */}
                  {/* <p>{menuItem.price}, 00</p> */}
                  {/* {menuItem.extra}
                  {menuItem.options} */}
                  <img width="170px" src={menuItem.img}/>
              
                </MenuCard>
              )}
            </div> 

              {modal.status ? (

              <section>
                <div>
                  <h3>Extras</h3>
                  {modal.item.extra.map((extras, index) => (
                    <div key ={index}>
                      <input onChange={() =>
                        setExtra(extras)} 
                        type="radio" name="extra" value={extras.value} checked={extras === extra}/>
                      <label>{extras}</label>
                    </div>
            ))} </div>

                  <div> 
                  <h3>Opcoes</h3>
                  {modal.item.options.map((elem, index) => (
                          <div key={index}>
                              <input onChange={() => setOptions(elem)} type="radio" name="options" value={elem.value}
                                checked={elem === options} />
                              <label>{elem}</label>
                          </div>
                      ))}

                  </div>
                        <Button onClick={addOptions} title = "Adicionar"/>
                </section>
              ): false}
                  
                  <div className="orderDiv">
                    <h2>{client} {table}</h2>
                    <div>
                        {order.map(item =>
                          <p key={item.id}> {item.count}x {item.name} R${item.price},00 <Button title = '-' onClick={(e) => {
                            e.preventDefault();
                            deleteProducts(item);
                          }} /></p>
                        )}
                      <div><p>Valor Total: R$ {total},00 reais </p></div> 
                    </div>
                    <p></p>
                    <Button className= "sendBtn" title='Enviar pedido' onClick={sendOrder} />
                  </div>
                </section>
                </main>
           

    );
    }

const styles = StyleSheet.create({
  lunchBtnDiv:{
    display: 'flex',
    justifyContent: 'center', 
    margin: '0%',       
  },

  lunchBtn:{
     textShadow: '1px 1px black',
    margin: '0 0 1vh 3vw',
    borderRadius: '200px',
    border: '2px solid black', 
    width: '20vw',
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

  main: {
    alignItems: 'center',
    height: '100vh',
  },

  flex: {
    display: 'flex',
},

flow: {
    flexDirection: 'flow'
},

wrap: {
    flexWrap: 'wrap'
},
div: {
  width: '100%',
  marginTop: '2vh',
  '@media (min-width: 1281px)': {
      marginTop: '3vh',
  }
},

// inputDiv: {
//     justifyContent: 'center'
//     // border:'5px',
//     // display: 'flex',
//     // margin: '0 0 1vh 3vw',
//     // alignItems: 'center'

//   }

})

export default Salao;