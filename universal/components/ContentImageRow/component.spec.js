import React from 'react'
import ContentImageRow from './component'
import { shallow } from 'enzyme'

describe('(Component) ContentImageRow', () => {
  it('breaks cause you have to write a test', () => {
    const subject = shallow(<ContentImageRow />)

    expect(subject.text()).toEqual('this will never work! muahahahahahahah!')
  })
})
