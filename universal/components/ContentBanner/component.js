/* @flow */
import React from 'react'
import SectionFullWidth from 'components/SectionFullWidth'
import SectionContainer from 'components/SectionContainer'
// import Button from 'components/Button'
// add back in after button gets merged into master

import styles from './styles.css'

// type LinkProps = {
//   linkText: string,
//   linkTo: string,
//   linkStyle: string,
//   target: string
// }

type Props = {
  title: Array<string>,
  bannerText: string,
  bannerImage: string,
  bannerImageOverlay: 'overlayTrue' | 'overlayFalse',
  hasButton: boolean,
  hasContentImage: boolean,
  contentImage: string,
  hasContentImageText: boolean,
  contentImageText: string,
  // link: LinkProps
};

// const linkDefaults = {
//   linkText: 'Button Text',
//   linkTo: 'javascript:void(0)',
//   linkStyle: 'tealBG',
//   target: '_blank'
// }

// True/False Logic For Button
// function renderButton ({
//     hasButton,
//     link
//   }: { hasButton: boolean, link: LinkProps }) {
//   if (hasButton) {
//     return (
//       <section className={styles.buttonWrap}>
//         <Button {...link} />
//       </section>
//     )
//   }
//   return null
// }
// Add the following back in after the Button component exists
// {renderButton({ hasButton, link })}

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
  // link = linkDefaults
}: Props) => {
  return (
    <SectionFullWidth>
      <section className={styles.banner}>
        <span className={styles[bannerImageOverlay]}>
          <img className={`${styles.bannerImage} bgImage`} src={bannerImage} alt={title} />
        </span>
        <SectionContainer>
          <header className={styles.bannerHeader}>
            {title.map((paragraph, i) => (<h1 className={styles.h1} key={i}>{paragraph}</h1>))}
          </header>
          <section className={styles.bannerText}>
            <p className={styles.p}>{bannerText}</p>
          </section>
          {renderContentImage({
            hasContentImage, contentImage, hasContentImageText, contentImageText, title
          })}
        </SectionContainer>
      </section>
    </SectionFullWidth>
  )
}

export default ContentBanner
