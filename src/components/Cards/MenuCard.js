// import React from 'react';

// function MenuCard(props) {
//     return(
    
//         <button onClick={props.onClick}>
//             <p>{props.name}</p>
//             <p>{props.price}</p>
//         </button>
//     )
// }
// export default MenuCard;

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function MenuCard(props) {
    return(
    
        <div onClick={props.onClick} id={props.id} className={css(styles.imagem)}>
            {props.children}
        </div>
    )
}

const styles = StyleSheet.create({
imagem: {
        border: '4px solid black',
        // display: 'flex',
        margin: '10px',
        ':hover': {
        backgroundColor: 'black',
        cursor: 'pointer'
        },
        }
 });
export default MenuCard;

