---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';
import styles from './style.module.css';

type Props = {};

export const <%= component_name %>: React.FC<Props> = (props) => {
  return <div className={styles.container} data-testid="test" />;
};
