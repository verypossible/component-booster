import React from 'react'
import { storiesOf } from '@kadira/storybook'
// import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import SectionFullWidth from './component'

// const notes = 'This story demonstrates the props that can be passed to fullWidthSection.'

const props = {
  customClass: 'customClass',
  boxModel: [
    'boxDefault',
    'flexCol',
    'flexRow'
  ],
  bg: [
    'bgDefault',
    'white',
    'black'
  ],
  sectionPadding: [
    'paddingDefault',
    'paddingTrue',
    'paddingFalse'
  ],
  sectionMargin: [
    'marginDefault',
    'marginTrue',
    'marginTop',
    'marginBottom'
  ]
}

storiesOf('SectionFullWidth', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      // <WithNotes notes={notes}>
      <SectionFullWidth
        customClass={text('type in a custom class that will show up in the DOM?', props.customClass)}
        boxModel={select('What box model is this section?', props.boxModel, props.boxModel[0])}
        bg={select('What background do you want? Default is transparent.', props.bg, props.bg[0])}
        sectionPadding={select('Do you need padding on this section?', props.sectionPadding, props.sectionPadding[0])}
        sectionMargin={select('Does this section need margins before and/or after the padding?',
          props.sectionMargin, props.sectionMargin[0])}
      >
        <p>I am placeholder content!</p>
        <p>I am placeholder content!</p>
        <p>I am placeholder content!</p>
      </SectionFullWidth>
      // </WithNotes>
    )
  })
