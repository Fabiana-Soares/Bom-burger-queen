import React, { useEffect, useState } from 'react';
import { db } from '../../utils/configfirebase';
import CardKitchen from '../../components/Cards/CardKitchen';
import { StyleSheet, css } from 'aphrodite';


function Kitchen(){

    const[orderPendents, setOrderPendents] = useState([]);
    
    useEffect(() =>{
        db.collection('Pedidos')
        .onSnapshot((snapshot) => { 
            const orders = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
            }))
            setOrderPendents(orders);
        })
    });

    return(
        <main className={css(styles.listKitchen)}>
            <div>
                <div className={css(styles.pendentsOrderDiv, styles.flex, styles.minHeight)}>
                    {orderPendents.map((ord) =>
                      <CardKitchen key={ord.id}
                        cliente={ord.cliente}
                        mesa={ord.mesa}
                        time={ord.time}
                        status={ord.status}
                        pedido={ord.pedido.map((item,index) => (
                            <div key={index}>
                              {item.count} x {item.name}
                            </div>
                        ))}
                    />)}
                </div>
            </div>
        </main>        
    );
}

const styles = StyleSheet.create({
    listKitchen: {
      backgroundColor: '#EEC591',
      padding: '10px 0 0 0',
      width: '100vw',
      height: '90.5vh',
      overflow: 'auto'    
    },
    pendentsOrderDiv: {
      
      display: 'Flex',
      flexWrap: 'wrap'
    }
  })

export default Kitchen;