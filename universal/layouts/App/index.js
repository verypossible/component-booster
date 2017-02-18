import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from 'layouts/Home'
import Topics from 'layouts/Topics'
import Button from 'layouts/Button'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/button">Button</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
      <Route path="/button" component={Button} />
    </div>
  </Router>
)

export default BasicExample
