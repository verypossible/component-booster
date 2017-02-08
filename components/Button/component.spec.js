import React from 'react'
import Button from './component'
import { shallow } from 'enzyme'

describe('(Component) Button', () => {
  it('breaks cause you have to write a test', () => {
    const subject = shallow(<Button />)

    expect(subject.text()).toEqual('this will never work! muahahahahahahah!')
  })
})
