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
    
        <div  className={css(styles.imagem)} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

const styles = StyleSheet.create({
    imagem: {
        
      border: '1px solid black' 

    }
}
)
export default MenuCard;

