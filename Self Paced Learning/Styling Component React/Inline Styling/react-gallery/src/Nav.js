import PropTypes from 'prop-types';
import React from 'react';

import styles from './Nav.css.js'

function Nav(props) {
  return (
    <div style={styles.root}>
      <button style={styles.prev}>&#10094;</button>
      <button style={styles.next}>&#10095;</button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default Nav;
