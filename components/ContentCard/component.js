/* @flow */
import React from 'react'
import styles from './styles.css'

function ContentCard ({
  title = 'ContentCard',
  body = 'testing some body text',
  image = ''
}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{body}</div>
    </div>
  )
}

export default ContentCard
