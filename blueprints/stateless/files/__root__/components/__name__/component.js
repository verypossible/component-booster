/* @flow */
import React from 'react'
import styles from './styles.css'

type <%= pascalEntityName %>Props = {
  title: string
}

function <%= pascalEntityName %> ({
  title = '<%= pascalEntityName %>'
}: <%= pascalEntityName %>Props) {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default <%= pascalEntityName %>
