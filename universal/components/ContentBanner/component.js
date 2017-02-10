/* @flow */
import React from 'react'
import Button from 'components/Button'

import styles from './styles.css'

type Props = {
  title: Array<string>,
  bannerText: string,
  bannerImage: string,
  bannerImageOverlay: 'overlayDark' | 'overlayLight' | 'overlayOff',
  hasButton: boolean,
  hasContentImage: boolean,
  contentImage: string,
  hasContentImageText: boolean,
  contentImageText: string,
};

// True/False Logic For Button
function renderButton ({
    hasButton
  }: { hasButton: boolean }) {
  if (hasButton) {
    return (
      <section className={styles.buttonWrap}>
        <Button text="Button" color="light" />
      </section>
    )
  }
  return null
}

// True/False Logic Content Image
function renderContentImageText ({
    hasContentImageText,
    contentImageText
  }: { hasContentImageText: boolean, contentImageText: string, contentImageText: string }) {
  if (hasContentImageText) {
    return (
      <i className={styles.details}>
        {contentImageText}
      </i>
    )
  }
  return null
}

// True/False Logic Content Image
function renderContentImage ({
    hasContentImage,
    contentImage,
    hasContentImageText,
    contentImageText,
    title
  }: {
    hasContentImage: boolean,
    contentImage: string,
    hasContentImageText: boolean,
    contentImageText: string,
    title: Array<string>
  }) {
  if (hasContentImage) {
    return (
      <span id="contentImage" className={styles.contentImage}>
        {renderContentImageText({ hasContentImageText, contentImageText })}
        <img src={contentImage} alt={title} />
      </span>
    )
  }
  return null
}

const ContentBanner = ({
  title,
  bannerText,
  bannerImage,
  bannerImageOverlay,
  hasButton,
  hasContentImage,
  contentImage,
  hasContentImageText,
  contentImageText
}: Props) => {
  return (
    <section className={styles.banner}>
      <span className={styles[bannerImageOverlay]}>
        <img className={`${styles.bannerImage} bgImage`} src={bannerImage} alt={title} />
      </span>
      <div className={styles.content}>
        <header className={styles.bannerHeader}>
          {title.map((paragraph, i) => (<h1 className={styles.h1} key={i}>{paragraph}</h1>))}
        </header>
        <section className={styles.bannerText}>
          <p className={styles.p}>{bannerText}</p>
        </section>
        {renderButton({ hasButton })}
        {renderContentImage({
          hasContentImage, contentImage, hasContentImageText, contentImageText, title
        })}
      </div>
    </section>
  )
}

export default ContentBanner
