import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import ContentList from './component'

const stories = storiesOf('ContentList', module);

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <ContentList
    title={text('Title', 'Hello ContentList')}
  />
));
