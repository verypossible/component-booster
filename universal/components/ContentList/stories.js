import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import ContentList from './component'

const notes = 'This story demonstrates the props that can be passed to the ContentList component.'

const props = {
  title: 'Section Title',
  itemWidth: [
    'full',
    'half',
    'quarter',
    'third'
  ],
  itemsList: [
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item',
    'List Item'
  ]
}

storiesOf('ContentList', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ContentList
          title={text('Title of list:', props.title)}
          itemWidth={select('how wide do you want each list item?', props.itemWidth)}
          items={props.itemsList}
        />
      </WithNotes>
    )
  })
