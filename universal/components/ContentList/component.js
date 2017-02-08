/* @flow */
import React from 'react'
import styles from './styles.css'

type ContentListProps = {
  hasTitle: boolean,
  title: string,
  bulletList: boolean,
  items: Array<string>,
  itemWidth: 'full' | 'half' | 'quarter' | 'third'
}

// Logic for renderTitle
function renderTitle ({
  hasTitle,
  title
}: { hasTitle: boolean, title: string }) {
  if (hasTitle) {
    return (
      <header className={styles.header}>
        <h3 className={styles.h3}>{title}</h3>
      </header>
    )
  }
  return null
}

// Logic for renderList
function renderList ({
  bulletList,
  items,
  itemWidth
}: { bulletList: boolean, items: Array<string>, itemWidth: string }) {
  if (bulletList) {
    return (
      <ul className={styles.ul}>
        {items.map((listItem, index) => <li className={styles[itemWidth]} key={index}>{listItem}</li>)}
      </ul>
    )
  }
  return (
    <ol className={styles.ol}>
      {items.map((listItem, index) => <li className={styles[itemWidth]} key={index}>{listItem}</li>)}
    </ol>
  )
}

const ContentList = ({
  hasTitle,
  title,
  bulletList,
  items,
  itemWidth
}: ContentListProps) => {
  return (
    <div className={styles.listWrap}>
      {renderTitle({hasTitle, title})}
      {renderList({bulletList, items, itemWidth})}
    </div>
  )
}

export default ContentList
