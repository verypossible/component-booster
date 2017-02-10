import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs'

import Button from './component'

const notes = 'This story demonstrates the props that can be passed to <Button />'

const props = {
  disabled: false,
  url: '/',
  label: 'Button Story',
  target: [
    '_self',
    '_blank'
  ],
  color: [
    'dark',
    'light'
  ]
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Button
          disabled={boolean('Disabled', props.disabled)}
          target={select('External', props.target, props.target[0])}
          url={text('URL Target', props.url)}
          color={select('Color', props.color, props.color[0])}
          text={text('Label Text', props.label)}
        />
      </WithNotes>
    )
  })
