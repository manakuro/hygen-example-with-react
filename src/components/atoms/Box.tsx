import React from 'react';
import style from './style.module.css';

const Box: React.FC = () => {
  return (
    <div className={style.box} data-testid="box" />
  )
}

export default Box;
