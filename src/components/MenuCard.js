import React from 'react';

function MenuCard(props) {
    return(
        <button onClick={props.onClick}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </button>
    )
}
export default MenuCard;