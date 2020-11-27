import React from 'react';
import styles from './style.module.css';

type Props = {};

export const Button: React.FC<Props> = (props) => {
  return <div className={styles.container} data-testid="test" />;
};
