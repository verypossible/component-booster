/* @flow */
import React from 'react'

import styles from './styles.css'

type ButtonProps = {
  children: any,
  url: string,
  segmentProps: Object,
  disabled: boolean,
  external: boolean,
  color: 'dark' | 'light'
}

function Button ({
  children,
  url,
  color,
  segmentProps,
  disabled,
  external
}: ButtonProps) {
  if (disabled) {
    if (external) {
      return (
        <a
          href={url}
          className={styles[color] + ' ' + styles.disabled + ' ' + styles.button}
          target="_blank"
        >
          {children}
        </a>
      )
    }
    return (
      <a
        href={url}
        className={styles[color] + ' ' + styles.disabled + ' ' + styles.button}
        target="_self"
      >
        {children}
      </a>
    )
  }
  if (external) {
    return (
      <a
        href={url}
        className={styles[color] + ' ' + styles.button}
        target="_blank"
      >
        {children}
      </a>
    )
  }
  return (
    <a
      href={url}
      className={styles[color] + ' ' + styles.button}
      target="_self"
    >
      {children}
    </a>
  )
}

export default Button
