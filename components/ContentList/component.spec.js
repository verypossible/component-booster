import React from 'react'
import ContentList from './component'
import { shallow } from 'enzyme'

describe('(Component) ContentList', () => {
  it('breaks cause you have to write a test', () => {
    const subject = shallow(<ContentList />)

    expect(subject.text()).toEqual('this will never work! muahahahahahahah!')
  })
})
