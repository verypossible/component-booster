/* @flow */
import React from 'react'
import styles from './styles.css'

type ContentListProps = {
  title: string,
  items: Array<string>,
  itemWidth: 'full' | 'half' | 'quarter' | 'third'
}

const ContentList = ({
  title,
  items,
  itemWidth
}: ContentListProps) => {
  if (!items) {
    throw new Error('you need to supply items for the list')
  }

  return (
    <div className={styles.listWrap}>
      {title && <h3>{title}</h3>}
      {items.length > 0 && <ul>{items.map((i, index) => <li className={styles[itemWidth]} key={index}>{i}</li>)}</ul>}
    </div>
  )
}

export default ContentList
