import React from 'react'
import { configure, addDecorator } from '@kadira/storybook';

const req = require.context('../universal/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const CenterDecorator = (story) => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0",
    padding: "0 0",
    height: "95vh"
  }}>
    {story()}
  </div>
)

addDecorator(CenterDecorator)

configure(loadStories, module);
