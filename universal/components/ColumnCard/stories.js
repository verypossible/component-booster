import React from 'react'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, select, text } from '@kadira/storybook-addon-knobs'
import ColumnCard from './component'

const notes = `As we have still haven't decided on a grid system, this component demonstrates an
approach where each component controls how many columns it spans.
Similar to LostGrid or Thoughtbot's 'span-column' approach.`

const props = {
  spanColumns: [
    'span12',
    'span6',
    'span4',
    'span3'
  ]
}

const stories = storiesOf('ColumnCard', module)

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <WithNotes notes={notes}>
    <ColumnCard
      spanColumns={select('Span how many columns?', props.spanColumns, props.spanColumns[1])}
      title={text('Title', 'This is the Column Card')}
      body={text('Body Text', 'I control my own layout destiny')}
    />
  </WithNotes>
))
