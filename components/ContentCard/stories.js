import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import ContentCard from './component'

const stories = storiesOf('ContentCard', module);

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <ContentCard
    image={text('Image URL', 'https://images.unsplash.com/uploads/141219324227007364f95/be0967a3?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=')}
    title={text('Header Title', 'Card Title')}
    body={text('Card Body', 'Some Card Body Text')}
  />
));
