import React from 'react';
function MenuCard(props) {
    return(
        <section onClick={props.handlClick}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}
export default MenuCard;