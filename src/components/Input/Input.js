import React from 'react'


function Input(props) {
  return (
    <input
    //   className={css(styles.input)}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder} />
  )
}

export default Input;