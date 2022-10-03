import React from 'react';

import styles from './Frame.css.js';

export default function Frame({ children }) {
  return <div style={styles.root}>{children}</div>;
}
