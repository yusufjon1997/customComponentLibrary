import React from 'react';
import './Button.scss';

interface ButtonType {
  name : string,
  onClick : () => void,
  type : 'primary' | 'warning' | 'success',
  outline : boolean
}


function Button({ name , type , outline , onClick } : ButtonType) {
  
  const isOutlined = outline ? 'outlined' : '';

  return (
    <button className={`btn ${type} ${isOutlined}`} onClick={onClick}>{name}</button>
  )
}

export default Button