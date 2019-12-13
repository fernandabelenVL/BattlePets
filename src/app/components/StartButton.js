import React from 'react'

export default (props) => {
  const { onClick, text } = props;
  return (
    <div className='text-center '>
      <div onClick={() => onClick()}>{text ? text : <h1>Comenzar el juego</h1>}</div>
    </div>
  )
}
