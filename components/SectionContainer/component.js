/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  customClass: string,
  boxModel: 'boxDefault' | 'flexCol' | 'flexRow',
  bg: 'bgDefault' | 'white' | 'black' | 'moireOne',
  children: any
};

const SectionContainer = ({
  customClass,
  boxModel,
  bg,
  children = null
}: Props) => {
  const classNames = `${styles.container} ${styles[boxModel]} ${styles[bg]} ${customClass}`
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default SectionContainer
