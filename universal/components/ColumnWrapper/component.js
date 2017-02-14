/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  numColumns: 'oneCol' | 'twoCol' | 'threeCol' | 'fourCol',
  children: any
}

const ColumnWrapper = ({
  numColumns = 'twoCol',
  children
}: Props) => {
  const classNames = `${styles.container} ${styles[numColumns]}`
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default ColumnWrapper
