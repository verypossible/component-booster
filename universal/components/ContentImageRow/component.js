/* @flow */
import React from 'react'
import styles from './styles.css'
import imageOne from './assets/img.png'
import imageTwo from './assets/img2.png'

const defaultImages = [
  { image: imageOne, link: null },
  { image: imageTwo, link: null }
]

type ImageProps = {
  image: any,
  link: string
}

type Props = {
  title: string,
  image: any,
  images: ImageProps[]
}

type TitleProps = {
  title: string,
}

function renderTitle ({
  title
}: TitleProps) {
  if (title) {
    return (
      <h2 className={styles.title}>{title}</h2>
    )
  }
  return null
}

const RenderImage = ({
  image = imageOne,
  link
}: ImageProps) => {
  if (link) {
    return (
      <a
        className={styles.image}
        href={link}
        style={{backgroundImage: `url(${image})`}}
        target="_blank"
      />
    )
  }
  return (
    <div className={styles.image} style={{backgroundImage: `url(${image})`}} />
  )
}

function ContentImageRow ({
  title = 'Hello ContentImageRow',
  image,
  images = defaultImages
}: Props) {
  return (
    <div className={styles.container}>
      {renderTitle({title})}
      <div className={styles.imageWrapper}>
        {images.map((image, i) => <RenderImage key={i} {...image} />)}
      </div>
    </div>
  )
}

export default ContentImageRow
