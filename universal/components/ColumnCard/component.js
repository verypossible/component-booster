/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  spanColumns: 'span12' | 'span6' | 'span4' | 'span3',
  title: string,
  body: string
}

const ColumnCard = ({
  spanColumns = 'span6',
  title = 'Column Card Title',
  body = 'Some basic text stuff'
}: Props) => {
  const classNames = `${styles.container} ${styles[spanColumns]}`
  return (
    <div className={classNames}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
    </div>
  )
}

export default ColumnCard
