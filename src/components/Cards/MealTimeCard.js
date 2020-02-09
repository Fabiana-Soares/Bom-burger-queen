import React from 'react'

function MealTimeCard(props) {
  return (
    <section
      onClick={props.onClick}
      // className={css(styles.optioncard)}
      id={props.id}>
      <p>{props.title}</p>
    </section>
  )
}

export default MealTimeCard;