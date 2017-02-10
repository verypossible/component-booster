import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import ContentCard from './component'

const stories = storiesOf('ContentCard', module)

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <ContentCard
    link={text('Link URL', 'http://test.com')}
    image={text('Image URL', [`https://images.unsplash.com/uploads/141219324227007364f95/be0967a3?dpr=2&auto=\
format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=`])}
    title={text('Header Title', 'Card Title')}
    body={text('Card Body',
      [`Lomo echo park banh mi migas. \
Tote bag normcore scenester semiotics seitan, tofu try-hard shabby\
chic farm-to-table pitchfork humblebrag chicharrones. \
Aesthetic hexagon jianbing, stumptown tote bag everyday \
Wayfarers sriracha occupy, four dollar toast art party hammock ramps. \
Messenger bag kombucha lyft echo park blog migas.`])}
  />
))
