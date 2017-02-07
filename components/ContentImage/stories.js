import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import ContentImage from './component'

const notes = 'This story demonstrates the props that can be passed to ContentImage'

const props = {
  image: 'http://placekitten.com/g/1280/800',
  altText: 'Image Alt Text',
  title: 'Image Title'
}

storiesOf('ContentImage', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ContentImage
          image={text('Drop the URL to the image here.', props.image)}
          altText={text('Alt text for the image.', props.altText)}
          title={text('Title for the image.', props.title)}
        />
      </WithNotes>
    )
  })
