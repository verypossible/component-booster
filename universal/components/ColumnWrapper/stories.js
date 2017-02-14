import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'
import ColumnWrapper from './component'
import ContentCard from '../ContentCard/component'

const notes = `This component allows you to specify how many columns you want in your layout.
As we have still haven't decided on a grid system, this component primarily demonstrates how we can
control the layout using the parent component.`

const props = {
  numColumns: [
    'oneCol',
    'twoCol',
    'threeCol',
    'fourCol'
  ]
}

const stories = storiesOf('ColumnWrapper', module)
stories.addDecorator(withKnobs)
stories.add('with text', () => (
  <WithNotes notes={notes}>
    <ColumnWrapper numColumns={select('How many columns?', props.numColumns, props.numColumns[1])}>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </ColumnWrapper>
  </WithNotes>
))
