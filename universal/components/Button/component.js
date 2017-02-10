/* @flow */
import React from 'react'

import styles from './styles.css'

type ButtonProps = {
  children: any,
  text: string,
  url: string,
  href: string,
  onClick: Function,
  className: string,
  disabled: boolean,
  target: '_self' | '_blank',
  color: 'dark' | 'light'
}

function Button ({
  children,
  text,
  url,
  color,
  disabled = false,
  target = '_self'
}: ButtonProps) {
  if (!children && !text) {
    throw new Error('you need to supply either children or some text')
  }

  const props = {
    className: `${styles[color]} ${styles.button}`,
    href: url,
    target: target,
    onClick: undefined
  }

  if (disabled) {
    props.href = '#'
    props.onClick = (e) => e.preventDefault()
    props.className = props.className + ' ' + styles.disabled
  }

  return (
    <a {...props}>
      {children || text}
    </a>
  )
}

export default Button
