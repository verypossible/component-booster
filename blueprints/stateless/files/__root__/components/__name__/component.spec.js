import React from 'react'
import <%= pascalEntityName %> from './component'
import { shallow } from 'enzyme'

describe('(Component) <%= pascalEntityName %>', () => {
  it('breaks cause you have to write a test', () => {
    const subject = shallow(<<%= pascalEntityName %> />)

    expect(subject.text()).toEqual('this will never work! muahahahahahahah!')
  })
})
