import React from 'react';
import style from './style.module.css';

type Props = {
  color: 'green' | 'yellow' | 'red'
}

export const Box: React.FC<Props> = (props) => {
  return (
    <div className={style.box} style={{ background: props.color }} data-testid="box" />
  )
}
