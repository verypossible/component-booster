import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import ContentImageRow from './component'
import imageOne from './assets/img.png'
import imageTwo from './assets/img2.png'

const exampleImages = [
  { image: imageOne, link: null },
  { image: imageTwo, link: null },
  { image: imageOne, link: null },
  { image: imageTwo, link: 'http://www.google.com' }
]

const stories = storiesOf('ContentImageRow', module)
stories.addDecorator(withKnobs)
stories.add('with text', () => (
  <ContentImageRow
    title={text('Title', 'Hello ContentImageRow')}
    images={exampleImages}
  />
))
