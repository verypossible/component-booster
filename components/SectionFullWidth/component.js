/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  customClass: string,
  boxModel: 'boxDefault' | 'flexCol' | 'flexRow',
  bg: 'bgDefault' | 'white' | 'black',
  sectionPadding: 'paddingDefault' | 'paddingTrue' | 'paddingFalse',
  sectionMargin: 'marginDefault' | 'marginTrue' | 'marginTop' | 'marginBottom',
  children: any
};

const SectionFullWidth = ({
  customClass,
  boxModel,
  bg,
  sectionPadding,
  sectionMargin,
  children = null
}: Props) => {
  const className = `
    ${styles[boxModel]}
    ${styles[bg]} ${styles[sectionPadding]}
    ${styles[sectionMargin]}
    ${customClass}
  `
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default SectionFullWidth
