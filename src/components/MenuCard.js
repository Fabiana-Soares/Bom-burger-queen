import React from 'react';

function MenuCard(props) {
    return(
        <section onClick={props.onClick}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}
export default MenuCard;