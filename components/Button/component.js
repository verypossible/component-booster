/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './styles.css'

type ButtonProps = {
  children: any,
  handleClick: Function,
  linkTo: string,
  color: string,
  segmentProps: Object,
  disabled: bool,
}

function Button ({
  children,
  linkTo,
  color,
  handleClick,
  segmentProps,
  disabled
}: ButtonProps) {
  return (
    <Link
      to={linkTo}
      className={styles[color]}
      onClick={handleClick}
      activeClassName={styles.activeStyle}
      disabled={disabled}
    >
      {children}
    </Link>
  )
}

export default Button
