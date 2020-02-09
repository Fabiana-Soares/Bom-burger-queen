import React from 'react'
import { StyleSheet, css } from 'aphrodite'


function Input(props) {
  return (
      <div className={css(styles.inputDiv)}>
        <input className={props.className}
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder} />
      </div>    

  )
}
const styles = StyleSheet.create({
  inputDiv: {
    display: 'flex',
    flexDirection: 'flow',
    flexWrap: 'wrap',
  width: '100%',
  marginTop: '2vh',
  '@media (min-width: 1281px)': {
      marginTop: '3vh',
  }
}
})

export default Input;